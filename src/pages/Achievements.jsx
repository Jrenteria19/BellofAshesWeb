import { useState, useEffect } from 'react';

const initialAchievementsData = [
    {
      id: 1,
      title: 'Inicio del Peregrino',
      description: 'Llegaste al Atrio de las Brasas, dando el primer paso en tu destino.',
      category: 'Historia/Progresión',
      icon: '🌅',
      completed: false,
    },
    {
      id: 2,
      title: 'Fuego en la Capa',
      description: 'Desbloquea el poder del "Corazón de Ceniza" y contempla las brasas en tu vestimenta.',
      category: 'Habilidad/Objeto',
      icon: '🔥',
      completed: false,
    },
    {
      id: 3,
      title: 'El Eco Resuena',
      description: 'Derrota a Verdugo del Martillo, el primer gran jefe del culto.',
      category: 'Jefe',
      icon: '🐲',
      completed: false,
    },
    {
      id: 4,
      title: 'Alas de la Diosa',
      description: 'Obtén la Habilidad de Salto Mejorado (Doble Salto) para navegar las alturas con ligereza.',
      category: 'Movimiento',
      icon: '🕊️',
      completed: false,
    },
    {
      id: 5,
      title: 'La Forja del Dolor',
      description: 'Ayuda a Thyros, el Forjador de Ecos, y libera el dolor de su yunque.',
      category: 'Aliado',
      icon: '🛠️',
      completed: false,
    },
    {
      id: 6,
      title: 'Guardián de Espejos',
      description: 'Derrota al Centinela de Cristal o a Thalgron, Guardián de Escorias.',
      category: 'Jefe',
      icon: '🛡️',
      completed: false,
    },
    {
      id: 7,
      title: 'Visión Oculta',
      description: 'Utiliza la Lente de Sangre para ver al menos un muro falso y acceder a un pasaje oculto.',
      category: 'Exploración/Objeto',
      icon: '👁️',
      completed: false,
    },
    {
      id: 8,
      title: 'Un Canto en la Sombra',
      description: 'Derrota a Kael, el Peregrino Oscuro, en su último duelo.',
      category: 'Historia/Jefe',
      icon: '👤',
      completed: false,
    },
    {
      id: 9,
      title: 'Lágrimas y Cenizas',
      description: 'Alcanza el desenlace donde el ciclo termina en la tristeza de Ignira.',
      category: 'Final',
      icon: '💧',
      completed: false,
    },
    {
      id: 10,
      title: 'El Amanecer del Equilibrio',
      description: 'Quiebra la Campana del Eco sin sacrificarte, rescatando a todos los aliados y reuniendo las reliquias.',
      category: 'Final Verdadero',
      icon: '🌟',
      completed: false,
    },
  ];

  const initialItemsData = [
    {
      id: 1,
      title: 'Corazón de Ceniza',
      description: 'Aumenta ligeramente la vida máxima, pero al recibir daño deja un rastro de fuego que hiere a los enemigos cercanos.',
      icon: '❤️‍🔥',
      found: false,
    },
    {
      id: 2,
      title: 'Oración Rota',
      description: 'Reduce el tiempo de recuperación al morir, permitiendo reintentos más rápidos.',
      icon: '💔',
      found: false,
    },
    {
      id: 3,
      title: 'Fragmento de Brasa Antigua',
      description: 'Incrementa el daño de ataques cargados, pero consume más energía al usarlos.',
      icon: '💥',
      found: false,
    },
    {
        id: 4,
        title: 'Broche Carmesí',
        description: 'Aumenta la velocidad de movimiento cuando la salud está baja.',
        icon: '🩸',
        found: false,
    },
    {
        id: 5,
        title: 'Susurro de los Retratos',
        description: 'Mejora el alcance de los ataques mágicos, pero reduce la fuerza de los ataques físicos.',
        icon: '👻',
        found: false,
    },
    {
        id: 6,
        title: 'Campana Hueca',
        description: 'Llama a espíritus de humo que atacan al azar cuando usas tu habilidad especial.',
        icon: '🔔',
        found: false,
    },
    {
        id: 7,
        title: 'Lente de Sangre',
        description: 'Permite ver muros falsos y pasajes ocultos (fundamental para la exploración y el género Metroidvania).',
        icon: '렌즈',
        found: false,
    }
  ];

function Achievements() {
  const [achievements, setAchievements] = useState(() => {
    const savedAchievements = localStorage.getItem('achievements');
    return savedAchievements ? JSON.parse(savedAchievements) : initialAchievementsData;
  });

  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem('items');
    return savedItems ? JSON.parse(savedItems) : initialItemsData;
  });

  const [filter, setFilter] = useState('achievements');
  const [achievementFilter, setAchievementFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('achievements', JSON.stringify(achievements));
  }, [achievements]);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

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
        <h1 className="text-fire-glow">Logros y Objetos</h1>
        <p>Registra tu progreso, colecciona artefactos legendarios y demuestra tu maestría en el campo de batalla.</p>
      </div>

      <div className="wiki-layout">
        <aside className="wiki-menu glass">
          <nav>
            <ul>
              <li>
                <a href="#achievements" className={filter === 'achievements' ? 'active' : ''} onClick={() => setFilter('achievements')}>
                  Logros
                </a>
                {filter === 'achievements' && (
                  <ul className="sub-menu">
                    <li><a href="#all" className={achievementFilter === 'all' ? 'active' : ''} onClick={() => setAchievementFilter('all')}>Todos</a></li>
                    <li><a href="#completed" className={achievementFilter === 'completed' ? 'active' : ''} onClick={() => setAchievementFilter('completed')}>Completados</a></li>
                    <li><a href="#pending" className={achievementFilter === 'pending' ? 'active' : ''} onClick={() => setAchievementFilter('pending')}>Pendientes</a></li>
                  </ul>
                )}
              </li>
              <li>
                <a href="#items" className={filter === 'items' ? 'active' : ''} onClick={() => setFilter('items')}>
                  Objetos
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
