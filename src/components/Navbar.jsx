import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import satarupaPhoto from '../assets/satarupa.jpg';

const NAV_LINKS = [
  { name: 'HOME', href: '#hero' },
  { name: 'ABOUT', href: '#about' },
  { name: 'EDUCATION', href: '#education' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'LANGUAGES', href: '#languages' },
  { name: 'OBJECTIVE', href: '#objective' },
  { name: 'CONTACT', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Scroll spy
      const sections = ['hero', 'about', 'direction', 'education', 'skills', 'languages', 'strengths', 'objective', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 900,
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        padding: isScrolled ? '0.85rem 0' : '1.4rem 0',
        background: isScrolled
          ? 'rgba(15, 16, 19, 0.82)'
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled
          ? '1px solid rgba(197, 160, 89, 0.18)'
          : '1px solid transparent',
        boxShadow: isScrolled ? '0 10px 30px rgba(0, 0, 0, 0.4)' : 'none'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand / Logo */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, '#hero')}
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem'
          }}
          aria-label="Satarupa Dutta Home"
        >
          <div
            style={{
              position: 'relative',
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              padding: '2px',
              background: 'linear-gradient(135deg, var(--champagne-gold), var(--dusty-rose))',
              boxShadow: '0 4px 15px rgba(197, 160, 89, 0.35)',
              flexShrink: 0
            }}
          >
            <img
              src={satarupaPhoto}
              alt="Satarupa Dutta"
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                objectFit: 'cover',
                display: 'block'
              }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '1.05rem',
                letterSpacing: '0.12em',
                color: 'var(--warm-beige)',
                lineHeight: 1.1
              }}
            >
              SATARUPA
            </span>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.64rem',
                letterSpacing: '0.22em',
                color: 'var(--champagne-gold)',
                textTransform: 'uppercase'
              }}
            >
              DUTTA
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '2.2rem'
          }}
          className="desktop-nav"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: isActive ? 'var(--champagne-gold-light)' : 'var(--text-secondary)',
                  textDecoration: 'none',
                  position: 'relative',
                  padding: '0.4rem 0',
                  transition: 'color 0.25s ease'
                }}
                className="nav-link-item"
              >
                {link.name}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      background: 'linear-gradient(90deg, var(--champagne-gold), var(--dusty-rose))',
                      borderRadius: '2px'
                    }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="btn btn-primary"
            style={{
              display: 'none',
              padding: '0.65rem 1.35rem',
              fontSize: '0.78rem'
            }}
            id="nav-cta-btn"
          >
            <span>CONNECT</span>
            <ArrowUpRight size={14} />
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(197, 160, 89, 0.25)',
              borderRadius: '10px',
              padding: '0.55rem',
              color: 'var(--warm-beige)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            className="mobile-toggle-btn"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(15, 16, 19, 0.96)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(197, 160, 89, 0.25)',
            padding: '2rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            boxShadow: '0 20px 40px rgba(0,0,0,0.6)'
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1rem',
                fontWeight: 600,
                letterSpacing: '0.14em',
                color: activeSection === link.href.replace('#', '') ? 'var(--champagne-gold-light)' : 'var(--warm-beige)',
                textDecoration: 'none',
                padding: '0.6rem 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <span>{link.name}</span>
              <ArrowUpRight size={16} color="var(--champagne-gold)" />
            </a>
          ))}

          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="btn btn-primary"
            style={{ marginTop: '0.5rem', width: '100%' }}
          >
            <span>GET IN TOUCH</span>
            <ArrowUpRight size={16} />
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 992px) {
          .desktop-nav {
            display: flex !important;
          }
          #nav-cta-btn {
            display: inline-flex !important;
          }
          .mobile-toggle-btn {
            display: none !important;
          }
        }
        .nav-link-item:hover {
          color: var(--champagne-gold-light) !important;
        }
      `}</style>
    </header>
  );
}
