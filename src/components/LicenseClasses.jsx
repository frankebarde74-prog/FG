import React, { useState } from 'react';
import { ChevronDown, Check, ArrowRight } from 'lucide-react';
import { LICENSE_CLASSES, SITE_INFO } from '../data/siteData';

const LicenseClasses = () => {
  const [activeTab, setActiveTab] = useState('B');

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="klassen" className="sec sec--paper">
      <div className="wrap">
        <div className="sec-head sec-head--center" data-reveal>
          <span className="eyebrow">Führerschein</span>
          <h2 className="sec-title">Für jeden Weg die passende Klasse</h2>
          <p className="sec-lead">
            Vom ersten Moped bis zum BE-Anhänger — wir bilden dich professionell aus. 
            Wähle eine Klasse für mehr Details.
          </p>
        </div>

        <div className="classes-grid">
          {LICENSE_CLASSES.map((c) => (
            <div 
              key={c.code} 
              className={`class-card ${activeTab === c.code ? 'is-active' : ''}`}
              data-reveal
            >
              <button 
                className="class-card__header"
                onClick={() => setActiveTab(activeTab === c.code ? '' : c.code)}
                aria-expanded={activeTab === c.code}
              >
                <div className="class-card__badge">{c.code}</div>
                <div className="class-card__info">
                  <div className="class-card__kind">{c.kind}</div>
                  <div className="class-card__age">{c.age}</div>
                </div>
                <ChevronDown className={`class-card__chevron ${activeTab === c.code ? 'is-open' : ''}`} />
              </button>
              
              <div className="class-card__body">
                <div className="class-card__inner">
                  <p className="class-card__short">{c.short}</p>
                  <ul className="class-card__list">
                    {c.details.map((d, i) => (
                      <li key={i}><Check size={16} /> <span>{d}</span></li>
                    ))}
                  </ul>
                  <button className="btn btn--amber btn--sm btn--full" onClick={() => scrollTo('kontakt')}>
                    Klasse {c.code} anfragen <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="classes-footer" data-reveal>
          <p>Unterstützung bei der Anmeldung oder unsicher welche Klasse? Wir beraten dich gern: <a href={SITE_INFO.phoneHref}>{SITE_INFO.phone}</a></p>
        </div>
      </div>

      <style>{`
        .classes-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }

        .class-card {
          background: var(--surface);
          border: 1px solid var(--line);
          border-radius: var(--radius-md);
          overflow: hidden;
          transition: all var(--tr-base);
        }

        .class-card:hover {
          border-color: var(--petrol-600);
          box-shadow: 0 4px 20px -10px rgba(11, 53, 54, 0.1);
        }

        .class-card.is-active {
          border-color: var(--petrol-700);
          box-shadow: 0 12px 30px -12px rgba(11, 53, 54, 0.15);
        }

        .class-card__header {
          width: 100%;
          padding: 20px 24px;
          display: flex;
          align-items: center;
          gap: 20px;
          background: none;
          text-align: left;
        }

        .class-card__badge {
          width: 54px;
          height: 54px;
          background: var(--petrol-50);
          color: var(--petrol-700);
          border-radius: 12px;
          display: grid;
          place-items: center;
          font-family: var(--ff-display);
          font-weight: 800;
          font-size: 20px;
          flex-shrink: 0;
        }

        .class-card__info {
          flex-grow: 1;
        }

        .class-card__kind {
          font-weight: 700;
          font-size: 17px;
          margin-bottom: 2px;
        }

        .class-card__age {
          font-size: 14px;
          color: var(--muted);
          font-weight: 500;
        }

        .class-card__chevron {
          color: var(--muted);
          transition: transform var(--tr-base);
        }

        .class-card__chevron.is-open {
          transform: rotate(180deg);
        }

        .class-card__body {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows var(--tr-base);
        }

        .class-card.is-active .class-card__body {
          grid-template-rows: 1fr;
        }

        .class-card__inner {
          overflow: hidden;
          padding: 0 24px 24px;
        }

        .class-card__short {
          color: var(--muted);
          margin-bottom: 20px;
          font-size: 15px;
        }

        .class-card__list {
          list-style: none;
          margin-bottom: 24px;
        }

        .class-card__list li {
          display: flex;
          gap: 12px;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 8px;
          color: var(--ink);
        }

        .class-card__list svg {
          color: var(--petrol-600);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .classes-footer {
          margin-top: 48px;
          text-align: center;
          font-size: 15px;
          color: var(--muted);
        }

        .classes-footer a {
          color: var(--petrol-700);
          font-weight: 700;
          border-bottom: 2px solid var(--amber-light);
        }

        @media (min-width: 768px) {
          .classes-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1100px) {
          .classes-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </section>
  );
};

export default LicenseClasses;
