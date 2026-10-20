import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { config } from '../config/site';
import BrandLogo from './BrandLogo';

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="page-width">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <Link to="/" className="brand" aria-label="Prince Travels home">
              <BrandLogo />
            </Link>
            <p>
              Travel assistance from Kasaragod for the journeys that matter,
              across India, the Gulf, and beyond.
            </p>
          </div>
          <div>
            <h2 className="site-footer__heading">Explore</h2>
            <ul className="site-footer__links">
              <li><Link to="/destinations">Destinations</Link></li>
              <li><Link to="/services">Our services</Link></li>
              <li><Link to="/flights">Flight enquiry</Link></li>
              <li><Link to="/about">Our story</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="site-footer__heading">Information</h2>
            <ul className="site-footer__links">
              <li><Link to="/privacy-policy">Privacy policy</Link></li>
              <li><Link to="/terms">Terms &amp; conditions</Link></li>
            </ul>
          </div>
          <div className="site-footer__contact-group">
            <h2 className="site-footer__heading">Find us</h2>
            <a
              className="site-footer__contact"
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(config.address)}`}
              target="_blank"
              rel="noreferrer"
            >
              {config.address} <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            <a className="site-footer__contact" href={`tel:${config.phone.replace(/\s/g, '')}`}>{config.phone}</a>
            <a className="site-footer__contact" href={`mailto:${config.email}`}>{config.email}</a>
            <a
              className="site-footer__contact"
              href={`https://wa.me/${config.whatsapp}`}
              target="_blank"
              rel="noreferrer"
            >
              Chat with us on WhatsApp <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>© {currentYear} Prince Travels. All rights reserved.</p>
          <p>Travel enquiries are requests for assistance, not confirmed bookings.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;