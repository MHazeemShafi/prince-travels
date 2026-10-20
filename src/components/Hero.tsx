import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__fallback" aria-hidden="true" />
      <img
        className="hero__image"
        src="/images/dubai-skyline.jpg"
        alt="Dubai skyline at golden hour, with the Burj Khalifa on the horizon"
        fetchPriority="high"
        onError={(event) => {
          event.currentTarget.style.display = 'none';
        }}
      />
      <div className="hero__veil" aria-hidden="true" />
      <div className="hero__content">
        <div className="hero__copy">
          <span className="eyebrow hero__eyebrow">From Kasaragod to the world</span>
          <h1>Go further.<br /><em>Feel at home.</em></h1>
          <p className="hero__description">
            Thoughtful travel assistance for the journeys that bring you closer
            to what matters.
          </p>
          <div className="hero__actions">
            <Link to="/destinations" className="button button--gold">
              Explore destinations <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link to="/flights" className="button button--outline">
              Plan your trip
            </Link>
          </div>
        </div>
      </div>
      <a className="hero__caption" href="#discover" aria-label="Scroll to discover destinations">
        Discover what’s out there <ArrowDown size={14} aria-hidden="true" />
      </a>
    </section>
  );
};

export default Hero;