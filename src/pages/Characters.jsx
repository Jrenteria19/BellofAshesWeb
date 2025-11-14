import '../App.css';

function Characters() {
  return (
    <>
      <div className="page-container">
        <div className="content-wrapper">
          <header className="page-header">
            <h1>Protagonistas y Aliados</h1>
            <p>Conoce a los héroes y leyendas que forjarán el destino de un mundo renacido de las cenizas.</p>
          </header>

          <main className="characters-grid">
            <a href="#solenne-modal" className="char-card" style={{ '--accent-color': 'var(--color-primary)', animationDelay: '0.1s' }}>
              <div className="img-wrapper">
                <img src="/solonne.png" alt="Solenne" style={{ objectFit: 'contain' }} />
              </div>
              <div className="info">
                <h3>Solenne</h3>
                <div className="title">La Portadora del Fuego</div>
                <p>Una guerrera enigmática con cabellos de fuego, destinada a blandir una espada legendaria y desentrañar los secretos de una antigua profecía.</p>
              </div>
            </a>

            <a href="#axelin-modal" className="char-card" style={{ '--accent-color': 'var(--color-secondary)', animationDelay: '0.2s' }}>
              <div className="img-wrapper">
                <img src="/axelin.png" alt="Axelín" style={{ objectFit: 'contain' }} />
              </div>
              <div className="info">
                <h3>Axelín</h3>
                <div className="title">El Viajero de las Cenizas</div>
                <p>Un motociclista de aspecto rudo que recorre las tierras desoladas. Pide recuerdos como pago y su lealtad es inquebrantable.</p>
              </div>
            </a>

            <a href="#arieth-modal" className="char-card" style={{ '--accent-color': '#df643d', animationDelay: '0.3s' }}>
              <div className="img-wrapper">
                <img src="/arieth.png" alt="Arieth" style={{ objectFit: 'contain' }} />
              </div>
              <div className="info">
                <h3 style={{color: '#df643d'}}>Arieth</h3>
                <div className="title" style={{color: '#df643d'}}>La Guardiana del Santuario</div>
                <p>Una guía etérea y silenciosa. Su presencia, manifestada como una luz dorada, protege los secretos antiguos y guía a los elegidos por el destino.</p>
              </div>
            </a>
          </main>
        </div>
      </div>

      <div id="solenne-modal" className="modal">
        <a href="#" className="modal-close">&times;</a>
        <div className="modal-content">
          <div className="modal-body">
            <img src="/solonne.png" alt="Solenne" className="modal-img" style={{ objectFit: 'contain' }} />
            <div className="modal-info" style={{ '--accent-color': 'var(--color-primary)' }}>
              <h2>Solenne</h2>
              <p className="title">La Portadora del Fuego</p>
              <hr />
              <h4>Historia y Rol</h4>
              <p>Guerrera de cabellos de fuego y ojos dorados, portadora de espada, cuyo destino estaba ligado a una profecía. Se descubre que es Ignira, la diosa del fuego y la creación reencarnada. Su poder arde con la intensidad de mil soles, capaz de destruir y crear en igual medida.</p>

            </div>
          </div>
        </div>
      </div>

      <div id="axelin-modal" className="modal">
        <a href="#" className="modal-close">&times;</a>
        <div className="modal-content">
          <div className="modal-body">
            <img src="/axelin.png" alt="Axelín" className="modal-img" style={{ objectFit: 'contain' }} />
            <div className="modal-info" style={{ '--accent-color': 'var(--color-secondary)' }}>
              <h2>Axelín</h2>
              <p className="title">El Viajero de las Cenizas</p>
              <hr />
              <h4>Historia y Rol</h4>
              <p>Un motociclista de aspecto rudo, con chaqueta de cuero y mirada seria, pero que siempre sonríe con ternura. Es el medio de transporte de la protagonista y pide recuerdos en lugar de moneda. Su lealtad es inquebrantable y su conocimiento de los caminos olvidados es invaluable.</p>

            </div>
          </div>
        </div>
      </div>

      <div id="arieth-modal" className="modal">
        <a href="#" className="modal-close">&times;</a>
        <div className="modal-content">
          <div className="modal-body">
            <img src="/arieth.png" alt="Arieth" className="modal-img" style={{ objectFit: 'contain' }} />
            <div className="modal-info" style={{ '--accent-color': 'var(--color-tertiary)' }}>
              <h2>Arieth</h2>
              <p className="title">La Guardiana del Santuario</p>
              <hr />
              <h4>Historia y Rol</h4>
              <p>Guía y sombra protectora de Solenne, una voz que no hablaba pero conducía. Su presencia es etérea y misteriosa, manifestándose como una silueta de luz dorada en los momentos de mayor necesidad. Protege los secretos antiguos y guía a los elegidos por el destino.</p>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Characters;
