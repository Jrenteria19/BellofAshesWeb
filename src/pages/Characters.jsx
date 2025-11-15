import { useState } from 'react';
import '../App.css';

// Datos de los personajes (podrían estar en otro archivo)
const charactersData = {
  solenne: {
    id: 'solenne',
    name: 'Solenne',
    title: 'La Portadora del Fuego',
    description: 'Una guerrera enigmática con cabellos de fuego, destinada a blandir una espada legendaria y desentrañar los secretos de una antigua profecía.',
    longDescription: 'Guerrera de cabellos de fuego y ojos dorados, portadora de espada, cuyo destino estaba ligado a una profecía. Se descubre que es Ignira, la diosa del fuego y la creación reencarnada. Su poder arde con la intensidad de mil soles, capaz de destruir y crear en igual medida.',
    image: '/solonne.png',
    accentColor: 'var(--color-primary)'
  },
  axelin: {
    id: 'axelin',
    name: 'Axelín',
    title: 'El Viajero de las Cenizas',
    description: 'Un motociclista de aspecto rudo que recorre las tierras desoladas. Pide recuerdos como pago y su lealtad es inquebrantable.',
    longDescription: 'Un motociclista de aspecto rudo, con chaqueta de cuero y mirada seria, pero que siempre sonríe con ternura. Es el medio de transporte de la protagonista y pide recuerdos en lugar de moneda. Su lealtad es inquebrantable y su conocimiento de los caminos olvidados es invaluable.',
    image: '/axelin.png',
    accentColor: 'var(--color-secondary)'
  },
  arieth: {
    id: 'arieth',
    name: 'Arieth',
    title: 'La Guardiana del Santuario',
    description: 'Una guía etérea y silenciosa. Su presencia, manifestada como una luz dorada, protege los secretos antiguos y guía a los elegidos por el destino.',
    longDescription: 'Guía y sombra protectora de Solenne, una voz que no hablaba pero conducía. Su presencia es etérea y misteriosa, manifestándose como una silueta de luz dorada en los momentos de mayor necesidad. Protege los secretos antiguos y guía a los elegidos por el destino.',
    image: '/arieth.png',
    accentColor: '#df643d'
  }
};

function Characters() {
  const [selectedChar, setSelectedChar] = useState(null);

  return (
    <>
      <div className="page-container">
        <div className="content-wrapper">
          <header className="page-header">
            <h1>Protagonistas y Aliados</h1>
            <p>Conoce a los héroes y leyendas que forjarán el destino de un mundo renacido de las cenizas.</p>
          </header>

          <main className="characters-grid">
            {Object.values(charactersData).map((char, index) => (
              <button key={char.id} onClick={() => setSelectedChar(char)} className="char-card" style={{ '--accent-color': char.accentColor, animationDelay: `${(index + 1) * 0.1}s` }}>
                <div className="img-wrapper">
                  <img src={char.image} alt={char.name} style={{ objectFit: 'contain' }} />
                </div>
                <div className="info">
                  <h3 style={{color: char.accentColor}}>{char.name}</h3>
                  <div className="title" style={{color: char.accentColor}}>{char.title}</div>
                  <p>{char.description}</p>
                </div>
              </button>
            ))}
          </main>
        </div>
      </div>

      <div className={`modal-overlay ${selectedChar ? 'open' : ''}`} onClick={() => setSelectedChar(null)}>
        {selectedChar && (
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              <button onClick={() => setSelectedChar(null)} className="modal-close">&times;</button>
              <div className="modal-body">
                <img src={selectedChar.image} alt={selectedChar.name} className="modal-img" style={{ objectFit: 'contain' }} />
                <div className="modal-info" style={{ '--accent-color': selectedChar.accentColor }}>
                  <h2>{selectedChar.name}</h2>
                  <p className="title">{selectedChar.title}</p>
                  <hr />
                  <h4>Historia y Rol</h4>
                  <p>{selectedChar.longDescription}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Characters;
