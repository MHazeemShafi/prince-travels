import Navbar from '../components/Navbar';
import { config } from '../config/site';

const lastUpdated = new Date().toLocaleDateString();

const Terms = () => {
  return (
    <>
      <Navbar />
      <main className="page-body section--paper">
        <div className="page-width legal-page">
          <span className="eyebrow">The important details</span>
          <h1>Terms &amp; conditions</h1>
          <p className="legal-page__updated">
            Last updated: {lastUpdated}
          </p>

          <div className="legal-content">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-teal-600">
                Acceptance of Terms
              </h2>
              <p className="text-darkText/60 leading-relaxed">
                By accessing and using the Prince Travels website and submitting inquiries
                through our services, you agree to be bound by these Terms and Conditions
                ("Terms"). If you do not agree to these Terms, please do not use our website
                or services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-teal-600">
                Service Description
              </h2>
              <p className="text-darkText/60 leading-relaxed">
                Prince Travels provides travel inquiry and assistance services. We help
                customers submit inquiries for flight, train, bus ticket bookings, visa
                services, passport assistance, hotel bookings, and tour packages.
                <strong>We do not guarantee bookings, prices, or availability.</strong>
                Submitting an inquiry is a request for assistance, not a confirmed booking.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-teal-600">
                Inquiry Process
              </h2>
              <ol className="list-decimal list-space mt-4 pl-6 text-darkText/60">
                <li>You submit travel details through our inquiry forms</li>
                <li>Our team reviews your inquiry</li>
                <li>We contact you with suitable options and applicable prices</li>
                <li>You review the details and follow the agreed confirmation process</li>
              </ol>
              <p className="text-darkText/60 mt-4">
                <strong>Important:</strong> Submitting an inquiry does not reserve a seat,
                guarantee a ticket, or create any binding obligation on either party.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-teal-600">
                Pricing and Availability
              </h2>
              <p className="text-darkText/60 leading-relaxed">
                All prices, fares, and availability mentioned by Prince Travels are subject
                to change without notice. We do not control airline, railway, bus, hotel,
                or other service provider schedules, pricing, or availability. Final prices
                and booking confirmation are determined by the respective service providers.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-teal-600">
                Payment
              </h2>
              <p className="text-darkText/60 leading-relaxed">
                Prince Travels does not process payments directly through this website.
                Payment arrangements are made directly between the customer and the
                respective service providers (airlines, hotels, etc.) or through our
                authorized agents. We are not responsible for any payment transactions
                or disputes between customers and service providers.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-teal-600">
                Visa and Passport Services
              </h2>
              <p className="text-darkText/60 leading-relaxed">
                Prince Travels provides assistance with visa and passport inquiries and
                documentation preparation. However:
              </p>
              <ul className="list-disc list-space mt-4 pl-6 text-darkText/60">
                <li>Visa approval is solely at the discretion of the relevant government
                  authorities</li>
                <li>Passport issuance and renewal are government functions</li>
                <li>We do not guarantee visa approval or passport processing times</li>
                <li>We are not liable for visa denials, delays, or passport-related issues</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-teal-600">
                Changes and Cancellations
              </h2>
              <p className="text-darkText/60 leading-relaxed">
                Any changes, cancellations, or refunds are subject to the policies of
                the respective service providers. Prince Travels is not responsible for
                any fees or penalties imposed by airlines, hotels, or other service
                providers for changes or cancellations.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-teal-600">
                Limitation of Liability
              </h2>
              <p className="text-darkText/60 leading-relaxed">
                To the maximum extent permitted by law, Prince Travels shall not be liable
                for any indirect, incidental, special, consequential, or punitive damages,
                or any loss of profits or revenues, whether incurred directly or indirectly,
                or any loss of data, use, goodwill, or other intangible losses, resulting
                from your access to or use of our website or services.
              </p>
              <p className="text-darkText/60 mt-2">
                Our total liability to you for any claim arising out of or related to
                these Terms or our services shall not exceed the amount paid by you to
                us for services, if any.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-teal-600">
                Governing Law
              </h2>
              <p className="text-darkText/60 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the
                laws of India, without regard to its conflict of law principles.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-teal-600">
                Changes to These Terms
              </h2>
              <p className="text-darkText/60 leading-relaxed">
                We reserve the right to modify or replace these Terms at any time.
                If a revision is material, we will provide notice by updating the
                "Last updated" date at the top of this page. Continued use of our
                website or services after any such changes constitutes your acceptance
                of the new Terms.
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4 text-teal-600">
                Contact Us
              </h2>
              <p className="text-darkText/60">
                If you have any questions about these Terms and Conditions, please
                contact us:
              </p>
              <p>
                Prince Travels<br />
                {config.address}<br />
                <a href={`tel:${config.phone.replace(/\s/g, '')}`}>
                  Phone/WhatsApp: {config.phone}
                </a><br />
                <a href={`mailto:${config.email}`}>
                  Email: {config.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Terms;