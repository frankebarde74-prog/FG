import React from 'react';
import { ArrowRight, ShieldCheck, MapPin, Clock } from 'lucide-react';
import heroBg from '../assets/hero_bg.png';

const Hero = () => {
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
    <section className="hero">
      <div className="hero__bg">
        <img src={heroBg} alt="Modernes Fahrschulauto auf der Straße" />
        <div className="hero__overlay"></div>
      </div>
      
      <div className="wrap hero__inner">
        <div className="hero__content" data-reveal>
          <span className="eyebrow eyebrow--light">Moped · Motorrad · Auto — Marburg</span>
          <h1 className="hero__title">
            Den nächsten Schritt zu deiner Mobilität gehen wir <em>gemeinsam</em>.
          </h1>
          <p className="hero__lead">
            Seit 1996 bringen wir dich sicher auf die Straße. Mit modernen Fahrzeugen, 
            Theorie im Schnellverfahren und einem Team, das dich wirklich unterstützt.
          </p>
          
          <div className="hero__actions">
            <button className="btn btn--amber btn--lg" onClick={() => scrollTo('kontakt')}>
              Jetzt anmelden <ArrowRight size={20} />
            </button>
            <button className="btn btn--outline-light btn--lg" onClick={() => scrollTo('klassen')}>
              Führerscheinklassen
            </button>
          </div>
          
          <ul className="hero__trust">
            <li><ShieldCheck size={18} /> Familienbetrieb seit 1996</li>
            <li><MapPin size={18} /> 3 Standorte in & um Marburg</li>
            <li><Clock size={18} /> 4× Theorie pro Woche</li>
          </ul>
        </div>
      </div>

      <style>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 100px;
          color: #fff;
          background: var(--petrol-900);
        }

        .hero__bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .hero__bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(160deg, rgba(11, 53, 54, 0.95) 0%, rgba(11, 53, 54, 0.4) 100%);
        }

        .hero__inner {
          position: relative;
          z-index: 1;
        }

        .hero__content {
          max-width: 800px;
        }

        .hero__title {
          font-family: var(--ff-display);
          font-weight: 800;
          font-size: clamp(40px, 8vw, 76px);
          line-height: 1.05;
          letter-spacing: -0.03em;
          margin-bottom: 24px;
        }

        .hero__title em {
          font-style: normal;
          color: var(--amber);
        }

        .hero__lead {
          font-size: clamp(18px, 2.5vw, 22px);
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.5;
          margin-bottom: 40px;
          max-width: 650px;
        }

        .hero__actions {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 48px;
        }

        .hero__trust {
          display: flex;
          flex-wrap: wrap;
          gap: 12px 32px;
          list-style: none;
        }

        .hero__trust li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 600;
          font-size: 15px;
          color: rgba(255, 255, 255, 0.9);
        }

        .hero__trust svg {
          color: var(--amber);
        }

        @media (max-width: 768px) {
          .hero {
            min-height: auto;
            padding-bottom: 80px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
