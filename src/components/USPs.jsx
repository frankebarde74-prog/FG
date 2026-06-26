import React from 'react';
import { Clock, Car, Bike, Smartphone } from 'lucide-react';

const USPs = () => {
  const items = [
    { icon: Clock, title: "Theorie im Schnellverfahren", desc: "4× pro Woche Unterricht. Du kannst jederzeit einsteigen und kommst zügig durch." },
    { icon: Car, title: "B197 (Schalter & Automatik)", desc: "Lerne auf beidem und fahre später, was du willst — ohne Automatik-Einschränkung." },
    { icon: Bike, title: "Motorrad mit Leidenschaft", desc: "Von Roller bis offene Klasse A. Wir schul von Motorrad zu Motorrad." },
    { icon: Smartphone, title: "Modernes Lernen", desc: "Gelernt wird mit Beamer, Smartboard und professioneller App für zuhause." },
  ];

  return (
    <section className="usps sec--surface">
      <div className="wrap">
        <div className="usps-grid">
          {items.map((item, i) => (
            <div key={i} className="usp-card" data-reveal style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="usp-card__icon"><item.icon size={28} /></div>
              <h3 className="usp-card__title">{item.title}</h3>
              <p className="usp-card__desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .usps {
          border-bottom: 1px solid var(--line);
        }
        .usps-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 32px;
        }
        .usp-card {
          padding: 32px;
          border-radius: var(--radius-md);
          background: var(--paper);
          transition: transform var(--tr-base);
        }
        .usp-card:hover {
          transform: translateY(-8px);
          background: var(--surface);
          box-shadow: 0 10px 30px -10px rgba(0,0,0,0.05);
        }
        .usp-card__icon {
          width: 56px;
          height: 56px;
          background: var(--petrol-50);
          color: var(--petrol-700);
          border-radius: 16px;
          display: grid;
          place-items: center;
          margin-bottom: 24px;
        }
        .usp-card__title {
          font-family: var(--ff-display);
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 12px;
        }
        .usp-card__desc {
          color: var(--muted);
          font-size: 15px;
        }
      `}</style>
    </section>
  );
};

export default USPs;
