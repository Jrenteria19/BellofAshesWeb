import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import { useI18n } from '../components/i18n';

function InstallPWA({ installPrompt }) {
  const { t } = useI18n();
  const [isApkLoading, setApkLoading] = useState(false);
  const [isInstalling, setInstalling] = useState(false);
  const apkPath = '/bell-of-ashes-community.apk';
  const apkUrl = `${window.location.origin}${apkPath}`;

  const handleInstallClick = () => {
    if (!installPrompt) {
      return;
    }
    setInstalling(true);
    installPrompt.prompt();
    installPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      setInstalling(false);
    });
  };

  const handleApkDownloadClick = () => {
    setApkLoading(true);
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = apkUrl;
      link.download = 'bell-of-ashes-community.apk';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setApkLoading(false);
    }, 2000);
  };

  return (
    <section className="install-section">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '3rem' }}>
          <h2 className="text-fire-glow" style={{ fontSize: '3rem', fontWeight: 'bold' }}>{t('installPWA.title')}</h2>
          <p className="text-gold-glow" style={{ fontSize: '1.25rem' }}>
            {t('installPWA.desc')}
          </p>
        </div>

        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {/* Opción 1: PWA */}
          <div className="glass" style={{ flex: '1 1 400px', maxWidth: '500px', padding: '2rem', borderRadius: 'var(--radius)', boxShadow: '0 10px 20px rgba(0,0,0,0.3)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold-glow" style={{ marginBottom: '1rem' }}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
            <h3 className="text-fire-glow" style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{t('installPWA.installButton')}</h3>
            <p style={{ marginBottom: '1.5rem' }}>
              {t('installPWA.desc')}
            </p>
            {installPrompt ? (
              <button onClick={handleInstallClick} className="btn btn-primary fire-glow" disabled={isInstalling}>
                {isInstalling ? t('installPWA.installing') : t('installPWA.installButton')}
              </button>
            ) : (
              <div className="install-tutorial" style={{ marginTop: '1rem' }}>
                <h4 style={{ fontWeight: 'bold' }}>{t('installPWA.tipsTitle')}</h4>
                <p><strong>{t('installPWA.android')}</strong></p>
                <p><strong>{t('installPWA.ios')}</strong></p>
              </div>
            )}
          </div>

          {/* Opción 2: APK para Android */}
          <div className="glass" style={{ flex: '1 1 400px', maxWidth: '500px', padding: '2rem', borderRadius: 'var(--radius)', boxShadow: '0 10px 20px rgba(0,0,0,0.3)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold-glow" style={{ marginBottom: '1rem' }}><path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" /><path d="m12 12 4 10 3-3-4-10z" /><path d="M8 12h.01" /><path d="M12 8h.01" /><path d="M16 4h.01" /><path d="M16 8h.01" /><path d="M8 16h.01" /></svg>
            <h3 className="text-fire-glow" style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{t('installPWA.downloadApk')}</h3>
            <p style={{ marginBottom: '1.5rem' }}>
              {t('installPWA.qrDesc')}
            </p>
            <div className="qr-code-container" style={{ marginBottom: '1rem' }}>
              <QRCode
                value={apkUrl}
                size={180}
                bgColor="transparent"
                fgColor="#f5f5f5"
              />
            </div>
            <p style={{ fontSize: '0.875rem', marginBottom: '1.5rem' }}>{t('installPWA.qrDesc')}</p>
            <button onClick={handleApkDownloadClick} className="btn btn-secondary fire-glow" disabled={isApkLoading}>
              {isApkLoading ? t('common.downloading') : t('installPWA.downloadApk')}
            </button>
          </div>
        </div>

        <div className="install-guide glass" style={{ marginTop: '4rem', padding: '2rem', borderRadius: 'var(--radius)' }}>
          <h3 className="text-gold-glow" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', textAlign: 'center' }}>{t('installPWA.guideTitle')}</h3>

          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            {/* Guía de Instalación de la PWA */}
            <div style={{ flex: '1 1 300px' }}>
              <h4 className="text-xl font-semibold mb-2" style={{color: 'var(--color-primary)'}}>{t('installPWA.pwaTitle')}</h4>
              <p className="mb-3">
                {t('installPWA.pwaDesc')}
              </p>
              <h5 className="font-bold mb-1">{t('installPWA.pwaReqTitle')}</h5>
              <ul className="list-disc list-inside mb-3 ml-4">
                <li>{t('installPWA.pwaReq1')}</li>
                <li>{t('installPWA.pwaReq2')}</li>
              </ul>
              <h5 className="font-bold mb-1">{t('installPWA.pwaStepsTitle')}</h5>
              <ol className="list-decimal list-inside mb-3 ml-4">
                <li>{t('installPWA.pwaStep1')}</li>
                <li>{t('installPWA.pwaStep2')}
                  <ul className="list-disc list-inside ml-6 mt-1">
                    <li><strong>{t('installPWA.pwaStep2.1')}</strong></li>
                    <li><strong>{t('installPWA.pwaStep2.2')}</strong></li>
                  </ul>
                </li>
                <li>{t('installPWA.pwaStep3')}</li>
                <li>{t('installPWA.pwaStep4')}</li>
              </ol>
            </div>

            {/* Guía de Instalación del APK */}
            <div style={{ flex: '1 1 300px' }}>
              <h4 className="text-xl font-semibold mb-2" style={{color: 'var(--color-secondary)'}}>{t('installPWA.apkTitle')}</h4>
              <p className="mb-3">
                {t('installPWA.apkDesc')}
              </p>
              <h5 className="font-bold mb-1">{t('installPWA.apkReqTitle')}</h5>
              <ul className="list-disc list-inside mb-3 ml-4">
                <li>{t('installPWA.apkReq1')}</li>
                <li>{t('installPWA.apkReq2')}</li>
              </ul>
              <h5 className="font-bold mb-1">{t('installPWA.apkStepsTitle')}</h5>
              <ol className="list-decimal list-inside mb-3 ml-4">
                <li>{t('installPWA.apkStep1')}</li>
                <li>{t('installPWA.apkStep2')}</li>
                <li>{t('installPWA.apkStep3')}</li>
                <li>{t('installPWA.apkStep4')}</li>
                <li>{t('installPWA.apkStep5')}</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InstallPWA;