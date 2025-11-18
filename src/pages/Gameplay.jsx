import { useState, useMemo } from 'react';
import { sections } from '../data/gameplayData.jsx';
import { useI18n } from '../components/i18n.jsx';

function Gameplay() {
  const [activeSection, setActiveSection] = useState('genero');
  const { t } = useI18n();
  
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="text-fire-glow">{t('gameplay.title')}</h1>
        <p>{t('gameplay.subtitle')}</p>
      </div>

      <div className="wiki-select-container">
        <select 
          className="wiki-select glass"
          value={activeSection}
          onChange={(e) => setActiveSection(e.target.value)}
        >
          {Object.keys(sections).map((key) => (
            <option key={key} value={key}>
              {t(`gameplay.data.${sections[key].translationKey}.title`)}
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
                    {sections[key].icon} {t(`gameplay.data.${sections[key].translationKey}.title`)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <main className="wiki-content glass">
          <section id={activeSection}>
            <h2 className="text-gold-glow text-3xl font-bold mb-4">{t(`gameplay.data.${sections[activeSection].translationKey}.title`)}</h2>
            
            {activeSection === 'genero' && <p className="text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t('gameplay.data.genre.desc') }} />}

            {activeSection === 'reglas' && (
              <>
                <h3 className="text-fire-glow text-2xl font-bold mb-3" dangerouslySetInnerHTML={{ __html: t('gameplay.data.rules.h1') }} />
                <h4 className="text-gold-glow text-xl font-bold mt-6 mb-2" dangerouslySetInnerHTML={{ __html: t('gameplay.data.rules.h2') }} />
                <p className="text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t('gameplay.data.rules.p1') }} />
                <ul className="list-disc list-inside text-lg leading-relaxed mt-2">
                  <li className="mb-2" dangerouslySetInnerHTML={{ __html: t('gameplay.data.rules.l1') }} />
                  <li className="mb-2" dangerouslySetInnerHTML={{ __html: t('gameplay.data.rules.l2') }} />
                </ul>
                <h4 className="text-gold-glow text-xl font-bold mt-6 mb-2" dangerouslySetInnerHTML={{ __html: t('gameplay.data.rules.h3') }} />
                <p className="text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t('gameplay.data.rules.p2') }} />
                <ul className="list-disc list-inside text-lg leading-relaxed mt-2">
                  <li className="mb-2" dangerouslySetInnerHTML={{ __html: t('gameplay.data.rules.l3') }} />
                  <li className="mb-2" dangerouslySetInnerHTML={{ __html: t('gameplay.data.rules.l4') }} />
                  <li className="mb-2" dangerouslySetInnerHTML={{ __html: t('gameplay.data.rules.l5') }} />
                </ul>
                <h4 className="text-gold-glow text-xl font-bold mt-6 mb-2" dangerouslySetInnerHTML={{ __html: t('gameplay.data.rules.h4') }} />
                <p className="text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t('gameplay.data.rules.p3') }} />
                <ul className="list-disc list-inside text-lg leading-relaxed mt-2">
                    <li className="mb-2"><span dangerouslySetInnerHTML={{ __html: t('gameplay.data.rules.l6') }} />
                        <ul className="list-disc list-inside ml-6 mt-2">
                            <li dangerouslySetInnerHTML={{ __html: t('gameplay.data.rules.l6_1') }} />
                            <li dangerouslySetInnerHTML={{ __html: t('gameplay.data.rules.l6_2') }} />
                        </ul>
                    </li>
                    <li className="mb-2" dangerouslySetInnerHTML={{ __html: t('gameplay.data.rules.l7') }} />
                </ul>
                <h4 className="text-gold-glow text-xl font-bold mt-6 mb-2" dangerouslySetInnerHTML={{ __html: t('gameplay.data.rules.h5') }} />
                <p className="text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t('gameplay.data.rules.p4') }} />
                <ul className="list-disc list-inside text-lg leading-relaxed mt-2">
                    <li className="mb-2" dangerouslySetInnerHTML={{ __html: t('gameplay.data.rules.l8') }} />
                </ul>
                <h4 className="text-gold-glow text-xl font-bold mt-6 mb-2" dangerouslySetInnerHTML={{ __html: t('gameplay.data.rules.h6') }} />
                <p className="text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t('gameplay.data.rules.p5') }} />
                <ul className="list-disc list-inside text-lg leading-relaxed mt-2">
                    <li className="mb-2" dangerouslySetInnerHTML={{ __html: t('gameplay.data.rules.l9') }} />
                    <li className="mb-2" dangerouslySetInnerHTML={{ __html: t('gameplay.data.rules.l10') }} />
                </ul>
              </>
            )}

            {activeSection === 'controles' && (
                <>
                    <p className="text-lg leading-relaxed mb-6">{t('gameplay.data.controls.desc')}</p>
                    <table className="w-full text-lg leading-relaxed">
                        <thead><tr className="border-b border-gray-700"><th className="text-left py-2 pr-4">{t('gameplay.data.controls.action')}</th><th className="text-left py-2 pr-4">{t('gameplay.data.controls.key')}</th></tr></thead>
                        <tbody>
                            <tr className="border-b border-gray-800"><td className="py-2 pr-4 font-bold">{t('gameplay.data.controls.move')}</td><td className="py-2 pr-4">A & D</td></tr>
                            <tr className="border-b border-gray-800"><td className="py-2 pr-4 font-bold">{t('gameplay.data.controls.jump')}</td><td className="py-2 pr-4">Spacebar</td></tr>
                            <tr className="border-b border-gray-800"><td className="py-2 pr-4 font-bold">{t('gameplay.data.controls.attack')}</td><td className="py-2 pr-4">Left Click</td></tr>
                            <tr className="border-b border-gray-800"><td className="py-2 pr-4 font-bold">{t('gameplay.data.controls.magic')}</td><td className="py-2 pr-4">Right Click</td></tr>
                            <tr className="border-b border-gray-800"><td className="py-2 pr-4 font-bold">{t('gameplay.data.controls.special')}</td><td className="py-2 pr-4">Q</td></tr>
                            <tr className="border-b border-gray-800"><td className="py-2 pr-4 font-bold">{t('gameplay.data.controls.interact')}</td><td className="py-2 pr-4">E</td></tr>
                            <tr><td className="py-2 pr-4 font-bold">{t('gameplay.data.controls.map')}</td><td className="py-2 pr-4">M</td></tr>
                        </tbody>
                    </table>
                </>
            )}

            {activeSection === 'mecanicas' && (
                <>
                    <p className="text-lg leading-relaxed mb-6">{t('gameplay.data.mechanics.desc')}</p>
                    <h3 className="text-fire-glow text-2xl font-bold mb-3">{t('gameplay.data.mechanics.h1')}</h3>
                    <table className="w-full text-lg leading-relaxed mb-6"><tbody>
                        <tr className="border-b border-gray-700"><td className="font-bold py-2 pr-4 align-top">{t('gameplay.data.mechanics.baseWeapon')}</td><td dangerouslySetInnerHTML={{ __html: t('gameplay.data.mechanics.baseWeaponDesc') }} /></tr>
                        <tr className="border-b border-gray-700"><td className="font-bold py-2 pr-4 align-top">{t('gameplay.data.mechanics.magic')}</td><td dangerouslySetInnerHTML={{ __html: t('gameplay.data.mechanics.magicDesc') }} /></tr>
                        <tr><td className="font-bold py-2 pr-4 align-top">{t('gameplay.data.mechanics.advDmg')}</td><td dangerouslySetInnerHTML={{ __html: t('gameplay.data.mechanics.advDmgDesc') }} /></tr>
                    </tbody></table>
                    <h3 className="text-fire-glow text-2xl font-bold mb-3">{t('gameplay.data.mechanics.h2')}</h3>
                    <p className="text-lg leading-relaxed mb-4">{t('gameplay.data.mechanics.p1')}</p>
                    <ul className="list-disc list-inside text-lg leading-relaxed">
                        <li className="mb-2" dangerouslySetInnerHTML={{ __html: t('gameplay.data.mechanics.l1') }} />
                        <li className="mb-2" dangerouslySetInnerHTML={{ __html: t('gameplay.data.mechanics.l2') }} />
                        <li className="mb-2" dangerouslySetInnerHTML={{ __html: t('gameplay.data.mechanics.l3') }} />
                    </ul>
                </>
            )}

            {activeSection === 'mundo' && (
                <>
                    <p className="text-lg leading-relaxed mb-6">{t('gameplay.data.world.desc')}</p>
                    <ul className="list-disc list-inside text-lg leading-relaxed">
                        <li className="mb-2" dangerouslySetInnerHTML={{ __html: t('gameplay.data.world.l1') }} />
                        <li className="mb-2" dangerouslySetInnerHTML={{ __html: t('gameplay.data.world.l2') }} />
                        <li className="mb-2" dangerouslySetInnerHTML={{ __html: t('gameplay.data.world.l3') }} />
                        <li className="mb-2" dangerouslySetInnerHTML={{ __html: t('gameplay.data.world.l4') }} />
                    </ul>
                </>
            )}

            {activeSection === 'objetos' && (
                <>
                    <p className="text-lg leading-relaxed mb-4">{t('gameplay.data.items.desc')}</p>
                    <table className="w-full text-lg leading-relaxed">
                        <thead><tr className="border-b border-gray-700"><th className="text-left py-2 pr-4">{t('gameplay.data.items.object')}</th><th className="text-left py-2 pr-4">{t('gameplay.data.items.effect')}</th></tr></thead>
                        <tbody>
                            {[1,2,3,4,5,6,7].map(i => (
                                <tr key={i} className="border-b border-gray-800"><td className="py-2 pr-4 font-bold">{t(`items.${i}.title`)}</td><td className="py-2 pr-4">{t(`items.${i}.desc`)}</td></tr>
                            ))}
                        </tbody>
                    </table>
                </>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}

export default Gameplay;
