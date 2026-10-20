import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import BrandLogo from './BrandLogo';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { config } from '../config/site';

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/destinations', label: 'Destinations' },
  { to: '/services', label: 'Services' },
  { to: '/flights', label: 'Flights' },
  { to: '/about', label: 'Our Story' },
  { to: '/contact', label: 'Contact' },
];

interface NavbarProps {
  overlay?: boolean;
}

const Navbar = ({ overlay = false }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navClass = `site-nav${overlay ? ' site-nav--overlay' : ''}`;

  return (
    <header className={navClass} onKeyDown={(event) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    }}>
      <nav aria-label="Main navigation">
        <div className="site-nav__inner">
          <Link to="/" className="brand" aria-label="Prince Travels home" onClick={() => setIsMenuOpen(false)}>
            <BrandLogo />
          </Link>

          <div className="site-nav__links">
            {navItems.map(({ to, label, end }) => (
              <NavLink key={to} to={to} end={end} className="site-nav__link">
                {label}
              </NavLink>
            ))}
          </div>

          <div className="site-nav__actions">
            <Link to="/flights" className="button button--gold site-nav__cta">
              Plan your trip <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>

          <button
            type="button"
            className="site-nav__menu-button"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
          </button>
        </div>
        {isMenuOpen && (
          <div id="mobile-navigation" className="site-nav__mobile">
            {navItems.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className="site-nav__mobile-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </NavLink>
            ))}
            <a
              className="button button--gold site-nav__mobile-cta"
              href={`https://wa.me/${config.whatsapp}`}
              target="_blank"
              rel="noreferrer"
            >
              Chat on WhatsApp <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;