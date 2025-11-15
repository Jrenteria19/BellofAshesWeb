import { Outlet, Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGameLoading, setGameLoading] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

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
            <Link to="/historia">Historia</Link>
            <Link to="/personajes">Personajes</Link>
            <Link to="/jugabilidad">Jugabilidad</Link>
            <Link to="/logros">Logros y Objetos</Link>
            <button onClick={handlePlayClick} className="btn btn-play" disabled={isGameLoading}>
              {isGameLoading ? 'Descargando...' : 'Jugar Ahora'}
            </button>
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
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Principal</Link>
            <Link to="/historia" onClick={() => setIsMenuOpen(false)}>Historia</Link>
            <Link to="/personajes" onClick={() => setIsMenuOpen(false)}>Personajes</Link>
            <Link to="/jugabilidad" onClick={() => setIsMenuOpen(false)}>Jugabilidad</Link>
            <Link to="/logros" onClick={() => setIsMenuOpen(false)}>Logros y Objetos</Link>
            <button onClick={handlePlayClick} className="btn btn-play mt-4" disabled={isGameLoading}>
              {isGameLoading ? 'Descargando...' : 'Jugar Ahora'}
            </button>
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
            <p>El fuego de la creación arde eternamente.</p>
          </div>
          <div className="footer-column">
            <h4>Explorar</h4>
            <Link to="/historia">Historia</Link>
            <Link to="/personajes">Personajes</Link>
            <Link to="/jugabilidad">Jugabilidad</Link>
            <Link to="/logros">Logros</Link>
          </div>
          <div className="footer-column">
            <h4>Síguenos</h4>
            <div className="social-links">
              <a href="https://x.com/bellofashes" title="X" target="_blank" rel="noopener noreferrer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
            </div>
          </div>
          <div className="footer-column">
            <h4>Creadores</h4>
            <p>Alejandra, Brayan, Adrian y Junior</p>
          </div>
        </div>
        <div className="footer-bottom">
          © 2025 Bell of Ashes. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
};

export default Layout;