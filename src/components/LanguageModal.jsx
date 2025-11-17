import React from 'react';
import { useI18n } from './i18n';

const LanguageModal = ({ isOpen, onSelectLanguage }) => {
  const { t } = useI18n();

  if (!isOpen) {
    return null;
  }

  const handleSelect = (lang) => {
    onSelectLanguage(lang);
  };

  return (
    <div className="modal-overlay open" style={{ zIndex: 3000 }}>
      <div className="modal" style={{ animation: 'modalFadeIn 0.3s forwards' }}>
        <div className="modal-content glass" style={{ padding: '2rem' }}>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-2">{t('lang.selectTitle')}</h2>
            <p className="text-lg text-muted mb-8">{t('lang.selectDesc')}</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => handleSelect('es')}
                className="btn btn-primary"
              >
                {t('lang.es')}
              </button>
              <button
                onClick={() => handleSelect('en')}
                className="btn btn-secondary"
              >
                {t('lang.en')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageModal;