import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Copy, ExternalLink } from 'lucide-react';
import FloatingObjects from './3d/FloatingObjects';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all fields before sending.');
      return;
    }

    setFormStatus('prepared');
  };

  const openEmailClient = () => {
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:trinadatta582@gmail.com?subject=${subject}&body=${body}`;
  };

  const copyContact = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="section" style={{ position: 'relative' }}>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
          <span className="section-label">COMMUNICATION &amp; INQUIRY</span>
          <h2 className="section-title">LET'S CONNECT</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Open to professional discussions, entry-level legal and business opportunities,
            and collaborative academic initiatives.
          </p>
        </div>

        {/* 3 Contact Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3.5rem'
          }}
        >
          {/* Card 1: CALL */}
          <div
            className="glass-panel"
            style={{
              padding: '2.2rem 1.8rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '220px'
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.25rem'
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(197, 160, 89, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--champagne-gold)'
                  }}
                >
                  <Phone size={20} />
                </div>
                <span
                  style={{
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    color: 'var(--champagne-gold)',
                    textTransform: 'uppercase'
                  }}
                >
                  DIRECT CALL
                </span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: 'var(--warm-beige)',
                  marginBottom: '0.4rem',
                  textTransform: 'uppercase'
                }}
              >
                CALL
              </h3>
              <div
                style={{
                  fontSize: '1.15rem',
                  fontWeight: 600,
                  color: 'var(--warm-beige-light)',
                  marginBottom: '1.25rem'
                }}
              >
                +91 8777639920
              </div>
            </div>

            <a
              href="tel:8777639920"
              className="btn btn-primary"
              style={{ padding: '0.7rem 1.4rem', fontSize: '0.78rem', width: '100%' }}
            >
              <Phone size={14} />
              <span>CALL NOW</span>
            </a>
          </div>

          {/* Card 2: EMAIL */}
          <div
            className="glass-panel"
            style={{
              padding: '2.2rem 1.8rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '220px'
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.25rem'
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(216, 164, 155, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--dusty-rose)'
                  }}
                >
                  <Mail size={20} />
                </div>
                <span
                  style={{
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    color: 'var(--dusty-rose)',
                    textTransform: 'uppercase'
                  }}
                >
                  ELECTRONIC MAIL
                </span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: 'var(--warm-beige)',
                  marginBottom: '0.4rem',
                  textTransform: 'uppercase'
                }}
              >
                EMAIL
              </h3>
              <div
                style={{
                  fontSize: '0.96rem',
                  fontWeight: 500,
                  color: 'var(--warm-beige-light)',
                  marginBottom: '1.25rem',
                  wordBreak: 'break-all'
                }}
              >
                trinadatta582@gmail.com
              </div>
            </div>

            <a
              href="mailto:trinadatta582@gmail.com"
              className="btn btn-secondary"
              style={{ padding: '0.7rem 1.4rem', fontSize: '0.78rem', width: '100%' }}
            >
              <Mail size={14} />
              <span>SEND EMAIL</span>
            </a>
          </div>

          {/* Card 3: LOCATION */}
          <div
            className="glass-panel"
            style={{
              padding: '2.2rem 1.8rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '220px'
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.25rem'
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(230, 202, 133, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--champagne-gold-light)'
                  }}
                >
                  <MapPin size={20} />
                </div>
                <span
                  style={{
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    color: 'var(--champagne-gold-light)',
                    textTransform: 'uppercase'
                  }}
                >
                  MAILING ADDRESS
                </span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: 'var(--warm-beige)',
                  marginBottom: '0.4rem',
                  textTransform: 'uppercase'
                }}
              >
                LOCATION
              </h3>
              <div
                style={{
                  fontSize: '0.94rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.5,
                  marginBottom: '1.25rem'
                }}
              >
                19/1, Harish Niogi Road,<br />
                Kolkata - 700067, West Bengal, India
              </div>
            </div>

            <button
              onClick={() => copyContact('19/1, Harish Niogi Road, Kolkata - 700067')}
              className="btn btn-secondary"
              style={{ padding: '0.7rem 1.4rem', fontSize: '0.78rem', width: '100%', cursor: 'pointer' }}
            >
              <Copy size={14} />
              <span>{copied ? 'ADDRESS COPIED!' : 'COPY ADDRESS'}</span>
            </button>
          </div>
        </div>

        {/* Form and 3D Visual Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '2.5rem',
            alignItems: 'center'
          }}
        >
          {/* Left: Contact Form */}
          <div
            style={{ gridColumn: 'span 12' }}
            className="contact-form-col"
          >
            <div className="glass-panel" style={{ padding: 'clamp(2rem, 3.5vw, 3rem)' }}>
              <div style={{ marginBottom: '2rem' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.6rem',
                    fontWeight: 700,
                    color: 'var(--warm-beige)',
                    marginBottom: '0.4rem'
                  }}
                >
                  Send a Direct Message
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  Feel free to reach out with any prospective role, project query, or legal academic exchange.
                </p>
              </div>

              {formStatus === 'prepared' ? (
                <div
                  style={{
                    background: 'rgba(197, 160, 89, 0.1)',
                    border: '1px solid rgba(197, 160, 89, 0.4)',
                    borderRadius: '16px',
                    padding: '2rem',
                    textAlign: 'center'
                  }}
                >
                  <CheckCircle2 size={42} color="var(--champagne-gold)" style={{ margin: '0 auto 1rem auto' }} />
                  <h4
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.3rem',
                      color: 'var(--warm-beige)',
                      marginBottom: '0.6rem'
                    }}
                  >
                    Message Prepared Successfully
                  </h4>
                  <p
                    style={{
                      fontSize: '0.92rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      maxWidth: '500px',
                      margin: '0 auto 1.5rem auto'
                    }}
                  >
                    Thank you. Your message has been prepared successfully. You can launch your mail client now to transmit it directly to <strong>trinadatta582@gmail.com</strong>.
                  </p>

                  <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                    <button
                      onClick={openEmailClient}
                      className="btn btn-primary"
                      style={{ cursor: 'pointer' }}
                    >
                      <ExternalLink size={16} />
                      <span>DISPATCH VIA EMAIL CLIENT</span>
                    </button>
                    <button
                      onClick={() => setFormStatus(null)}
                      className="btn btn-secondary"
                      style={{ cursor: 'pointer' }}
                    >
                      <span>EDIT MESSAGE</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
                  <div>
                    <label
                      htmlFor="userName"
                      style={{
                        display: 'block',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        color: 'var(--champagne-gold)',
                        textTransform: 'uppercase',
                        marginBottom: '0.5rem'
                      }}
                    >
                      YOUR NAME
                    </label>
                    <input
                      id="userName"
                      type="text"
                      required
                      placeholder="e.g. Adv. Debraj Roy / Professional Inquirer"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.95rem 1.25rem',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '12px',
                        color: 'var(--warm-beige)',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.95rem',
                        outline: 'none',
                        transition: 'border-color 0.25s ease'
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--champagne-gold)')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)')}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="userEmail"
                      style={{
                        display: 'block',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        color: 'var(--champagne-gold)',
                        textTransform: 'uppercase',
                        marginBottom: '0.5rem'
                      }}
                    >
                      YOUR EMAIL
                    </label>
                    <input
                      id="userEmail"
                      type="email"
                      required
                      placeholder="e.g. contact@institution.org"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.95rem 1.25rem',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '12px',
                        color: 'var(--warm-beige)',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.95rem',
                        outline: 'none',
                        transition: 'border-color 0.25s ease'
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--champagne-gold)')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)')}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="userMessage"
                      style={{
                        display: 'block',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        color: 'var(--champagne-gold)',
                        textTransform: 'uppercase',
                        marginBottom: '0.5rem'
                      }}
                    >
                      YOUR MESSAGE
                    </label>
                    <textarea
                      id="userMessage"
                      required
                      rows={5}
                      placeholder="Write your professional message or inquiry here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.95rem 1.25rem',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '12px',
                        color: 'var(--warm-beige)',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.95rem',
                        outline: 'none',
                        resize: 'vertical',
                        transition: 'border-color 0.25s ease'
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--champagne-gold)')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)')}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: '100%', marginTop: '0.5rem', cursor: 'pointer' }}
                  >
                    <span>SEND MESSAGE</span>
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right: 3D Contact Visual */}
          <div
            style={{
              gridColumn: 'span 12',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            className="contact-3d-col"
          >
            <div
              className="glass-panel"
              style={{
                width: '100%',
                padding: '2rem 1.5rem',
                textAlign: 'center',
                position: 'relative'
              }}
            >
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  color: 'var(--champagne-gold)',
                  textTransform: 'uppercase'
                }}
              >
                3D INTERACTIVE TRANSMISSION SEAL
              </span>
              <FloatingObjects />
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: 'var(--warm-beige)',
                  marginBottom: '0.35rem'
                }}
              >
                SATARUPA DUTTA
              </div>
              <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                BBA + B.A. LL.B. Candidate • Kolkata
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .contact-form-col {
            grid-column: span 7 !important;
          }
          .contact-3d-col {
            grid-column: span 5 !important;
          }
        }
      `}</style>
    </section>
  );
}
