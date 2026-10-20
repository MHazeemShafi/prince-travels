
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { config } from '../config/site';
import Navbar from '../components/Navbar';
import DestinationCard from '../components/DestinationCard';

type Region = keyof typeof config.destinations;

const isRegion = (value: unknown): value is Region =>
  typeof value === 'string' &&
  Object.prototype.hasOwnProperty.call(config.destinations, value);

const Destinations = () => {
  const regions = Object.keys(config.destinations) as Region[];
  const location = useLocation();
  const routeState: unknown = location.state;
  const requestedRegion =
    routeState !== null && typeof routeState === 'object' && 'region' in routeState
      ? routeState.region
      : undefined;
  const initialRegion =
    isRegion(requestedRegion)
      ? requestedRegion
      : 'United Arab Emirates';
  const [selectedRegion, setSelectedRegion] =
    useState<Region>(initialRegion);
  const destinations = config.destinations[selectedRegion];
  const regionImage =
    selectedRegion === 'United Arab Emirates'
      ? '/images/city-evening.jpg'
      : selectedRegion === 'Saudi Arabia'
        ? '/images/flight-window.jpg'
        : '/images/flight-window.jpg';
  const imageDescription =
    selectedRegion === 'United Arab Emirates'
      ? 'Aerial view of the Burj Al Arab hotel in Dubai'
      : '';

  return (
    <>
      <Navbar />
      <main>
        <section className="page-intro">
          <div className="page-width page-intro__inner">
            <span className="eyebrow">Find your direction</span>
            <h1>Somewhere<br />worth going.</h1>
            <p>
              Browse destinations across the UAE, Saudi Arabia, and the Gulf,
              then send us a flight enquiry for the place on your mind.
            </p>
          </div>
        </section>
        <section className="page-body section--paper">
          <div className="page-width">
            <div className="region-tabs" role="group" aria-label="Choose a destination region">
              {regions.map((region) => (
                <button
                  key={region}
                  type="button"
                  onClick={() => setSelectedRegion(region)}
                  aria-pressed={selectedRegion === region}
                  className="region-tab"
                >
                  {region}
                </button>
              ))}
            </div>
            <div className="region-feature" aria-live="polite">
              <div className="region-feature__image">
                <img
                  src={regionImage}
                  alt={imageDescription}
                  width="1200"
                  height="800"
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <div className="region-feature__copy">
                <span className="eyebrow">Explore the region</span>
                <h2>{selectedRegion}</h2>
                <p>
                  Choose a destination below to start a flight enquiry.
                  Our team can help you discuss your travel plans.
                </p>
                <Link to="/flights" className="text-link">
                  Start an enquiry <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>
            <div className="region-cities" aria-label={`Destinations in ${selectedRegion}`}>
              {destinations.map((destination) => (
                <DestinationCard key={destination.name} destination={destination} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Destinations;
