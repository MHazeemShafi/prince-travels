import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className="page-intro">
          <div className="page-width page-intro__inner">
            <span className="eyebrow">Rooted in Kasaragod</span>
            <h1>People first.<br />Always in motion.</h1>
            <p>
              Prince Travels is a travel agency based in Kasaragod, Kerala.
              We help travellers make sense of their options, one conversation
              at a time.
            </p>
          </div>
        </section>

        <section className="section section--paper">
          <div className="page-width about-story">
            <div>
              <span className="eyebrow">Our point of view</span>
              <h2>Travel is personal. The help should be, too.</h2>
              <p>
                Every journey has its own reason. We offer assistance with
                flights, tickets, travel documents, hotel arrangements, and
                tour enquiries so you can talk through the details that matter
                to you.
              </p>
              <p>
                Based in Kasaragod, Kerala, we particularly assist with journeys
                from India to the UAE, Saudi Arabia, and other Gulf destinations.
                We can also discuss domestic Indian travel and other international
                destinations.
              </p>
              <Link to="/contact" className="text-link">
                Get in touch <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
            <div className="about-image">
              <img
                src="/images/kerala-backwaters.jpg"
                alt="A traditional houseboat travelling through Kerala's palm-lined backwaters"
                width="1200"
                height="800"
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>
        </section>

        <section className="section section--navy">
          <div className="page-width">
            <div className="section-heading">
              <span className="eyebrow">What guides us</span>
              <h2>Clear information. Considered choices.</h2>
              <p>
                We aim to make the enquiry process straightforward, with
                personalised assistance and transparent conversations.
              </p>
            </div>
            <div className="reasons">
              <article className="reason">
                <span className="reason__number">01</span>
                <h3>Helpful conversations</h3>
                <p>Talk through your travel needs with our team by phone, email, or WhatsApp.</p>
              </article>
              <article className="reason">
                <span className="reason__number">02</span>
                <h3>More than flight enquiries</h3>
                <p>Ask us about the travel assistance services listed on our website.</p>
              </article>
              <article className="reason">
                <span className="reason__number">03</span>
                <h3>Your decision, your timing</h3>
                <p>An enquiry gives you a chance to discuss options. It is not a confirmed booking or a promise of availability.</p>
              </article>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;