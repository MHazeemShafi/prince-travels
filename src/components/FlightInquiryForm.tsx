import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface FlightFormData {
  tripType: 'one-way' | 'round-trip';
  from: string;
  to: string;
  departureDate: string;
  returnDate: string;
  adults: number;
  children: number;
  infants: number;
  travelClass: string;
  name: string;
  phone: string;
  email: string;
  requirements: string;
}

interface FlightInquiryFormProps {
  prefillDestination?: string;
}

const WHATSAPP_NUMBER = '918301020143';

const initialFormData: FlightFormData = {
  tripType: 'round-trip',
  from: '',
  to: '',
  departureDate: '',
  returnDate: '',
  adults: 1,
  children: 0,
  infants: 0,
  travelClass: 'Economy',
  name: '',
  phone: '',
  email: '',
  requirements: '',
};

const FlightInquiryForm: React.FC<FlightInquiryFormProps> = ({
  prefillDestination,
}) => {
  const [formData, setFormData] = useState<FlightFormData>(() => ({
    ...initialFormData,
    to: prefillDestination ?? '',
  }));
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [today] = useState(() => {
    const now = new Date();
    return new Date(now.getTime() - now.getTimezoneOffset() * 60_000)
      .toISOString()
      .slice(0, 10);
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === 'departureDate' &&
      prev.returnDate &&
      value > prev.returnDate
        ? { returnDate: '' }
        : {}),
    }));

    setErrors((prev) => {
      const next = { ...prev };
      delete next[name];

      if (name === 'departureDate') {
        delete next.returnDate;
      }

      return next;
    });
  };

  const handleTripTypeChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const tripType = e.target.value as FlightFormData['tripType'];

    setFormData((prev) => ({
      ...prev,
      tripType,
      returnDate: tripType === 'one-way' ? '' : prev.returnDate,
    }));

    setErrors((prev) => {
      const next = { ...prev };
      delete next.returnDate;
      return next;
    });
  };

  const updatePassenger = (
    passenger: 'adults' | 'children' | 'infants',
    amount: number
  ) => {
    setFormData((prev) => ({
      ...prev,
      [passenger]:
        passenger === 'adults'
          ? Math.max(1, prev.adults + amount)
          : Math.max(0, prev[passenger] + amount),
    }));

    setErrors((prev) => {
      const next = { ...prev };
      delete next.adults;
      return next;
    });
  };

  const validateForm = (): Record<string, string> => {
    const next: Record<string, string> = {};

    if (!formData.from.trim()) {
      next.from = 'Departure city is required.';
    }

    if (!formData.to.trim()) {
      next.to = 'Destination city is required.';
    }

    if (!formData.departureDate) {
      next.departureDate = 'Departure date is required.';
    } else if (formData.departureDate < today) {
      next.departureDate = 'Departure date cannot be in the past.';
    }

    if (formData.tripType === 'round-trip') {
      if (!formData.returnDate) {
        next.returnDate = 'Return date is required.';
      } else if (
        formData.departureDate &&
        formData.returnDate < formData.departureDate
      ) {
        next.returnDate =
          'Return date must be on or after the departure date.';
      }
    }

    if (!formData.name.trim()) {
      next.name = 'Full name is required.';
    }

    const phone = formData.phone.replace(/[\s()+-]/g, '');

    if (!formData.phone.trim()) {
      next.phone = 'Phone number is required.';
    } else if (!/^\d{10,15}$/.test(phone)) {
      next.phone = 'Enter a valid phone number with 10–15 digits.';
    }

    if (
      formData.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      next.email = 'Enter a valid email address.';
    }

    if (formData.adults < 1) {
      next.adults = 'At least one adult is required.';
    }

    if (formData.infants > formData.adults) {
      next.infants = 'Infants cannot exceed the number of adults.';
    }

    return next;
  };

  const generateWhatsAppMessage = () => {
    const {
      tripType,
      from,
      to,
      departureDate,
      returnDate,
      adults,
      children,
      infants,
      travelClass,
      name,
      phone,
      email,
      requirements,
    } = formData;

    const lines = [
      '*Flight Inquiry - Prince Travels*',
      '',
      '*Travel Details*',
      `Trip type: ${tripType === 'round-trip' ? 'Round Trip' : 'One Way'}`,
      `From: ${from}`,
      `To: ${to}`,
      `Departure: ${departureDate}`,
    ];

    if (tripType === 'round-trip' && returnDate) {
      lines.push(`Return: ${returnDate}`);
    }

    lines.push(
      `Adults: ${adults}`,
      `Children: ${children}`,
      `Infants: ${infants}`,
      `Travel class: ${travelClass}`,
      '',
      '*Customer Details*',
      `Name: ${name}`,
      `Phone: ${phone}`
    );

    if (email.trim()) {
      lines.push(`Email: ${email}`);
    }

    if (requirements.trim()) {
      lines.push(`Additional requirements: ${requirements}`);
    }

    return lines.join('\n');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      generateWhatsAppMessage()
    )}`;

    // Open WhatsApp directly from the user's submit action.
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsSuccess(true);
  };

  const renderError = (field: string) =>
    errors[field] ? (
      <p id={`${field}-error`} className="form-error" role="alert">
        {errors[field]}
      </p>
    ) : null;

  const inputClass = 'flight-form__control';

  const labelClass = 'form-label';

  const renderPassengerCounter = (
    label: string,
    passenger: 'adults' | 'children' | 'infants'
  ) => (
    <div>
      <label className={labelClass}>{label}</label>
      <div className="flight-form__passenger-controls">
        <button
          type="button"
          onClick={() => updatePassenger(passenger, -1)}
          disabled={
            passenger === 'adults'
              ? formData.adults <= 1
              : formData[passenger] <= 0
          }
          aria-label={`Decrease ${label.toLowerCase()}`}
          className="flight-form__counter-button"
        >
          −
        </button>

        <span className="flight-form__passenger-count" aria-live="polite">
          {formData[passenger]}
        </span>

        <button
          type="button"
          onClick={() => updatePassenger(passenger, 1)}
          aria-label={`Increase ${label.toLowerCase()}`}
          className="flight-form__counter-button"
        >
          +
        </button>
      </div>
      {renderError(passenger)}
    </div>
  );

  if (isSuccess) {
    return (
      <div className="flight-form flight-form--success">
        <h2>
          Inquiry Ready!
        </h2>

        <p className="flight-form__intro">
          Your inquiry details are ready. If WhatsApp did not open automatically,
          use the button below to send your request to Prince Travels.
        </p>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
            generateWhatsAppMessage()
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="button button--gold"
        >
          Send Inquiry via WhatsApp
          <ArrowRight className="h-4 w-4" />
        </a>

        <button
          type="button"
          onClick={() => {
            setFormData({ ...initialFormData, to: prefillDestination ?? '' });
            setErrors({});
            setIsSuccess(false);
          }}
          className="button button--navy"
        >
          Make Another Inquiry
        </button>

        <Link
          to="/"
          className="text-link"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="flight-form">
      <form onSubmit={handleSubmit} className="flight-form__fields" noValidate>
        <h2>
          Flight Inquiry Form
        </h2>

        <p className="flight-form__intro">
          Fill in your travel details to send a booking inquiry to Prince Travels.
        </p>

        <div className="space-y-3">
          <span className={labelClass}>Trip Type</span>

          <div className="flight-form__radios">
            {(['round-trip', 'one-way'] as const).map((type) => (
              <label key={type} className="flight-form__radio-label">
                <input
                  type="radio"
                  name="tripType"
                  value={type}
                  checked={formData.tripType === type}
                  onChange={handleTripTypeChange}
                  className="h-4 w-4 accent-teal-600"
                />
                {type === 'round-trip' ? 'Round Trip' : 'One Way'}
              </label>
            ))}
          </div>
        </div>

        <div className="flight-form__grid">
          <div>
            <label htmlFor="from" className={labelClass}>
              From
            </label>
            <input
              id="from"
              name="from"
              value={formData.from}
              onChange={handleChange}
              placeholder="Departure city or airport"
              className={inputClass}
              aria-invalid={Boolean(errors.from)}
              aria-describedby={errors.from ? 'from-error' : undefined}
              required
            />
            {renderError('from')}
          </div>

          <div>
            <label htmlFor="to" className={labelClass}>
              To
            </label>
            <input
              id="to"
              name="to"
              value={formData.to}
              onChange={handleChange}
              placeholder="Destination city or airport"
              className={inputClass}
              aria-invalid={Boolean(errors.to)}
              aria-describedby={errors.to ? 'to-error' : undefined}
              required
            />
            {renderError('to')}
          </div>
        </div>

        <div
          className={`flight-form__grid ${
            formData.tripType === 'one-way' ? 'flight-form__grid--one' : ''
          }`}
        >
          <div>
            <label htmlFor="departureDate" className={labelClass}>
              Departure Date
            </label>
            <input
              id="departureDate"
              type="date"
              name="departureDate"
              value={formData.departureDate}
              onChange={handleChange}
              min={today}
              className={inputClass}
              aria-invalid={Boolean(errors.departureDate)}
              aria-describedby={errors.departureDate ? 'departureDate-error' : undefined}
              required
            />
            {renderError('departureDate')}
          </div>

          {formData.tripType === 'round-trip' && (
            <div>
              <label htmlFor="returnDate" className={labelClass}>
                Return Date
              </label>
              <input
                id="returnDate"
                type="date"
                name="returnDate"
                value={formData.returnDate}
                onChange={handleChange}
                min={formData.departureDate || today}
                className={inputClass}
                aria-invalid={Boolean(errors.returnDate)}
                aria-describedby={errors.returnDate ? 'returnDate-error' : undefined}
                required
              />
              {renderError('returnDate')}
            </div>
          )}
        </div>

        <div className="flight-form__grid flight-form__grid--three">
          {renderPassengerCounter('Adults', 'adults')}
          {renderPassengerCounter('Children', 'children')}
          {renderPassengerCounter('Infants', 'infants')}
        </div>

        <div>
          <label htmlFor="travelClass" className={labelClass}>
            Travel Class
          </label>
          <select
            id="travelClass"
            name="travelClass"
            value={formData.travelClass}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="Economy">Economy</option>
            <option value="Premium Economy">Premium Economy</option>
            <option value="Business">Business Class</option>
            <option value="First Class">First Class</option>
          </select>
        </div>

        <div>
          <label htmlFor="name" className={labelClass}>
            Full Name
          </label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            autoComplete="name"
            className={inputClass}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
            required
          />
          {renderError('name')}
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            autoComplete="tel"
            className={inputClass}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            required
          />
          {renderError('phone')}
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email Address (Optional)
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            autoComplete="email"
            className={inputClass}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {renderError('email')}
        </div>

        <div>
          <label htmlFor="requirements" className={labelClass}>
            Additional Requirements (Optional)
          </label>
          <textarea
            id="requirements"
            name="requirements"
            value={formData.requirements}
            onChange={handleChange}
            placeholder="Special requests or additional information..."
            rows={3}
            className={inputClass}
          />
        </div>

        <button
          type="submit"
          className="button button--navy flight-form__submit"
        >
          Send Flight Inquiry
          <ArrowRight className="h-4 w-4" />
        </button>

        <p className="flight-form__fine-print">
          Submitting opens WhatsApp with your inquiry details for you to review
          and send.
        </p>
      </form>
    </div>
  );
};

export default FlightInquiryForm;