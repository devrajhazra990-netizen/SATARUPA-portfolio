import React, { useState } from 'react';
import { GraduationCap, School, BookOpen, Calendar, MapPin, CheckCircle } from 'lucide-react';

const TIMELINE_DATA = [
  {
    year: '2021 — 2026',
    status: 'In Progress (Degree Candidate)',
    institution: 'KINGSTON LAW COLLEGE',
    university: 'WEST BENGAL STATE UNIVERSITY',
    degree: 'BBA + B.A. LL.B.',
    fullName: 'Bachelor of Business Administration & Bachelor of Legislative Law',
    description: 'A comprehensive 5-year integrated professional program fusing corporate management, finance, organizational governance, statutory jurisprudence, and procedural law.',
    location: 'Barasat, West Bengal, India',
    icon: GraduationCap,
    accent: '#c5a059',
    featured: true
  },
  {
    year: '2018',
    status: 'Completed',
    institution: 'BEGUM ROKEYA SMRITI BALIKA VIDYALAYA',
    board: 'W.B.C.H.S.E.',
    degree: 'Higher Secondary Education',
    fullName: 'West Bengal Council of Higher Secondary Education',
    description: 'Completed higher secondary schooling, strengthening discipline, analytical inquiry, and academic foundation prior to commencing legal and business studies.',
    location: 'Kolkata, West Bengal, India',
    icon: School,
    accent: '#d8a49b',
    featured: false
  },
  {
    year: '2016',
    status: 'Completed',
    institution: 'ULTADANGA GOVT. SPONSORED H.S. SCHOOL FOR GIRLS',
    board: 'W.B.B.S.C.',
    degree: 'Secondary School Education',
    fullName: 'West Bengal Board of Secondary Education',
    description: 'Foundational secondary school education emphasizing diligent work ethics, linguistic competence, and structured personal responsibility.',
    location: 'Kolkata, West Bengal, India',
    icon: BookOpen,
    accent: '#e6ca85',
    featured: false
  }
];

export default function Education() {
  const [hoveredIdx, setHoveredIdx] = useState(0);

  return (
    <section id="education" className="section" style={{ position: 'relative' }}>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem auto' }}>
          <span className="section-label">ACADEMIC FOUNDATION</span>
          <h2 className="section-title">ACADEMIC JOURNEY</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            A continuous trajectory of formal academic and professional qualification
            anchored in Kolkata, West Bengal.
          </p>
        </div>

        {/* 3D Timeline Container */}
        <div
          style={{
            position: 'relative',
            maxWidth: '920px',
            margin: '0 auto',
            paddingLeft: 'clamp(1rem, 3vw, 2.5rem)'
          }}
        >
          {/* Vertical Connecting Line */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              bottom: '20px',
              left: 'clamp(2rem, 4vw, 3.5rem)',
              width: '2px',
              background: 'linear-gradient(180deg, var(--champagne-gold) 0%, var(--dusty-rose) 50%, rgba(197, 160, 89, 0.2) 100%)',
              zIndex: 1
            }}
          />

          {/* Timeline Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.8rem' }}>
            {TIMELINE_DATA.map((item, index) => {
              const Icon = item.icon;
              const isHovered = hoveredIdx === index;

              return (
                <div
                  key={item.year}
                  onMouseEnter={() => setHoveredIdx(index)}
                  style={{
                    position: 'relative',
                    paddingLeft: 'clamp(3.5rem, 6vw, 5rem)',
                    zIndex: 2
                  }}
                >
                  {/* Timeline Node Orb */}
                  <div
                    style={{
                      position: 'absolute',
                      left: 'clamp(1.15rem, 3.15vw, 2.65rem)',
                      top: '1.75rem',
                      width: isHovered ? '28px' : '20px',
                      height: isHovered ? '28px' : '20px',
                      transform: 'translate(-50%, -50%)',
                      borderRadius: '50%',
                      background: isHovered ? item.accent : 'var(--bg-darker)',
                      border: `2px solid ${item.accent}`,
                      boxShadow: isHovered
                        ? `0 0 20px ${item.accent}, 0 0 40px ${item.accent}88`
                        : '0 0 10px rgba(0,0,0,0.5)',
                      transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex: 3
                    }}
                  >
                    {isHovered && (
                      <span
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          background: '#0f1013'
                        }}
                      />
                    )}
                  </div>

                  {/* 3D Timeline Glass Card */}
                  <div
                    className="glass-panel"
                    style={{
                      padding: 'clamp(1.75rem, 3vw, 2.5rem)',
                      transform: isHovered
                        ? 'translateY(-6px) perspective(1000px) rotateX(1deg)'
                        : 'translateY(0)',
                      borderColor: isHovered ? item.accent : 'rgba(255, 255, 255, 0.08)',
                      boxShadow: isHovered
                        ? `0 20px 40px -10px ${item.accent}25`
                        : 'var(--shadow-subtle)',
                      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  >
                    {/* Header info bar */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: '0.75rem',
                        marginBottom: '1rem'
                      }}
                    >
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          background: `${item.accent}18`,
                          border: `1px solid ${item.accent}44`,
                          borderRadius: '999px',
                          padding: '0.35rem 0.85rem',
                          fontSize: '0.8rem',
                          fontWeight: 700,
                          color: item.accent,
                          letterSpacing: '0.06em'
                        }}
                      >
                        <Calendar size={14} />
                        <span>{item.year}</span>
                      </div>

                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          fontSize: '0.8rem',
                          color: 'var(--text-muted)'
                        }}
                      >
                        <MapPin size={14} color="var(--dusty-rose)" />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    {/* Degree / Level */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '1rem',
                        marginBottom: '0.8rem'
                      }}
                    >
                      <div
                        style={{
                          width: '42px',
                          height: '42px',
                          borderRadius: '12px',
                          background: 'rgba(255, 255, 255, 0.04)',
                          border: `1px solid ${item.accent}44`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: item.accent,
                          flexShrink: 0
                        }}
                      >
                        <Icon size={22} />
                      </div>

                      <div>
                        <h3
                          style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: 'clamp(1.2rem, 2vw, 1.55rem)',
                            fontWeight: 700,
                            letterSpacing: '0.04em',
                            color: 'var(--warm-beige)',
                            lineHeight: 1.2
                          }}
                        >
                          {item.institution}
                        </h3>
                        <div
                          style={{
                            fontSize: '0.9rem',
                            fontWeight: 600,
                            color: item.accent,
                            marginTop: '0.2rem'
                          }}
                        >
                          {item.university || item.board}
                        </div>
                      </div>
                    </div>

                    {/* Program Full Title */}
                    <div
                      style={{
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        color: 'var(--dusty-rose-light)',
                        marginBottom: '0.75rem',
                        paddingLeft: '3.6rem'
                      }}
                    >
                      {item.fullName}
                    </div>

                    {/* Description */}
                    <p
                      style={{
                        fontSize: '0.92rem',
                        lineHeight: 1.65,
                        color: 'var(--text-secondary)',
                        paddingLeft: '3.6rem'
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
