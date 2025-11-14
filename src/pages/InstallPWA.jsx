import React from 'react';
import QRCode from 'react-qr-code';

function InstallPWA({ installPrompt }) {
  const apkPath = '/bell-of-ashes-community.apk';
  const apkUrl = `${window.location.origin}${apkPath}`;

  const handleInstallClick = () => {
    if (!installPrompt) {
      return;
    }
    // Muestra el prompt de instalación
    installPrompt.prompt();
    // Espera a que el usuario responda al prompt
    installPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      // No podemos usar el mismo prompt de nuevo
    });
  };

  return (
    <section className="install-section">
      <div className="container">
        <div className="install-content glass">
          <div className="install-info">
            <h2 className="text-gold-glow">Lleva el Fuego Contigo</h2>
            <p>
              Instala Bell of Ashes en tu dispositivo para un acceso rápido y una experiencia inmersiva.
              Disfruta de la aplicación como si fuera nativa, directamente desde tu pantalla de inicio.
            </p>
            {installPrompt && (
              <button onClick={handleInstallClick} className="btn btn-primary fire-glow">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                Instalar Aplicación
              </button>
            )}
            <div className="install-tutorial">
              <h4>¿No ves el botón?</h4>
              <p><strong>En Android:</strong> Abre el menú de Chrome (⋮) y selecciona "Instalar aplicación".</p>
              <p><strong>En iOS (Safari):</strong> Toca el ícono de Compartir (↑) y selecciona "Agregar a la pantalla de inicio".</p>
            </div>
          </div>
          <div className="install-qr">
            <div className="qr-code-container">
              <QRCode
                value={apkUrl}
                size={256}
                bgColor="#1a1a1a"
                fgColor="#f5f5f5"
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              />
            </div>
            <p>
              Escanea este código QR para descargar la APK de <strong>Bell of Ashes Comunidad</strong>.
              Es una app para la comunidad que te mantiene en contacto con los creadores y con
              la comunidad del juego.
            </p>
            <a href={apkUrl} className="btn btn-primary fire-glow" download>
              Descargar APK
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InstallPWA;