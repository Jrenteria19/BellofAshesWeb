import { useState, useEffect, useMemo } from 'react';
import { useI18n } from '../components/i18n';

function Achievements() {
  const { t } = useI18n();

  const initialAchievementsData = useMemo(() => [
    { id: 1, icon: '🌅', completed: false, category: 'Historia/Progresión' },
    { id: 2, icon: '🔥', completed: false, category: 'Habilidad/Objeto' },
    { id: 3, icon: '🐲', completed: false, category: 'Jefe' },
    { id: 4, icon: '🕊️', completed: false, category: 'Movimiento' },
    { id: 5, icon: '🛠️', completed: false, category: 'Aliado' },
    { id: 6, icon: '🛡️', completed: false, category: 'Jefe' },
    { id: 7, icon: '👁️', completed: false, category: 'Exploración/Objeto' },
    { id: 8, icon: '👤', completed: false, category: 'Historia/Jefe' },
    { id: 9, icon: '💧', completed: false, category: 'Final' },
    { id: 10, icon: '🌟', completed: false, category: 'Final Verdadero' },
  ].map(ach => ({ ...ach, title: t(`achievements.${ach.id}.title`), description: t(`achievements.${ach.id}.desc`) })), [t]);

  const initialItemsData = useMemo(() => [
    { id: 1, icon: '❤️‍🔥', found: false },
    { id: 2, icon: '💔', found: false },
    { id: 3, icon: '💥', found: false },
    { id: 4, icon: '🩸', found: false },
    { id: 5, icon: '👻', found: false },
    { id: 6, icon: '🔔', found: false },
    { id: 7, icon: '렌즈', found: false },
  ].map(item => ({ ...item, title: t(`items.${item.id}.title`), description: t(`items.${item.id}.desc`) })), [t]);

  const [achievements, setAchievements] = useState(() => {
    const savedAchievements = localStorage.getItem('achievements');
    if (savedAchievements) {
      const parsed = JSON.parse(savedAchievements);
      // Merge saved state with translated text
      return initialAchievementsData.map(ach => ({ ...ach, completed: parsed.find(s => s.id === ach.id)?.completed || false }));
    }
    return initialAchievementsData;
  });

  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem('items');
    if (savedItems) {
      const parsed = JSON.parse(savedItems);
      return initialItemsData.map(item => ({ ...item, found: parsed.find(s => s.id === item.id)?.found || false }));
    }
    return initialItemsData;
  });

  const [filter, setFilter] = useState('achievements');
  const [achievementFilter, setAchievementFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('achievements', JSON.stringify(achievements));
  }, [achievements, t]);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items, t]);

  useEffect(() => {
    setAchievements(prev => prev.map(ach => ({ ...ach, title: t(`achievements.${ach.id}.title`), description: t(`achievements.${ach.id}.desc`) })));
  }, [t, initialAchievementsData]);

  useEffect(() => {
    setItems(prev => prev.map(item => ({ ...item, title: t(`items.${item.id}.title`), description: t(`items.${item.id}.desc`) })));
  }, [t, initialItemsData]);

  const handleAchievementCheckboxChange = (id) => {
    setAchievements(
      achievements.map((ach) =>
        ach.id === id ? { ...ach, completed: !ach.completed } : ach
      )
    );
  };

  const handleItemCheckboxChange = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, found: !item.found } : item
      )
    );
  };

  const filteredAchievements = achievements.filter((ach) => {
    if (achievementFilter === 'all') return true;
    if (achievementFilter === 'completed') return ach.completed;
    if (achievementFilter === 'pending') return !ach.completed;
    return true;
  });

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="text-fire-glow">{t('achievements.title')}</h1>
        <p>{t('achievements.subtitle')}</p>
      </div>

      <div className="wiki-select-container">
        <select 
          className="wiki-select glass"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="achievements">{t('achievements.filter.achievements')}</option>
          <option value="items">{t('achievements.filter.items')}</option>
        </select>

        {filter === 'achievements' && (
          <select
            className="wiki-select glass"
            value={achievementFilter}
            onChange={(e) => setAchievementFilter(e.target.value)}
          >
            <option value="all">{t('achievements.filter.all')}</option>
            <option value="completed">{t('achievements.filter.completed')}</option>
            <option value="pending">{t('achievements.filter.pending')}</option>
          </select>
        )}
      </div>

      <div className="wiki-layout">
        <aside className="wiki-menu glass">
          <nav>
            <ul>
              <li>
                <a href="#achievements" className={filter === 'achievements' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setFilter('achievements'); }}>
                  {t('achievements.filter.achievements')}
                </a>
                {filter === 'achievements' && (
                  <ul className="sub-menu">
                    <li><a href="#all" className={achievementFilter === 'all' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setAchievementFilter('all'); }}>{t('achievements.filter.all')}</a></li>
                    <li><a href="#completed" className={achievementFilter === 'completed' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setAchievementFilter('completed'); }}>{t('achievements.filter.completed')}</a></li>
                    <li><a href="#pending" className={achievementFilter === 'pending' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setAchievementFilter('pending'); }}>{t('achievements.filter.pending')}</a></li>
                  </ul>
                )}
              </li>
              <li>
                <a href="#items" className={filter === 'items' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setFilter('items'); }}>
                  {t('achievements.filter.items')}
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        <main className="wiki-content glass">
          {filter === 'achievements' && (
            <div className="achievements-list">
              {filteredAchievements.map((ach) => (
                <div key={ach.id} className={`achievement-item ${ach.completed ? 'completed' : ''}`}>
                  <div className="achievement-icon">{ach.icon}</div>
                  <div className="achievement-details">
                    <h3>{ach.title}</h3>
                    <p>{ach.description}</p>
                  </div>
                  <div className="achievement-checkbox">
                    <input
                      type="checkbox"
                      checked={ach.completed}
                      onChange={() => handleAchievementCheckboxChange(ach.id)}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {filter === 'items' && (
            <div className="items-list">
              {items.map((item) => (
                <div key={item.id} className={`item-item ${item.found ? 'found' : ''}`}>
                  <div className="item-icon">{item.icon}</div>
                  <div className="item-details">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  <div className="item-checkbox">
                    <input
                      type="checkbox"
                      checked={item.found}
                      onChange={() => handleItemCheckboxChange(item.id)}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default Achievements;
