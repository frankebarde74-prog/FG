import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { NAV_LINKS, SITE_INFO } from '../data/siteData';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="wrap header__inner">
        <a href="/" className="logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <div className="logo__mark">FG</div>
          <div className="logo__text">
            <span className="logo__name">Fahrschule Geißler</span>
            <span className="logo__sub">Marburg · Seit 1996</span>
          </div>
        </a>

        <nav className="header__nav">
          {NAV_LINKS.map((link) => (
            <button key={link.id} onClick={() => scrollTo(link.id)} className="nav-link">
              {link.label}
            </button>
          ))}
        </nav>

        <div className="header__actions">
          <a href={SITE_INFO.phoneHref} className="header__phone">
            <Phone size={18} />
            <span>{SITE_INFO.phone}</span>
          </a>
          <button className="btn btn--amber btn--sm" onClick={() => scrollTo('kontakt')}>
            Jetzt anmelden
          </button>
        </div>

        <button className="burger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menü">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'is-open' : ''}`}>
        <div className="mobile-menu__inner">
          {NAV_LINKS.map((link) => (
            <button key={link.id} onClick={() => scrollTo(link.id)} className="mobile-link">
              {link.label}
            </button>
          ))}
          <div className="mobile-menu__footer">
            <a href={SITE_INFO.phoneHref} className="mobile-phone">
              <Phone size={20} /> {SITE_INFO.phone}
            </a>
            <button className="btn btn--amber btn--full" onClick={() => scrollTo('kontakt')}>
              Jetzt anmelden
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 80px;
          z-index: 1000;
          transition: all var(--tr-base);
          background: transparent;
        }

        .header--scrolled {
          height: 72px;
          background: rgba(251, 250, 247, 0.95);
          backdrop-filter: blur(12px);
          box-shadow: 0 1px 0 var(--line);
        }

        .header__inner {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .logo__mark {
          width: 44px;
          height: 44px;
          background: var(--petrol-700);
          color: #fff;
          display: grid;
          place-items: center;
          border-radius: 12px;
          font-family: var(--ff-display);
          font-weight: 800;
          font-size: 18px;
        }

        .logo__text {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }

        .logo__name {
          font-family: var(--ff-display);
          font-weight: 800;
          font-size: 18px;
          letter-spacing: -0.01em;
        }

        .logo__sub {
          font-family: var(--ff-mono);
          font-size: 11px;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .header__nav {
          display: none;
          gap: 8px;
        }

        .nav-link {
          padding: 8px 16px;
          font-weight: 600;
          font-size: 15px;
          border-radius: var(--radius-sm);
          transition: all var(--tr-fast);
        }

        .nav-link:hover {
          background: var(--petrol-50);
          color: var(--petrol-700);
        }

        .header__actions {
          display: none;
          align-items: center;
          gap: 24px;
        }

        .header__phone {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--ff-mono);
          font-weight: 700;
          font-size: 15px;
          color: var(--petrol-700);
        }

        .burger {
          display: flex;
          padding: 8px;
        }

        .mobile-menu {
          position: fixed;
          top: 80px;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--paper);
          z-index: 999;
          transform: translateX(100%);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          padding: 24px;
        }

        .mobile-menu.is-open {
          transform: translateX(0);
        }

        .header--scrolled + .mobile-menu {
          top: 72px;
        }

        .mobile-menu__inner {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .mobile-link {
          text-align: left;
          padding: 16px 8px;
          font-size: 20px;
          font-weight: 700;
          border-bottom: 1px solid var(--line);
        }

        .mobile-menu__footer {
          margin-top: auto;
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding-bottom: 40px;
        }

        .mobile-phone {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-family: var(--ff-mono);
          font-weight: 700;
          font-size: 18px;
          color: var(--petrol-700);
        }

        @media (min-width: 1024px) {
          .header__nav, .header__actions {
            display: flex;
          }
          .burger {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
