import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { config } from '../config/site';
import Navbar from '../components/Navbar';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className="page-intro">
          <div className="page-width page-intro__inner">
            <span className="eyebrow">Travel assistance</span>
            <h1>Good journeys<br />start with good support.</h1>
            <p>
              One place to ask about tickets, travel documents, places to stay,
              and the details that make a trip your own.
            </p>
          </div>
        </section>

        <section className="section section--navy">
          <div className="page-width">
            <div className="section-heading">
              <span className="eyebrow">Ways we can help</span>
              <h2>Practical help for the whole journey.</h2>
              <p>Explore our services and choose the kind of assistance you need.</p>
            </div>
            <div className="service-cards">
              {config.services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>

        <section className="section section--paper">
          <div className="page-width">
            <div className="section-heading">
              <span className="eyebrow">The details matter</span>
              <h2>Here when the plans take shape.</h2>
              <p>
                Tell us what you are looking for and our team can help you discuss
                the next step. Official decisions stay with the relevant providers
                and authorities.
              </p>
            </div>
            <div className="service-detail-list">
              {config.services.map((service, index) => (
                <article key={service.id} id={service.id} className="service-detail">
                  <span className="service-detail__icon">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h2>{service.title}</h2>
                    <p>{service.description}</p>
                  </div>
                  <Link
                    to="/contact"
                    state={{ service: service.id }}
                    className="text-link"
                  >
                    Ask about this <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Services;