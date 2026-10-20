
import { useState, type ChangeEvent, type FormEvent } from 'react';
import { useLocation } from 'react-router-dom';
import { config } from '../config/site';
import Navbar from '../components/Navbar';

type FormData = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const Contact = () => {
  const location = useLocation();
  const state: unknown = location.state;
  const initialService =
    state !== null &&
    typeof state === 'object' &&
    'service' in state &&
    typeof state.service === 'string'
      ? state.service
      : '';

  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    service: initialService,
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => {
      const next = { ...previous };
      delete next[name as keyof FormData];
      return next;
    });
  };

  const validateForm = (): FormErrors => {
    const nextErrors: FormErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = 'Name is required.';
    }

    const phoneDigits = formData.phone.replace(/\D/g, '');

    if (!formData.phone.trim()) {
      nextErrors.phone = 'Phone number is required.';
    } else if (phoneDigits.length < 10 || phoneDigits.length > 15) {
      nextErrors.phone = 'Enter a valid phone number with 10–15 digits.';
    }

    if (
      formData.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      nextErrors.email = 'Enter a valid email address.';
    }

    if (!formData.service) {
      nextErrors.service = 'Please select a service.';
    }

    if (!formData.message.trim()) {
      nextErrors.message = 'Message is required.';
    }

    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    const selectedService =
      config.services.find((service) => service.id === formData.service)?.title ??
      formData.service;

    const message = [
      'Hello Prince Travels! I have a travel inquiry.',
      '',
      `Name: ${formData.name.trim()}`,
      `Phone: ${formData.phone.trim()}`,
      `Email: ${formData.email.trim() || 'Not provided'}`,
      `Service: ${selectedService}`,
      '',
      'Message:',
      formData.message.trim(),
    ].join('\n');

    const whatsappUrl = `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(message)}`;
    setSubmittedUrl(whatsappUrl);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const inputClass = 'form-control';

  const errorClass = 'form-error';

  return (
    <>
      <Navbar />
      <main>
        <section className="page-intro">
          <div className="page-width page-intro__inner">
            <span className="eyebrow">We’re ready when you are</span>
            <h1>Let’s talk<br />about your trip.</h1>
            <p>Tell us what you’re planning. Our team in Kasaragod is here to help you explore the next step.</p>
          </div>
        </section>
        <section className="page-body section--ivory">
          <div className="page-width contact-layout">
            <section className="contact-details">
              <span className="eyebrow">Get in touch</span>
              <h2>A real conversation<br />starts here.</h2>
              <p>
                We’re here to help with your travel inquiries. Contact us using
                any of the details below.
              </p>
              <div className="contact-detail">
                <span className="contact-detail__label">WhatsApp</span>
                <a className="contact-detail__value" href={`https://wa.me/${config.whatsapp}`} target="_blank" rel="noreferrer">{config.phone}</a>
              </div>
              <div className="contact-detail">
                <span className="contact-detail__label">Phone</span>
                <a className="contact-detail__value" href={`tel:${config.phone.replace(/\s/g, '')}`}>{config.phone}</a>
              </div>
              <div className="contact-detail">
                <span className="contact-detail__label">Email</span>
                <a className="contact-detail__value" href={`mailto:${config.email}`}>{config.email}</a>
              </div>
              <div className="contact-detail">
                <span className="contact-detail__label">Visit</span>
                <p className="contact-detail__value">{config.address}</p>
              </div>
            </section>
            <section className="contact-form-wrap">
              <span className="eyebrow">Your enquiry</span>
              <h2>How can we help?</h2>
              <p>
                Fill in the details below. Your message will be prepared in
                WhatsApp so you can review and send it to us.
              </p>
              {submittedUrl ? (
                <div className="form-success" role="status">
                  <h3>Your message is ready.</h3>
                  <p>
                    WhatsApp should have opened with your enquiry. Review it
                    there and press send. If it did not open, use the button below.
                  </p>
                  <div className="form-success__actions">
                    <a className="button button--gold" href={submittedUrl} target="_blank" rel="noreferrer">
                      Continue to WhatsApp
                    </a>
                    <button
                      className="button"
                      type="button"
                      onClick={() => setSubmittedUrl(null)}
                    >
                      Edit enquiry
                    </button>
                  </div>
                </div>
              ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div>
                  <label htmlFor="name" className="form-label">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={inputClass}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className={errorClass}>
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className={inputClass}
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                  />
                  {errors.phone && (
                    <p id="phone-error" className={errorClass}>
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="form-label">
                    Email Address (Optional)
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className={inputClass}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className={errorClass}>
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="service" className="form-label">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={inputClass}
                    aria-invalid={Boolean(errors.service)}
                    aria-describedby={
                      errors.service ? 'service-error' : undefined
                    }
                  >
                    <option value="">Select a service</option>
                    {config.services.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p id="service-error" className={errorClass}>
                      {errors.service}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your travel plans..."
                    rows={5}
                    className={`${inputClass} form-control--textarea`}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={
                      errors.message ? 'message-error' : undefined
                    }
                  />
                  {errors.message && (
                    <p id="message-error" className={errorClass}>
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="button button--navy"
                >
                  Continue to WhatsApp
                </button>
              </form>
              )}
            </section>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
