import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import FlightInquiryForm from '../components/FlightInquiryForm';

const Flights = () => {
  const location = useLocation();
  const state: unknown = location.state;
  const prefillDestination =
    state !== null &&
    typeof state === 'object' &&
    'destination' in state &&
    typeof state.destination === 'string'
      ? state.destination
      : undefined;

  return (
    <>
      <Navbar />
      <main>
        <section className="page-intro page-intro--image">
          <img
            className="page-intro__image"
            src="/images/flight-window.jpg"
            alt=""
            width="1200"
            height="800"
            onError={(event) => {
              event.currentTarget.style.display = 'none';
            }}
          />
          <div className="page-width page-intro__inner">
            <span className="eyebrow">Start your journey</span>
            <h1>Let’s get you<br />on your way.</h1>
            <p>
              Share your flight details and we’ll be in touch to discuss your
              enquiry.
            </p>
          </div>
        </section>
        <section className="page-body section--ivory">
          <div className="page-width flight-section">
            <div className="flight-section__intro">
              <span className="eyebrow">Flight assistance</span>
              <h2>A few details are all we need to begin.</h2>
              <p>
                Complete the form and your request will open in WhatsApp for
                you to review and send to Prince Travels.
              </p>
              <p className="flight-section__note">
                Sending an enquiry does not reserve a seat or guarantee a
                ticket, fare, or availability.
              </p>
            </div>
          <FlightInquiryForm
            prefillDestination={prefillDestination}
          />
          </div>
        </section>
      </main>
    </>
  );
};

export default Flights;