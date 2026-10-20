
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Plane,
  Train,
  Bus,
  Hotel,
  MapPin,
  BookUser,
  type LucideIcon,
} from 'lucide-react';

interface ServiceCardProps {
  service: {
    id: string;
    title: string;
    description: string;
    icon: string;
    bgColor: string;
    textColor: string;
  };
}

const serviceIcons: Record<string, LucideIcon> = {
  Plane,
  Train,
  Bus,
  Hotel,
  MapPin,
  Passport: BookUser,
};

const ServiceCard = ({ service }: ServiceCardProps) => {
  const Icon = serviceIcons[service.icon] ?? MapPin;

  return (
    <Link
      to={`/services#${service.id}`}
      prefetch="intent"
      className="service-card"
    >
      <Icon className="service-card__icon" size={25} strokeWidth={1.5} aria-hidden="true" />
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <span className="service-card__action">
        Explore service <ArrowRight size={15} aria-hidden="true" />
      </span>
    </Link>
  );
};

export default ServiceCard;
