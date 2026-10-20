
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin } from 'lucide-react';

interface DestinationCardProps {
  destination: {
    name: string;
    country: string;
  };
}

const DestinationCard = ({ destination }: DestinationCardProps) => {
  return (
    <Link
      to="/flights"
      state={{ destination: destination.name }}
      prefetch="intent"
      className="destination-card"
    >
      <span className="destination-card__place">
        <MapPin size={16} aria-hidden="true" />
        <span>
          <strong>{destination.name}</strong>
          <small>{destination.country}</small>
        </span>
      </span>
      <span className="destination-card__action" aria-label={`Request a flight to ${destination.name}`}>
        <ArrowUpRight size={18} aria-hidden="true" />
      </span>
    </Link>
  );
};

export default DestinationCard;
