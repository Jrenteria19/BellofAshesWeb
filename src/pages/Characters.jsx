import { useState } from 'react';
import '../App.css';
import { useI18n } from '../components/i18n';


function Characters() {
  const [selectedChar, setSelectedChar] = useState(null);
  const { t } = useI18n();

  const charactersData = {
    solenne: {
      id: 'solenne',
      name: 'Solenne',
      title: t('data.solenne.title'),
      description: t('data.solenne.desc'),
      longDescription: t('data.solenne.long'),
      image: '/solonne.png',
      accentColor: 'var(--color-primary)'
    },
    axelin: {
      id: 'axelin',
      name: 'Axelín',
      title: t('data.axelin.title'),
      description: t('data.axelin.desc'),
      longDescription: t('data.axelin.long'),
      image: '/axelin.png',
      accentColor: 'var(--color-secondary)'
    },
    arieth: {
      id: 'arieth',
      name: 'Arieth',
      title: t('data.arieth.title'),
      description: t('data.arieth.desc'),
      longDescription: t('data.arieth.long'),
      image: '/arieth.png',
      accentColor: '#df643d'
    }
  };

  return (
    <>
      <div className="page-container">
        <div className="content-wrapper">
          <header className="page-header">
            <h1>{t('characters.title')}</h1>
            <p>{t('characters.subtitle')}</p>
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
                  <h4>{t('characters.modal.history')}</h4>
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
