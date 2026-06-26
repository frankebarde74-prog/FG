import React, { useState } from 'react';
import { Send, Check, Phone, Mail, ShieldCheck } from 'lucide-react';
import { SITE_INFO, LICENSE_CLASSES } from '../data/siteData';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    licenseClass: '',
    message: '',
    consent: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name ist erforderlich';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Gültige E-Mail erforderlich';
    if (!formData.phone.trim()) newErrors.phone = 'Telefon für Rückfragen erforderlich';
    if (!formData.consent) newErrors.consent = 'Bitte stimme den Datenschutzbestimmungen zu';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 1500);
    }
  };

  if (isSuccess) {
    return (
      <div className="form-result success" data-reveal>
        <div className="success-icon"><Check size={40} /></div>
        <h3>Anfrage gesendet!</h3>
        <p>Vielen Dank, {formData.name.split(' ')[0]}. Wir haben deine Nachricht erhalten und melden uns in Kürze bei dir.</p>
        <button className="btn btn--petrol" onClick={() => {
          setIsSuccess(false);
          setFormData({ name: '', email: '', phone: '', licenseClass: '', message: '', consent: false });
        }}>
          Neue Nachricht senden
        </button>
      </div>
    );
  }

  return (
    <section id="kontakt" className="sec sec--petrol">
      <div className="wrap contact-container">
        <div className="contact-info" data-reveal>
          <span className="eyebrow eyebrow--light">Kontakt & Anmeldung</span>
          <h2 className="sec-title">Starte jetzt deine Ausbildung</h2>
          <p className="sec-lead">
            Hast du Fragen zum Ablauf, zu den Preisen oder möchtest du dich direkt anmelden? 
            Schreib uns oder ruf einfach kurz an.
          </p>

          <div className="contact-direct">
            <a href={SITE_INFO.phoneHref} className="contact-card">
              <div className="contact-card__icon"><Phone size={24} /></div>
              <div className="contact-card__text">
                <span>Telefonisch</span>
                <strong>{SITE_INFO.phone}</strong>
              </div>
            </a>
            <a href={`mailto:${SITE_INFO.email}`} className="contact-card">
              <div className="contact-card__icon"><Mail size={24} /></div>
              <div className="contact-card__text">
                <span>Per E-Mail</span>
                <strong>{SITE_INFO.email}</strong>
              </div>
            </a>
          </div>

          <div className="contact-hint">
            <ShieldCheck size={18} />
            <p>Deine Daten werden verschlüsselt übertragen und nur zur Bearbeitung deiner Anfrage genutzt.</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} data-reveal>
          <div className="form-grid">
            <div className="input-group">
              <label className="input-label">Vor- und Nachname*</label>
              <input 
                type="text" 
                className={`input-field ${errors.name ? 'error' : ''}`}
                placeholder="Max Mustermann"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              {errors.name && <span className="error-text">{errors.name}</span>}
            </div>

            <div className="input-group">
              <label className="input-label">E-Mail Adresse*</label>
              <input 
                type="email" 
                className={`input-field ${errors.email ? 'error' : ''}`}
                placeholder="dein@mail.de"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            <div className="input-group">
              <label className="input-label">Telefonnummer*</label>
              <input 
                type="tel" 
                className={`input-field ${errors.phone ? 'error' : ''}`}
                placeholder="Für den Rückruf"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
              {errors.phone && <span className="error-text">{errors.phone}</span>}
            </div>

            <div className="input-group">
              <label className="input-label">Gewünschte Klasse</label>
              <select 
                className="input-field"
                value={formData.licenseClass}
                onChange={(e) => setFormData({...formData, licenseClass: e.target.value})}
              >
                <option value="">Bitte wählen...</option>
                {LICENSE_CLASSES.map(c => (
                  <option key={c.code} value={c.code}>{c.code} — {c.kind}</option>
                ))}
                <option value="other">Noch unsicher</option>
              </select>
            </div>

            <div className="input-group full-width">
              <label className="input-label">Deine Nachricht (Optional)</label>
              <textarea 
                className="input-field"
                rows="4"
                placeholder="Wie können wir dir helfen?"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>

            <div className="input-group full-width">
              <label className={`checkbox-label ${errors.consent ? 'error' : ''}`}>
                <input 
                  type="checkbox" 
                  checked={formData.consent}
                  onChange={(e) => setFormData({...formData, consent: e.target.checked})}
                />
                <span>Ich akzeptiere die Datenschutzhinweise und bin mit der Verarbeitung meiner Daten einverstanden.*</span>
              </label>
            </div>

            <button type="submit" className="btn btn--amber btn--lg btn--full" disabled={isSubmitting}>
              {isSubmitting ? 'Wird gesendet...' : <>Anfrage absenden <Send size={18} /></>}
            </button>
          </div>
        </form>
      </div>

      <style>{`
        .contact-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 60px;
          align-items: start;
        }

        .contact-info {
          max-width: 500px;
        }

        .contact-direct {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin: 32px 0;
        }

        .contact-card {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 20px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: var(--radius-md);
          transition: all var(--tr-base);
        }

        .contact-card:hover {
          background: rgba(255,255,255,0.1);
          border-color: var(--amber);
        }

        .contact-card__icon {
          width: 48px;
          height: 48px;
          background: var(--petrol-700);
          color: var(--amber);
          border-radius: 12px;
          display: grid;
          place-items: center;
        }

        .contact-card__text {
          display: flex;
          flex-direction: column;
        }

        .contact-card__text span {
          font-size: 13px;
          color: rgba(255,255,255,0.6);
          font-weight: 600;
          text-transform: uppercase;
        }

        .contact-card__text strong {
          font-size: 18px;
          font-weight: 700;
        }

        .contact-hint {
          display: flex;
          gap: 12px;
          font-size: 14px;
          color: rgba(255,255,255,0.5);
        }

        .contact-form {
          background: var(--surface);
          color: var(--ink);
          padding: 40px;
          border-radius: var(--radius-lg);
          box-shadow: 0 20px 50px -15px rgba(0,0,0,0.3);
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4px;
        }

        .full-width {
          grid-column: 1 / -1;
        }

        .error-text {
          color: #e53e3e;
          font-size: 12px;
          font-weight: 600;
          margin-top: 4px;
          display: block;
        }

        .checkbox-label.error {
          color: #e53e3e;
        }

        .form-result {
          background: var(--surface);
          max-width: 600px;
          margin: 0 auto;
          padding: 60px;
          border-radius: var(--radius-lg);
          text-align: center;
          box-shadow: 0 30px 60px -20px rgba(0,0,0,0.15);
        }

        .success-icon {
          width: 80px;
          height: 80px;
          background: #c6f6d5;
          color: #2f855a;
          border-radius: 50%;
          display: grid;
          place-items: center;
          margin: 0 auto 24px;
        }

        .form-result h3 {
          font-family: var(--ff-display);
          font-size: 32px;
          margin-bottom: 16px;
        }

        .form-result p {
          color: var(--muted);
          font-size: 18px;
          margin-bottom: 32px;
        }

        @media (min-width: 768px) {
          .form-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px 20px;
          }
        }

        @media (min-width: 1024px) {
          .contact-container {
            grid-template-columns: 1fr 1.2fr;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactForm;
