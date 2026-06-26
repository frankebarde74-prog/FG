import React from 'react';
import { MapPin, Clock, Calendar, Smartphone, ExternalLink } from 'lucide-react';
import { SITE_INFO } from '../data/siteData';

const LocationsAndTheory = () => {
  return (
    <>
      <section id="theorie" className="sec sec--paper">
        <div className="wrap theory-container">
          <div className="theory-main" data-reveal>
            <span className="eyebrow">Theorie</span>
            <h2 className="sec-title">Theorie im Schnellverfahren</h2>
            <p className="sec-lead">
              Wir unterrichten an vier Abenden pro Woche. Ein Einstieg ist jederzeit möglich. 
              Gelernt wird mit Smartboard und einer professionellen App.
            </p>
            
            <div className="theory-hours">
              {SITE_INFO.locations.map(loc => (
                <div key={loc.city} className="theory-hour">
                  <span className="theory-hour__city">{loc.city}</span>
                  <span className="theory-hour__time">
                    <Clock size={16} /> {loc.times}
                  </span>
                </div>
              ))}
            </div>

            <div className="theory-app-hint">
              <div className="theory-app-hint__icon"><Smartphone size={24} /></div>
              <p>Die Zugangsdaten für deine Theorie-App erhältst du direkt bei der Anmeldung.</p>
            </div>
          </div>

          <aside className="theory-news" data-reveal>
            <div className="news-card">
              <div className="news-card__head">
                <Calendar size={20} />
                <h3>Aktuelle Ferienkurse</h3>
              </div>
              <p className="news-card__sub">Alle 14 Theoriethemen der Klasse B in einer Woche — Standort Marburg.</p>
              <ul className="news-list">
                <li className="news-item is-full">
                  <div className="news-item__info">
                    <strong>Osterkurs 2026</strong>
                    <span>27.03. – 07.04.</span>
                  </div>
                  <span className="news-tag news-tag--full">Ausgebucht</span>
                </li>
                <li className="news-item">
                  <div className="news-item__info">
                    <strong>Sommerkurs 1</strong>
                    <span>27.06. – 04.07.</span>
                  </div>
                  <span className="news-tag">Plätze frei</span>
                </li>
                <li className="news-item">
                  <div className="news-item__info">
                    <strong>Sommerkurs 2</strong>
                    <span>01.08. – 08.08.</span>
                  </div>
                  <span className="news-tag">Plätze frei</span>
                </li>
              </ul>
              <button className="btn btn--amber btn--full" onClick={() => document.getElementById('kontakt').scrollIntoView({ behavior: 'smooth' })}>
                Jetzt Platz sichern
              </button>
            </div>
          </aside>
        </div>
      </section>

      <section id="standorte" className="sec sec--soft">
        <div className="wrap">
          <div className="sec-head" data-reveal>
            <span className="eyebrow">Standorte</span>
            <h2 className="sec-title">Drei mal in und um Marburg</h2>
            <p className="sec-lead">Komm einfach zu einem unserer Standorte vorbei — wir sind für dich da.</p>
          </div>

          <div className="locations-grid">
            {SITE_INFO.locations.map((loc, i) => (
              <div key={loc.city} className="location-card" data-reveal style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="location-card__pin"><MapPin size={24} /></div>
                <h3 className="location-card__city">{loc.city}</h3>
                <p className="location-card__address">
                  {loc.street}<br />
                  {loc.zip}
                </p>
                <div className="location-card__time">
                  <Clock size={16} /> {loc.times}
                </div>
                <a href={loc.map} target="_blank" rel="noopener noreferrer" className="location-card__link">
                  Auf Karte ansehen <ExternalLink size={14} />
                </a>
              </div>
            ))}
          </div>

          <div className="office-card" data-reveal>
            <div className="office-card__label">Büro & Verwaltung</div>
            <div className="office-card__content">
              {SITE_INFO.address} · <a href={SITE_INFO.phoneHref}>{SITE_INFO.phone}</a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .theory-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 60px;
        }
        .theory-hours {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin: 32px 0;
        }
        .theory-hour {
          display: flex;
          justify-content: space-between;
          padding: 16px;
          background: var(--soft);
          border-radius: var(--radius-sm);
        }
        .theory-hour__city { font-weight: 700; }
        .theory-hour__time { display: flex; align-items: center; gap: 8px; color: var(--muted); font-weight: 500; }
        
        .theory-app-hint {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px;
          border: 2px dashed var(--line);
          border-radius: var(--radius-md);
          color: var(--muted);
          font-size: 14px;
        }
        .theory-app-hint__icon { color: var(--petrol-700); }

        .news-card {
          background: var(--surface);
          border-radius: var(--radius-lg);
          padding: 32px;
          border: 1px solid var(--line);
          box-shadow: 0 10px 40px -15px rgba(0,0,0,0.05);
        }
        .news-card__head { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; color: var(--petrol-700); }
        .news-card__head h3 { font-family: var(--ff-display); font-size: 20px; }
        .news-card__sub { font-size: 14px; color: var(--muted); margin-bottom: 24px; }
        
        .news-list { list-style: none; display: flex; flex-direction: column; gap: 12px; margin-bottom: 24px; }
        .news-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 16px;
          background: var(--paper);
          border-radius: var(--radius-sm);
        }
        .news-item__info { display: flex; flex-direction: column; line-height: 1.3; }
        .news-item__info strong { font-size: 15px; }
        .news-item__info span { font-size: 13px; color: var(--muted); }
        
        .news-tag { font-size: 12px; font-weight: 700; color: #2f855a; padding: 4px 10px; background: #c6f6d5; border-radius: 99px; }
        .news-tag--full { color: #c53030; background: #fed7d7; }

        .locations-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }
        .location-card {
          background: var(--surface);
          padding: 32px;
          border-radius: var(--radius-lg);
          text-align: center;
          border: 1px solid var(--line);
        }
        .location-card__pin { color: var(--amber); margin-bottom: 20px; }
        .location-card__city { font-family: var(--ff-display); font-size: 24px; margin-bottom: 12px; }
        .location-card__address { color: var(--muted); margin-bottom: 20px; font-size: 15px; line-height: 1.4; }
        .location-card__time { font-weight: 600; font-size: 14px; margin-bottom: 24px; padding: 8px; background: var(--soft); border-radius: 8px; display: inline-flex; align-items: center; gap: 8px; }
        .location-card__link { display: flex; align-items: center; justify-content: center; gap: 8px; font-weight: 700; color: var(--petrol-700); font-size: 14px; }

        .office-card {
          margin-top: 48px;
          text-align: center;
          padding: 24px;
          border-top: 1px solid var(--line);
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .office-card__label { font-family: var(--ff-mono); font-size: 12px; font-weight: 700; color: var(--muted); text-transform: uppercase; }
        .office-card__content { font-weight: 600; }
        .office-card__content a { color: var(--petrol-700); }

        @media (min-width: 1024px) {
          .theory-container { grid-template-columns: 1.5fr 1fr; }
        }
      `}</style>
    </>
  );
};

export default LocationsAndTheory;
