import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { SITE_INFO, NAV_LINKS } from '../data/siteData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo">
              <div className="logo__mark">FG</div>
              <div className="logo__text">
                <span className="logo__name">Fahrschule Geißler</span>
                <span className="logo__sub">GmbH · Marburg</span>
              </div>
            </div>
            <p className="footer-brand__desc">
              Professionelle Fahrausbildung seit 1996. Wir begleiten dich sicher und mit Freude an das Ziel deiner Mobilität.
            </p>
          </div>

          <div className="footer-grid">
            <div className="footer-col">
              <h4>Navigation</h4>
              <nav className="footer-nav">
                {NAV_LINKS.map(link => (
                  <button key={link.id} onClick={() => document.getElementById(link.id).scrollIntoView({ behavior: 'smooth' })}>
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>

            <div className="footer-col">
              <h4>Kontakt</h4>
              <ul className="footer-contact">
                <li><a href={SITE_INFO.phoneHref}><Phone size={16} /> {SITE_INFO.phone}</a></li>
                <li><a href={`mailto:${SITE_INFO.email}`}><Mail size={16} /> {SITE_INFO.email}</a></li>
                <li><span className="footer-muted">Fax: {SITE_INFO.fax}</span></li>
                <li><span className="footer-muted"><MapPin size={16} /> {SITE_INFO.address}</span></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Rechtliches</h4>
              <div className="footer-legal">
                <span className="footer-muted">Geschäftsführung: Doris Hühn, Florian Benz, Kai Geißler</span>
                <span className="footer-muted">Amtsgericht Marburg HRB 4953</span>
                <span className="footer-muted">St.-Nr. 020 234 20345</span>
                <div className="footer-links">
                  <a href="/impressum">Impressum</a> · <a href="/datenschutz">Datenschutz</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            © {currentYear} Fahrschule Geißler GmbH. Alle Rechte vorbehalten.
          </div>
          <div className="footer-tagline">
            Den nächsten Schritt gehen wir gemeinsam.
          </div>
        </div>
      </div>

      <style>{`
        .footer {
          background: var(--petrol-900);
          color: #fff;
          padding: 80px 0 40px;
          border-top: 1px solid rgba(255,255,255,0.1);
        }
        .footer-top {
          display: grid;
          grid-template-columns: 1fr;
          gap: 60px;
          margin-bottom: 80px;
        }
        .footer-brand {
          max-width: 400px;
        }
        .footer-brand .logo {
          margin-bottom: 24px;
        }
        .footer-brand__desc {
          color: rgba(255,255,255,0.6);
          font-size: 15px;
          line-height: 1.6;
        }
        
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 40px;
        }
        .footer-col h4 {
          font-family: var(--ff-display);
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 24px;
          color: var(--amber);
        }
        
        .footer-nav, .footer-contact, .footer-legal {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .footer-nav button {
          text-align: left;
          font-size: 15px;
          color: rgba(255,255,255,0.7);
          transition: color 0.2s;
        }
        .footer-nav button:hover { color: #fff; }
        
        .footer-contact li a {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 15px;
          color: rgba(255,255,255,0.7);
        }
        .footer-contact li a:hover { color: var(--amber); }
        
        .footer-muted {
          font-size: 14px;
          color: rgba(255,255,255,0.5);
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .footer-links {
          margin-top: 12px;
          font-size: 14px;
          font-weight: 600;
        }
        .footer-links a:hover { text-decoration: underline; }
        
        .footer-bottom {
          padding-top: 40px;
          border-top: 1px solid rgba(255,255,255,0.05);
          display: flex;
          flex-direction: column;
          gap: 16px;
          text-align: center;
          font-size: 13px;
          color: rgba(255,255,255,0.4);
        }
        
        @media (min-width: 768px) {
          .footer-bottom {
            flex-direction: row;
            justify-content: space-between;
            text-align: left;
          }
        }
        @media (min-width: 1024px) {
          .footer-top {
            grid-template-columns: 1fr 2fr;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
