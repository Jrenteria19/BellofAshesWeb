import { useState } from 'react';
import { sections } from '../data/gameplayData.jsx';

function Gameplay() {
  const [activeSection, setActiveSection] = useState('reglas');

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="text-fire-glow">Guía de Juego: Bell of Ashes</h1>
        <p>Domina las mecánicas y secretos para forjar tu destino en un mundo de cenizas.</p>
      </div>

      <div className="wiki-select-container">
        <select 
          className="wiki-select glass"
          value={activeSection}
          onChange={(e) => setActiveSection(e.target.value)}
        >
          {Object.keys(sections).map((key) => (
            <option key={key} value={key}>
              {sections[key].title}
            </option>
          ))}
        </select>
      </div>

      <div className="wiki-layout">
        <aside className="wiki-menu glass">
          <nav>
            <ul>
              {Object.keys(sections).map((key) => (
                <li key={key}>
                  <a 
                    href={`#${key}`}
                    className={activeSection === key ? 'active' : ''}
                    onClick={(e) => {
                        e.preventDefault();
                        setActiveSection(key);
                    }}
                  >
                    {sections[key].icon} {sections[key].title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <main className="wiki-content glass">
          <section id={activeSection}>
            <h2 className="text-gold-glow text-3xl font-bold mb-4">{sections[activeSection].title}</h2>
            {sections[activeSection].content}
          </section>
        </main>
      </div>
    </div>
  );
}

export default Gameplay;
