import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProfessionalDirection from './components/ProfessionalDirection';
import Education from './components/Education';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Strengths from './components/Strengths';
import Objective from './components/Objective';
import Philosophy from './components/Philosophy';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/3d/ParticleBackground';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [loaderPhase, setLoaderPhase] = useState(1); // 1: SD, 2: SATARUPA DUTTA, 3: Completed
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [cursorHover, setCursorHover] = useState(false);

  // Short premium loading transition
  useEffect(() => {
    const t1 = setTimeout(() => {
      setLoaderPhase(2);
    }, 700);

    const t2 = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  // Custom Cursor mouse listener
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('clickable')
      ) {
        setCursorHover(true);
      } else {
        setCursorHover(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* Custom Desktop Cursor */}
      <div
        className="custom-cursor-dot"
        style={{
          transform: `translate(${mousePos.x}px, ${mousePos.y}px)`
        }}
      />
      <div
        className={`custom-cursor-ring ${cursorHover ? 'cursor-hover' : ''}`}
        style={{
          transform: `translate(${mousePos.x}px, ${mousePos.y}px)`
        }}
      />

      {/* Loading Screen */}
      {loading && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'radial-gradient(circle at center, #18191e 0%, #090a0c 100%)',
            zIndex: 999999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          {/* Monogram / Name Animation */}
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              color: 'var(--warm-beige)',
              textAlign: 'center',
              letterSpacing: '0.18em',
              transition: 'all 0.5s ease',
              marginBottom: '2rem'
            }}
          >
            {loaderPhase === 1 ? (
              <div
                style={{
                  fontSize: 'clamp(3.5rem, 8vw, 6rem)',
                  color: 'var(--champagne-gold)',
                  lineHeight: 1
                }}
              >
                SD
              </div>
            ) : (
              <div>
                <div
                  style={{
                    fontSize: 'clamp(1.8rem, 4vw, 3.2rem)',
                    color: 'var(--warm-beige)',
                    lineHeight: 1.1,
                    textTransform: 'uppercase'
                  }}
                >
                  SATARUPA DUTTA
                </div>
                <div
                  style={{
                    fontSize: '0.78rem',
                    letterSpacing: '0.24em',
                    color: 'var(--champagne-gold)',
                    marginTop: '0.6rem',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 600,
                    textTransform: 'uppercase'
                  }}
                >
                  BUSINESS • LAW • MANAGEMENT
                </div>
              </div>
            )}
          </div>

          {/* Elegant Progress Indicator */}
          <div
            style={{
              width: '180px',
              height: '2px',
              background: 'rgba(255, 255, 255, 0.08)',
              borderRadius: '2px',
              overflow: 'hidden',
              position: 'relative'
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                background: 'linear-gradient(90deg, var(--champagne-gold), var(--dusty-rose))',
                width: loaderPhase === 1 ? '40%' : '100%',
                transition: 'width 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            />
          </div>
        </div>
      )}

      {/* Ambient 3D Particle Background */}
      <ParticleBackground />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Layout */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <ProfessionalDirection />
        <Education />
        <Skills />
        <Languages />
        <Strengths />
        <Objective />
        <Philosophy />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
