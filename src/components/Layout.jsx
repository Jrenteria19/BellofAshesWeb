import { Outlet, Link } from 'react-router-dom';
import { useState } from 'react';

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            <a href="#" className="btn btn-play">Jugar Ahora</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="hamburger-container">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="hamburger-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {isMenuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className={`mobile-menu open`}>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Principal</Link>
            <Link to="/historia" onClick={() => setIsMenuOpen(false)}>Historia</Link>
            <Link to="/personajes" onClick={() => setIsMenuOpen(false)}>Personajes</Link>
            <Link to="/jugabilidad" onClick={() => setIsMenuOpen(false)}>Jugabilidad</Link>
            <Link to="/logros" onClick={() => setIsMenuOpen(false)}>Logros y Objetos</Link>
            <a href="#" className="btn btn-play mt-4">Jugar Ahora</a>
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
              <a href="#" title="Twitter">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
              <a href="#" title="YouTube">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25.9.83 1.48 1.73 1.73.47-.13 1.33.22 2.65.28 1.3.07 2.49.1 3.59.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z" /></svg>
              </a>
              <a href="#" title="Twitch">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0h1.714v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0H6zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714v9.429z" /></svg>
              </a>
            </div>
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