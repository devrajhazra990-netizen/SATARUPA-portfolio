import React, { useState } from 'react';
import { Globe, BookOpen, MessageCircle } from 'lucide-react';

const LANGUAGES = [
  {
    name: 'BENGALI',
    nativeScript: 'বাংলা',
    role: 'Native Language',
    detail: 'Complete native linguistic command, cultural nuance, and expressive spoken & written articulation.',
    icon: MessageCircle,
    accent: '#c5a059',
    badge: 'Native / First Language'
  },
  {
    name: 'ENGLISH',
    nativeScript: 'English',
    role: 'Academic & Professional',
    detail: 'Comprehensive proficiency in legal drafting, business reports, negotiations, and corporate communication.',
    icon: Globe,
    accent: '#d8a49b',
    badge: 'Professional & Legal Working'
  },
  {
    name: 'HINDI',
    nativeScript: 'हिन्दी',
    role: 'Conversational & Business',
    detail: 'Fluent interpersonal interaction, client relationship handling, and pan-Indian professional collaboration.',
    icon: BookOpen,
    accent: '#e6ca85',
    badge: 'Fluent Working Proficiency'
  }
];

export default function Languages() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section id="languages" className="section" style={{ position: 'relative' }}>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem auto' }}>
          <span className="section-label">COMMUNICATION REPERTOIRE</span>
          <h2 className="section-title">LANGUAGES</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Multi-lingual capability facilitating effective legal advocacy, business negotiations,
            and stakeholder empathy.
          </p>
        </div>

        {/* 3 Floating Glass Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}
        >
          {LANGUAGES.map((lang, idx) => {
            const Icon = lang.icon;
            const isHovered = hoveredIdx === idx;

            return (
              <div
                key={lang.name}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="glass-panel"
                style={{
                  padding: '2.8rem 2.2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '320px',
                  borderRadius: '24px',
                  transform: isHovered
                    ? 'translateY(-10px) scale(1.03) perspective(1000px)'
                    : 'translateY(0) scale(1)',
                  borderColor: isHovered ? lang.accent : 'rgba(255, 255, 255, 0.08)',
                  boxShadow: isHovered
                    ? `0 24px 45px -10px ${lang.accent}30`
                    : 'var(--shadow-subtle)',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Background Script Watermark */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '10px',
                    right: '15px',
                    fontSize: '4.5rem',
                    fontFamily: 'var(--font-serif)',
                    color: lang.accent,
                    opacity: isHovered ? 0.14 : 0.05,
                    lineHeight: 1,
                    pointerEvents: 'none',
                    transition: 'opacity 0.4s ease'
                  }}
                >
                  {lang.nativeScript}
                </div>

                <div>
                  {/* Top Bar */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1.75rem'
                    }}
                  >
                    <div
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '14px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: `1px solid ${lang.accent}44`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: lang.accent
                      }}
                    >
                      <Icon size={22} />
                    </div>

                    <span
                      style={{
                        display: 'inline-block',
                        padding: '0.35rem 0.85rem',
                        borderRadius: '999px',
                        background: `${lang.accent}18`,
                        border: `1px solid ${lang.accent}40`,
                        color: lang.accent,
                        fontSize: '0.74rem',
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase'
                      }}
                    >
                      {lang.badge}
                    </span>
                  </div>

                  {/* Language Name */}
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: isHovered ? '2.1rem' : '1.95rem',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      color: 'var(--warm-beige)',
                      lineHeight: 1.1,
                      marginBottom: '0.35rem',
                      textTransform: 'uppercase',
                      transition: 'font-size 0.3s ease'
                    }}
                  >
                    {lang.name}
                  </h3>

                  <div
                    style={{
                      fontSize: '0.9rem',
                      color: lang.accent,
                      fontWeight: 600,
                      marginBottom: '1.25rem'
                    }}
                  >
                    {lang.role}
                  </div>
                </div>

                <p
                  style={{
                    fontSize: '0.92rem',
                    lineHeight: 1.65,
                    color: 'var(--text-secondary)',
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                    paddingTop: '1.2rem',
                    position: 'relative',
                    zIndex: 2
                  }}
                >
                  {lang.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
