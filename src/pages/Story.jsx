import '../App.css';
import { useI18n } from '../components/i18n';

function Story() {
  const { t } = useI18n();

  return (
    <div className="page-container" style={{paddingTop: '8rem'}}>
      <div className="page-header">
        <h1 className="text-fire-glow">{t('story.title')}</h1>
        <p>{t('story.subtitle')}</p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="story-section glass p-8 rounded-lg">
          <h2 className="text-gold-glow text-3xl font-bold mb-4">{t('story.myth.title')}</h2>
          <p className="text-lg leading-relaxed mb-4">{t('story.myth.p1')}</p>
        </div>
        
        <div className="story-section glass p-8 rounded-lg" style={{animationDelay: '0.2s'}}>
          <h2 className="text-gold-glow text-3xl font-bold mb-4">{t('story.fall.title')}</h2>
          <p className="text-lg leading-relaxed mb-4">{t('story.fall.p1')}</p>
        </div>

        <div className="story-section glass p-8 rounded-lg" style={{animationDelay: '0.4s'}}>
          <h2 className="text-gold-glow text-3xl font-bold mb-4">{t('story.journey.title')}</h2>
          <p className="text-lg leading-relaxed mb-4">{t('story.journey.p1')}</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-gold-glow text-2xl font-bold mb-2">{t('story.journey.allies.title')}</h3>
              <ul className="list-disc list-inside text-lg leading-relaxed mb-4">
                <li>{t('story.journey.allies.l1')}</li>
                <li>{t('story.journey.allies.l2')}</li>
                <li>{t('story.journey.allies.l3')}</li>
                <li>{t('story.journey.allies.l4')}</li>
                <li>{t('story.journey.allies.l5')}</li>
              </ul>
            </div>
            <div>
              <h3 className="text-fire-glow text-2xl font-bold mb-2">{t('story.journey.enemies.title')}</h3>
              <ul className="list-disc list-inside text-lg leading-relaxed mb-4">
                <li>{t('story.journey.enemies.l1')}</li>
                <li>{t('story.journey.enemies.l2')}</li>
                <li>{t('story.journey.enemies.l3')}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="story-section glass p-8 rounded-lg" style={{animationDelay: '0.6s'}}>
          <h2 className="text-gold-glow text-3xl font-bold mb-4">{t('story.climax.title')}</h2>
          <p className="text-lg leading-relaxed mb-4">{t('story.climax.p1')}</p>
        </div>

        <div className="story-section glass p-8 rounded-lg" style={{animationDelay: '0.8s'}}>
          <h2 className="text-fire-glow text-3xl font-bold mb-4">{t('story.endings.title')}</h2>
          <p className="text-lg leading-relaxed mb-4">{t('story.endings.p1')}</p>
          <ul className="list-disc list-inside text-lg leading-relaxed">
            <li className="mb-2"><span className="font-bold text-gold-glow">{t('story.endings.l1.title')}</span> {t('story.endings.l1.desc')}</li>
            <li className="mb-2"><span className="font-bold text-fire-glow">{t('story.endings.l2.title')}</span> {t('story.endings.l2.desc')}</li>
            <li><span className="font-bold">{t('story.endings.l3.title')}</span> {t('story.endings.l3.desc')}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Story;
