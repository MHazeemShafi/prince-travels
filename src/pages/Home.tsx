import { ArrowRight, Compass, Headphones, Plane } from 'lucide-react';
import { Link } from 'react-router-dom';
import { config } from '../config/site';
import DestinationCard from '../components/DestinationCard';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

const Home = () => {
  const uaeDestinations = config.destinations['United Arab Emirates'];
  const saudiDestinations = config.destinations['Saudi Arabia'];
  const gulfDestinations = config.destinations['Other Gulf'];

  return (
    <>
      <Navbar overlay />
      <main>
        <Hero />

        <section id="discover" className="section section--paper">
          <div className="page-width destination-showcase">
            <div className="destination-showcase__image">
              <img
                src="/images/city-evening.jpg"
                alt="Aerial view of the Burj Al Arab hotel in Dubai"
                width="2000"
                height="1000"
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.style.display = 'none';
                }}
              />
              <span className="image-caption">United Arab Emirates · Dubai</span>
            </div>
            <div className="destination-showcase__copy">
              <span className="eyebrow">Places to begin</span>
              <h2>Closer to the Gulf. Open to everywhere.</h2>
              <p>
                Explore the destinations our travellers ask us about most.
                Share where you want to go and we’ll help you take the next step.
              </p>
              <h3 className="destination-showcase__region">United Arab Emirates</h3>
              <div className="destination-list">
                {uaeDestinations.map((destination) => (
                  <DestinationCard key={destination.name} destination={destination} />
                ))}
              </div>
              <div className="destination-showcase__other">
                <Link
                  to="/destinations"
                  state={{ region: 'Saudi Arabia' }}
                  className="destination-showcase__other-link"
                >
                  <span>
                    <strong>Saudi Arabia</strong>
                    <small>{saudiDestinations.map(({ name }) => name).join(' · ')}</small>
                  </span>
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
                <Link
                  to="/destinations"
                  state={{ region: 'Other Gulf' }}
                  className="destination-showcase__other-link"
                >
                  <span>
                    <strong>Other Gulf</strong>
                    <small>{gulfDestinations.map(({ name }) => name).join(' · ')}</small>
                  </span>
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
              <Link to="/destinations" className="text-link">
                View all destinations <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section className="section section--ivory">
          <div className="page-width experience-layout">
            <div className="experience-image">
              <img
                src="/images/flight-window.jpg"
                alt="A passenger plane wing above the clouds at sunrise"
                width="1200"
                height="800"
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.style.display = 'none';
                }}
              />
              <span className="experience-image__note">The details make the journey.</span>
            </div>
            <div className="experience-copy">
              <span className="eyebrow">Travel, made personal</span>
              <h2>One good conversation can change the way you travel.</h2>
              <p>
                From flight and ticket enquiries to stay and visa assistance,
                Prince Travels brings your travel questions to one helpful place.
                Tell us what you need and our team will be in touch.
              </p>
              <div className="service-list" aria-label="Travel services">
                {config.services.slice(0, 5).map((service, index) => (
                  <Link
                    className="service-row"
                    key={service.id}
                    to={`/services#${service.id}`}
                  >
                    <span className="service-row__number">0{index + 1}</span>
                    <span>
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                    </span>
                    <ArrowRight className="service-row__icon" size={17} aria-hidden="true" />
                  </Link>
                ))}
              </div>
              <Link to="/services" className="text-link">
                Discover all services <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section className="section section--navy">
          <div className="page-width">
            <div className="section-heading">
              <span className="eyebrow">A little more human</span>
              <h2>Local understanding.<br />Travel on your terms.</h2>
              <p>
                Based in Kasaragod, we make it easier to talk through the details
                of your next journey.
              </p>
            </div>
            <div className="reasons">
              <article className="reason">
                <span className="reason__number"><Compass size={25} aria-hidden="true" /></span>
                <h3>Start with your plans</h3>
                <p>Share your route, dates, and questions. We’ll use the details you provide to understand what assistance you’re looking for.</p>
              </article>
              <article className="reason">
                <span className="reason__number"><Headphones size={25} aria-hidden="true" /></span>
                <h3>Speak with our team</h3>
                <p>Continue the conversation directly by phone, email, or WhatsApp—whichever works for you.</p>
              </article>
              <article className="reason">
                <span className="reason__number"><Plane size={25} aria-hidden="true" /></span>
                <h3>Choose what works</h3>
                <p>Review the options shared with you before deciding how you would like to proceed.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section section--paper">
          <div className="page-width">
            <div className="section-heading section-heading--center">
              <span className="eyebrow">A clear next step</span>
              <h2>From first thought to travel plan.</h2>
              <p>Tell us what you have in mind. We’ll help you understand what comes next.</p>
            </div>
            <div className="steps">
              <article className="step">
                <h3>Tell us where</h3>
                <p>Send your destination, dates, passenger details, and any requirements through our enquiry form.</p>
              </article>
              <article className="step">
                <h3>Review your options</h3>
                <p>Our team will review your request and contact you about available assistance and applicable details.</p>
              </article>
              <article className="step">
                <h3>Decide with confidence</h3>
                <p>Check the arrangements carefully and confirm only when you are ready to proceed.</p>
              </article>
            </div>
            <p className="flight-section__note">
              An enquiry is a request for assistance; it does not reserve a seat
              or guarantee a booking, price, or availability.
            </p>
          </div>
        </section>

        <section className="closing-cta">
          <img
            className="closing-cta__image"
            src="/images/kerala-backwaters.jpg"
            alt=""
            width="1200"
            height="800"
            loading="lazy"
            onError={(event) => {
              event.currentTarget.style.display = 'none';
            }}
          />
          <div className="closing-cta__veil" aria-hidden="true" />
          <div className="page-width closing-cta__content">
            <span className="eyebrow">Your next chapter is out there</span>
            <h2>Let’s make a plan for where you want to go.</h2>
            <p>Tell Prince Travels about your trip and start a conversation with our team.</p>
            <Link to="/contact" className="button button--gold">
              Talk to our team <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
