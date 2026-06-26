import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import USPs from './components/USPs';
import LicenseClasses from './components/LicenseClasses';
import FleetAndTeam from './components/FleetAndTeam';
import LocationsAndTheory from './components/LocationsAndTheory';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { Phone } from 'lucide-react';
import { SITE_INFO } from './data/siteData';

function App() {
  // Scroll Reveal Logic
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('[data-reveal]');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-root">
      <Header />
      <main>
        <Hero />
        <USPs />
        <LicenseClasses />
        <LocationsAndTheory />
        <FleetAndTeam />
        <ContactForm />
      </main>
      <Footer />

      {/* Sticky Mobile CTA */}
      <div className="mobile-sticky-cta">
        <a href={SITE_INFO.phoneHref} className="cta-button cta-button--phone">
          <Phone size={20} /> <span>Anrufen</span>
        </a>
        <button 
          className="cta-button cta-button--main"
          onClick={() => document.getElementById('kontakt').scrollIntoView({ behavior: 'smooth' })}
        >
          Jetzt anmelden
        </button>
      </div>

      <style>{`
        .app-root {
          position: relative;
        }

        .mobile-sticky-cta {
          position: fixed;
          bottom: 20px;
          left: 20px;
          right: 20px;
          display: flex;
          gap: 10px;
          z-index: 900;
          display: flex;
        }

        .cta-button {
          flex: 1;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border-radius: var(--radius-md);
          font-weight: 700;
          font-size: 15px;
          box-shadow: 0 10px 30px -10px rgba(0,0,0,0.3);
          transition: transform 0.2s;
        }

        .cta-button:active { transform: scale(0.96); }

        .cta-button--phone {
          background: var(--surface);
          color: var(--petrol-700);
          max-width: 140px;
        }

        .cta-button--main {
          background: var(--amber);
          color: #241a05;
        }

        @media (min-width: 768px) {
          .mobile-sticky-cta {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
