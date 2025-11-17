import { Outlet, Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { useI18n } from './i18n';

const navLinks = [
  { to: '/historia', key: 'nav.history' },
  { to: '/personajes', key: 'nav.characters' },
  { to: '/jugabilidad', key: 'nav.gameplay' },
  { to: '/logros', key: 'nav.achievements' },
];

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGameLoading, setGameLoading] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);
  const { t, setLang, lang } = useI18n();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const handlePlayClick = () => {
    setGameLoading(true);
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = '/bell-of-ashes-community.apk';
      link.download = 'bell-of-ashes-community.apk';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setGameLoading(false);
    }, 2000);
  };

  return (
    <div>
      <nav className="main-nav">
        <div className="nav-container glass flex items-center justify-between">
          <Link to="/" className="logo flex items-center gap-2">
            <img src="/logo.png" alt="Bell of Ashes Logo" className="h-16 w-auto" />
            <span>Bell of Ashes</span>
          </Link>

          {/* Desktop Menu */}
          <div className="nav-links items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to}>{t(link.key)}</Link>
            ))}
            <button onClick={handlePlayClick} className="btn btn-play" disabled={isGameLoading}>
              {isGameLoading ? t('nav.downloading') : t('nav.playNow')}
            </button>
            <div className="language-selector">
              <select 
                value={lang} 
                onChange={(e) => setLang(e.target.value)}
                className="glass"
                aria-label="Select language"
              >
                <option value="es">{t('lang.es')}</option>
                <option value="en">{t('lang.en')}</option>
              </select>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="hamburger-container">
            <button
              ref={hamburgerRef}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hamburger-button"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {isMenuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div ref={menuRef} className={`mobile-menu open`}>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>{t('nav.home')}</Link>
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} onClick={() => setIsMenuOpen(false)}>{t(link.key)}</Link>
            ))}
            <button onClick={handlePlayClick} className="btn btn-play mt-4" disabled={isGameLoading}>
              {isGameLoading ? t('nav.downloading') : t('nav.playNow')}
            </button>
            <div className="language-selector-mobile">
              <select 
                value={lang} 
                onChange={(e) => setLang(e.target.value)}
                className="glass"
                aria-label="Select language"
              >
                <option value="es">{t('lang.es')}</option>
                <option value="en">{t('lang.en')}</option>
              </select>
            </div>
          </div>
        )}
      </nav>
      <main>
        <Outlet />
      </main>

      <footer className="main-footer">
        <div className="footer-grid">
          <div className="footer-column">
            <a href="#" className="logo flex items-center gap-2" style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>
              <img src="/logo.png" alt="Bell of Ashes Logo" className="h-16 w-auto" />
              <span>Bell of Ashes</span>
            </a>
            <p>{t('footer.motto')}</p>
          </div>
          <div className="footer-column">
            <h4>{t('footer.explore')}</h4>
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to}>{t(link.key)}</Link>
            ))}
          </div>
          <div className="footer-column">
            <h4>{t('footer.follow')}</h4>
            <div className="social-links">
              <a href="https://x.com/bellofashes" title="X" target="_blank" rel="noopener noreferrer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
            </div>
          </div>
          <div className="footer-column">
            <h4>{t('footer.creators')}</h4>
            <p>Alejandra, Brayan, Adrian y Junior</p>
          </div>
        </div>
        <div className="footer-bottom">
          {t('footer.copyLine')}
        </div>
      </footer>
    </div>
  );
};

export default Layout;