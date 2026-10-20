import Navbar from '../components/Navbar';
import { config } from '../config/site';

const lastUpdated = new Date().toLocaleDateString();

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <main className="page-body section--paper">
        <div className="page-width legal-page">
          <span className="eyebrow">The important details</span>
          <h1>Privacy policy</h1>
          <p className="legal-page__updated">
            Last updated: {lastUpdated}
          </p>

          <div className="legal-content">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-teal-600">
                Introduction
              </h2>
              <p className="text-darkText/60 leading-relaxed">
                Prince Travels ("we", "our", "us") is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your
                information when you visit our website, submit an inquiry, or otherwise interact
                with us.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-teal-600">
                Information We Collect
              </h2>
              <p className="text-darkText/60 leading-relaxed">
                We may collect personal information that you voluntarily provide to us when
                you submit an inquiry through our website, contact us via WhatsApp, email,
                or phone, or otherwise communicate with us. This information may include:
              </p>
              <ul className="list-disc list-space mt-4 pl-6 text-darkText/60">
                <li>Full name</li>
                <li>Phone number</li>
                <li>Email address (optional)</li>
                <li>Travel details (destination, dates, passenger count, etc.)</li>
                <li>Service inquiries (flights, trains, buses, visas, etc.)</li>
                <li>Any additional information you choose to provide</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-teal-600">
                How We Use Your Information
              </h2>
              <p className="text-darkText/60 leading-relaxed">
                We use the information we collect primarily to:
              </p>
              <ul className="list-disc list-space mt-4 pl-6 text-darkText/60">
                <li>Process and respond to your travel inquiries</li>
                <li>Communicate with you about our services via WhatsApp, email, or phone</li>
                <li>Improve our website and services</li>
                <li>Send you important updates (if you opt-in to receive them)</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-teal-600">
                Sharing Your Information
              </h2>
              <p className="text-darkText/60 leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to
                outside parties except in the following limited circumstances:
              </p>
              <ul className="list-disc list-space mt-4 pl-6 text-darkText/60">
                <li>With trusted third parties who assist us in providing travel services
                  (such as airlines, hotels, or visa processing agents), provided they
                  agree to keep this information confidential</li>
                <li>When required to comply with legal obligations</li>
                <li>To protect the rights, property, or safety of Prince Travels,
                  our customers, or others</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-teal-600">
                Data Retention
              </h2>
              <p className="text-darkText/60 leading-relaxed">
                We retain your personal information only as long as necessary to fulfill
                the purposes outlined in this Privacy Policy, unless a longer retention
                period is required or permitted by law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-teal-600">
                Your Rights
              </h2>
              <p className="text-darkText/60 leading-relaxed">
                Depending on your location, you may have the right to:
              </p>
              <ul className="list-disc list-space mt-4 pl-6 text-darkText/60">
                <li>Request access to the personal information we hold about you</li>
                <li>Request correction or deletion of your personal information</li>
                <li>Object to or restrict certain uses of your personal information</li>
                <li>Withdraw consent where we are relying on consent to process your
                  personal information</li>
              </ul>
              <p>
                To exercise these rights, please contact us at{' '}
                <a href={`mailto:${config.email}`}>
                  {config.email}
                </a>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-teal-600">
                Changes to This Policy
              </h2>
              <p className="text-darkText/60 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes
                in our practices or for other operational, legal, or regulatory reasons.
                We will notify you of any material changes by posting the new Privacy
                Policy on this page.
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4 text-teal-600">
                Contact Us
              </h2>
              <p className="text-darkText/60">
                If you have any questions about this Privacy Policy, please contact us:
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

export default PrivacyPolicy;