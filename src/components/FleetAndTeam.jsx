import React from 'react';
import { Car, Bike } from 'lucide-react';
import { FLEET_DATA, TEAM_DATA } from '../data/siteData';
import fleetPkw from '../assets/fleet_pkw.png';
import fleetBike from '../assets/fleet_bike.png';

const FleetAndTeam = () => {
  return (
    <>
      <section id="fuhrpark" className="sec sec--soft">
        <div className="wrap">
          <div className="sec-head" data-reveal>
            <span className="eyebrow">Fuhrpark</span>
            <h2 className="sec-title">Moderne Fahrzeuge für deinen Erfolg</h2>
            <p className="sec-lead">Unsere „Biene Maja“ und „Resi“ kennen den Weg zur Prüfung schon ziemlich gut.</p>
          </div>

          <div className="fleet-grid">
            <div className="fleet-card" data-reveal>
              <div className="fleet-card__img">
                <img src={fleetPkw} alt="Pkw Fuhrpark" />
              </div>
              <div className="fleet-card__content">
                <h3 className="fleet-card__header"><Car size={20} /> Autos · Klasse B / BE</h3>
                <ul className="fleet-list">
                  {FLEET_DATA.pkw.map(v => (
                    <li key={v.name}>
                      <span className="fleet-list__name">{v.name}</span>
                      <span className="fleet-list__note">{v.note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="fleet-card" data-reveal style={{ transitionDelay: '100ms' }}>
              <div className="fleet-card__img">
                <img src={fleetBike} alt="Motorrad Fuhrpark" />
              </div>
              <div className="fleet-card__content">
                <h3 className="fleet-card__header"><Bike size={20} /> Motorräder & Roller</h3>
                <ul className="fleet-list">
                  {FLEET_DATA.bike.map(v => (
                    <li key={v.name}>
                      <span className="fleet-list__name">{v.name}</span>
                      <span className="fleet-list__note">{v.note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="sec sec--paper">
        <div className="wrap about-container">
          <div className="about-text" data-reveal>
            <span className="eyebrow">Über uns</span>
            <h2 className="sec-title">Ein eingespieltes Team — seit 1996</h2>
            <p className="about-p">
              1996 haben wir die Fahrschule Werner Hoffmann in Marburg übernommen. Seitdem bringen wir 
              Fahranfängerinnen und Fahranfänger sicher durch den Straßenverkehr.
            </p>
            <p className="about-p">
              Wir legen großen Wert auf ein gutes Miteinander. Unsere Ausbildung folgt einer pädagogisch 
              bewährten Stufenbildung — so behältst du jederzeit den Überblick.
            </p>
            <div className="team-grid">
              {TEAM_DATA.map(m => (
                <div className="team-member" key={m}>
                  <div className="team-member__avatar">{m[0]}</div>
                  <span className="team-member__name">{m}</span>
                </div>
              ))}
            </div>
            <p className="about-footer">Kai, Thomas, Florian, Kiymet und Doris freuen sich auf euch.</p>
          </div>
          
          <div className="about-stats" data-reveal>
            <div className="stat-card">
              <span className="stat-card__val">1996</span>
              <span className="stat-card__label">Gründungsjahr</span>
            </div>
            <div className="stat-card">
              <span className="stat-card__val">3</span>
              <span className="stat-card__label">Standorte</span>
            </div>
            <div className="stat-card stat-card--accent">
              <span className="stat-card__val">∞</span>
              <span className="stat-card__label">Freude am Fahren</span>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .fleet-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
        }
        .fleet-card {
          background: var(--surface);
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: 0 4px 20px -10px rgba(0,0,0,0.05);
        }
        .fleet-card__img {
          height: 240px;
        }
        .fleet-card__img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .fleet-card__content {
          padding: 32px;
        }
        .fleet-card__header {
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: var(--ff-display);
          font-size: 20px;
          margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--line);
        }
        .fleet-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .fleet-list li {
          display: flex;
          justify-content: space-between;
          font-size: 15px;
        }
        .fleet-list__name {
          font-weight: 700;
        }
        .fleet-list__note {
          color: var(--muted);
          font-size: 14px;
        }

        /* About Section Styles */
        .about-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 60px;
          align-items: center;
        }
        .about-p {
          font-size: 17px;
          color: var(--muted);
          margin-bottom: 24px;
        }
        .team-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 32px;
        }
        .team-member {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 8px 16px 8px 8px;
          background: var(--soft);
          border-radius: var(--radius-full);
          font-weight: 600;
        }
        .team-member__avatar {
          width: 32px;
          height: 32px;
          background: var(--petrol-700);
          color: #fff;
          border-radius: 50%;
          display: grid;
          place-items: center;
          font-size: 14px;
        }
        .about-footer {
          font-weight: 700;
          color: var(--petrol-700);
        }
        .about-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        .stat-card {
          background: var(--soft);
          padding: 32px 24px;
          border-radius: var(--radius-md);
          text-align: center;
        }
        .stat-card--accent {
          background: var(--petrol-700);
          color: #fff;
          grid-column: 1 / -1;
        }
        .stat-card__val {
          display: block;
          font-family: var(--ff-display);
          font-size: 40px;
          font-weight: 800;
          line-height: 1;
          margin-bottom: 8px;
        }
        .stat-card__label {
          font-weight: 600;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          opacity: 0.8;
        }

        @media (min-width: 768px) {
          .fleet-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .about-container { grid-template-columns: 1.2fr 1fr; }
        }
      `}</style>
    </>
  );
};

export default FleetAndTeam;
