import { useState } from 'react';
import '../App.css';
import InstallPWA from './InstallPWA';
import { useI18n } from '../components/i18n';

function Home({ installPrompt }) {
  const [isDownloading, setDownloading] = useState(false);
  const { t } = useI18n();

  const handleDownloadClick = () => {
    setDownloading(true);
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = '/bell-of-ashes-community.apk';
      link.download = 'bell-of-ashes-community.apk';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setDownloading(false);
    }, 2000);
  };

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1 className="text-fire-glow">Bell of Ashes</h1>
          <p className="subtitle text-gold-glow">{t('home.subtitle')}</p>
          <p className="description">
            {t('home.description')}
          </p>
          <div className="cta-buttons flex justify-center gap-4">
            <button onClick={handleDownloadClick} className="btn btn-secondary" disabled={isDownloading}>
              {isDownloading ? t('common.downloading') : t('home.downloadApp')}
            </button>
          </div>
        </div>
      </section>

      <section className="key-features">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <div className="feature-card">
              <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56" /><path d="M15.66 2.54 12.5 8l-3.16-5.46L6 8l-3.54-6.46L6 8l-3.16-5.46L6 8l3.16 5.46L12.5 8l3.16-5.46L12.5 8l3.54 6.46L12.5 8Z" /></svg>
              <h3>{t('features.worldTitle')}</h3>
              <p>{t('features.worldDesc')}</p>
            </div>
            <div className="feature-card">
              <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><line x1="10" y1="9" x2="8" y2="9" /></svg>
              <h3>{t('features.combatTitle')}</h3>
              <p>{t('features.combatDesc')}</p>
            </div>
            <div className="feature-card">
              <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>
              <h3>{t('features.customTitle')}</h3>
              <p>{t('features.customDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      <InstallPWA installPrompt={installPrompt} />

      <section className="gameplay-section">
        <div className="container">
          <h2 className="text-fire-glow">{t('home.combatSectionTitle')}</h2>
          <p>{t('home.combatSectionDesc')}</p>
          <div className="video-container glass">
            <img src="https://placehold.co/1600x900/1a1a1a/e53935?text=Gameplay+%C3%89pico" alt="Simulación de Gameplay" className="video-thumbnail" />
            <div className="play-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '6rem 2rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="glass" style={{ padding: '2rem', borderRadius: 'var(--radius)' }}>
              <h3 className="text-fire-glow">{t('home.powerDivineTitle')}</h3>
              <p>{t('home.powerDivineDesc')}</p>
            </div>
            <div className="glass" style={{ padding: '2rem', borderRadius: 'var(--radius)' }}>
              <h3 className="text-gold-glow">{t('home.epicWorldTitle')}</h3>
              <p>{t('home.epicWorldDesc')}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;