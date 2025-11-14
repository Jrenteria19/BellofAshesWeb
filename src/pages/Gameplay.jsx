import { useState } from 'react';

function Gameplay() {
  const [activeSection, setActiveSection] = useState('reglas');

  const sections = {
    genero: {
      title: 'Género y Experiencia',
      icon: '⚔️',
      content: (
        <>
          <p className="text-lg leading-relaxed">
            Bell Of Ashes es un <strong>Metroidvania de acción y aventura</strong> con una atmósfera de fantasía oscura. El juego se enfoca en la exploración no lineal de un vasto mundo en 2D, el combate desafiante contra enemigos corruptos y la adquisición progresiva de habilidades esenciales para desbloquear nuevas zonas y profundizar en la rica narrativa.
          </p>
        </>
      )
    },
    reglas: {
        title: 'Reglas del Juego',
        icon: '📜',
        content: (
            <>
                <h3 className="text-fire-glow text-2xl font-bold mb-3">Reglas de Juego: Mecánicas Fundamentales de <em>Bell Of Ashes</em></h3>
    
                <h4 className="text-gold-glow text-xl font-bold mt-6 mb-2">1. El Género: Metroidvania de Fantasía Oscura</h4>
                <p className="text-lg leading-relaxed">
                    <strong>Bell Of Ashes</strong> es un juego de plataformas 2D con un fuerte enfoque en el género <strong>Metroidvania</strong>. Esto significa que la progresión del juego se basa en:
                </p>
                <ul className="list-disc list-inside text-lg leading-relaxed mt-2">
                    <li className="mb-2"><strong>Exploración No Lineal:</strong> El mundo es un mapa vasto e interconectado dividido en zonas (Superficie e Subterráneo) que ocultan múltiples rutas y pasajes secretos.</li>
                    <li className="mb-2"><strong>Progresión por Habilidad:</strong> Ciertas áreas y caminos están inicialmente bloqueados. Solo serán accesibles después de que la protagonista, Solenne, adquiera una <strong>Habilidad</strong> o un <strong>Ítem clave</strong> específico (como el Doble Salto o la Habilidad de Romper Obstáculos).</li>
                </ul>
    
                <h4 className="text-gold-glow text-xl font-bold mt-6 mb-2">2. Combate y Evolución de Solenne</h4>
                <p className="text-lg leading-relaxed">
                    El combate es desafiante y se basa en el dominio de las habilidades de Solenne, que combinan fuerza física y magia:
                </p>
                <ul className="list-disc list-inside text-lg leading-relaxed mt-2">
                    <li className="mb-2"><strong>Armamento:</strong> Solenne utiliza su <strong>Espada de Cenizas</strong> como arma principal, la cual puede ser mejorada. También cuenta con el <strong>Rayo Arcano</strong> para ataques mágicos a distancia, rápidos y precisos.</li>
                    <li className="mb-2"><strong>Evolución Visual:</strong> La protagonista obtiene nuevas habilidades, como el doble salto, que se manifiestan con cambios en su vestuario (por ejemplo, una bufanda con forma de alas).</li>
                    <li className="mb-2"><strong>Mecánica de Daño Única:</strong> Al obtener el poder <strong>"Corazón de Ceniza"</strong>, no solo aumenta su vida, sino que al recibir daño, Solenne deja un rastro de fuego que hiere a los enemigos cercanos, incentivando una gestión arriesgada del combate.</li>
                </ul>
    
                <h4 className="text-gold-glow text-xl font-bold mt-6 mb-2">3. Exploración y Secretos del Mundo</h4>
                <p className="text-lg leading-relaxed">
                    La habilidad de encontrar secretos es vital para la supervivencia y el final del juego:
                </p>
                <ul className="list-disc list-inside text-lg leading-relaxed mt-2">
                    <li className="mb-2"><strong>Objetos de Progreso:</strong> Los objetos alteran la jugabilidad de manera significativa:
                        <ul className="list-disc list-inside ml-6 mt-2">
                            <li><strong>Lente de Sangre:</strong> Es el ítem clave para la exploración, ya que permite al jugador <strong>ver muros falsos y pasajes ocultos</strong>, esenciales para descubrir el 100% del mapa.</li>
                            <li>Otros objetos (como el <strong>Broche Carmesí</strong> o <strong>Susurro de los Retratos</strong>) alteran la velocidad, el daño o la defensa según la situación de combate.</li>
                        </ul>
                    </li>
                    <li className="mb-2"><strong>Puntos Estratégicos:</strong> El mundo cuenta con <strong>Puntos de Guardado</strong> (altares o balizas de luz) distribuidos de forma estratégica, permitiendo guardar el progreso y, en algunos casos, utilizar el <strong>Viaje Rápido</strong> entre zonas.</li>
                </ul>
    
                <h4 className="text-gold-glow text-xl font-bold mt-6 mb-2">4. El Ciclo de Muerte y Consecuencia</h4>
                <p className="text-lg leading-relaxed">
                    Incluso la derrota es una mecánica.
                </p>
                <ul className="list-disc list-inside text-lg leading-relaxed mt-2">
                    <li className="mb-2"><strong>Reintentos Rápidos:</strong> El objeto <strong>"Oración Rota"</strong> reduce el tiempo de recuperación al morir, lo que se traduce en <strong>reintentos más rápidos</strong> para volver al desafío, manteniendo el flujo del juego a pesar de la dificultad.</li>
                </ul>
    
                <h4 className="text-gold-glow text-xl font-bold mt-6 mb-2">5. La Regla Final: Los Tres Destinos</h4>
                <p className="text-lg leading-relaxed">
                    El final del juego se define por las decisiones y la dedicación del jugador a la exploración:
                </p>
                <ul className="list-disc list-inside text-lg leading-relaxed mt-2">
                    <li className="mb-2"><strong>Finales Múltiples:</strong> La historia culmina con tres posibles desenlaces, dependiendo de si Solenne (Ignira) logra romper la <strong>Campana del Eco</strong> y si ha conseguido rescatar a todos los aliados y reunido las reliquias en su travesía.</li>
                    <li className="mb-2"><strong>Final Verdadero:</strong> El jugador debe enfocarse en la exploración completa y en el rescate de los "salvables" para desbloquear el mejor final, donde el ciclo es restaurado sin el sacrificio de la diosa.</li>
                </ul>
            </>
        )
    },
    controles: {
      title: 'Controles de PC',
      icon: '⌨️',
      content: (
        <>
          <p className="text-lg leading-relaxed mb-6">
            Domina los controles de Solenne para moverte con agilidad y precisión en el campo de batalla.
          </p>
          <table className="w-full text-lg leading-relaxed">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-2 pr-4">Acción</th>
                <th className="text-left py-2 pr-4">Tecla</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-800">
                <td className="py-2 pr-4 font-bold">Movimiento</td>
                <td className="py-2 pr-4">Teclas A y D</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-2 pr-4 font-bold">Salto</td>
                <td className="py-2 pr-4">Barra espaciadora</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-2 pr-4 font-bold">Ataque Básico</td>
                <td className="py-2 pr-4">Clic izquierdo del ratón</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-2 pr-4 font-bold">Ataque Mágico (Rayo Arcano)</td>
                <td className="py-2 pr-4">Clic derecho del ratón</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-2 pr-4 font-bold">Habilidad Especial</td>
                <td className="py-2 pr-4">Tecla Q</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-2 pr-4 font-bold">Interactuar</td>
                <td className="py-2 pr-4">Tecla E</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-bold">Abrir Mapa</td>
                <td className="py-2 pr-4">Tecla M</td>
              </tr>
            </tbody>
          </table>
        </>
      )
    },
    mecanicas: {
      title: 'Mecánicas y Habilidades',
      icon: '🔥',
      content: (
        <>
          <p className="text-lg leading-relaxed mb-6">
            La protagonista, Solenne, utiliza una combinación de combate físico y magia que evoluciona a medida que avanza en su misión.
          </p>

          <h3 className="text-fire-glow text-2xl font-bold mb-3">Combate y Armamento</h3>
          <table className="w-full text-lg leading-relaxed mb-6">
            <tbody>
              <tr className="border-b border-gray-700">
                <td className="font-bold py-2 pr-4 align-top">Arma Base</td>
                <td><strong>Espada de Cenizas:</strong> Una espada sencilla forjada con restos del Fuego de la Creación. Se mejora utilizando Lingotes Carmesí para aumentar su poder.</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="font-bold py-2 pr-4 align-top">Magia Ofensiva</td>
                <td><strong>Rayo Arcano:</strong> Una habilidad mágica rápida y precisa que concentra pura energía arcana en un proyectil. Es ideal para atravesar defensas menores y atacar a distancia.</td>
              </tr>
              <tr>
                <td className="font-bold py-2 pr-4 align-top">Daño Avanzado</td>
                <td>Los ataques cargados pueden ver su daño incrementado con el objeto <strong>Fragmento de Brasa Antigua</strong>, aunque a costa de consumir más energía.</td>
              </tr>
            </tbody>
          </table>

          <h3 className="text-fire-glow text-2xl font-bold mb-3">Progresión y Movimiento</h3>
          <p className="text-lg leading-relaxed mb-4">
            Las habilidades de Solenne están representadas visualmente por su vestimenta y son clave para la exploración:
          </p>
          <ul className="list-disc list-inside text-lg leading-relaxed">
            <li className="mb-2"><strong>Corazón de Ceniza (Primer Poder):</strong> Al obtenerlo, la capa de Solenne comienza a arder suavemente, lo que no solo simboliza su primer despertar de poder, sino que también tiene un efecto en combate: al recibir daño, deja un rastro de fuego que hiere a los enemigos cercanos.</li>
            <li className="mb-2"><strong>Doble Salto (Habilidad de Salto Mejorado):</strong> Esencial para la navegación avanzada, esta habilidad se desbloquea con un vestuario especial que incluye una bufanda con forma de alas estilizadas, otorgando agilidad y ligereza. Es indispensable para navegar las alturas y peligros de zonas como la Galería Escarlata.</li>
            <li className="mb-2"><strong>Habilidad de Romper Obstáculos:</strong> Una mejora necesaria para despejar caminos bloqueados por escombros, permitiendo la progresión entre zonas clave como el Atrio de las Brasas hacia el Nivel 2.</li>
          </ul>
        </>
      )
    },
    mundo: {
        title: 'Diseño de Mundo',
        icon: '🗺️',
        content: (
            <>
                <p className="text-lg leading-relaxed mb-6">
                    El mundo de Bell Of Ashes es un mapa expansivo y meticulosamente diseñado en 2D, estructurado en dos grandes mitades conectadas por un nexo central.
                </p>
                <ul className="list-disc list-inside text-lg leading-relaxed">
                    <li className="mb-2"><strong>Estructura:</strong> Un mapa interconectado dividido en una zona Superior (Superficie) y una zona Inferior (Subterránea). El punto de conexión entre ambas es un Ascensor central.</li>
                    <li className="mb-2"><strong>Atrio de las Brasas:</strong> La zona inicial, ruinas cubiertas de cenizas. Sirve como introducción a los controles. El camino a la siguiente zona está bloqueado por escombros que requieren la Habilidad de Romper Obstáculos.</li>
                    <li className="mb-2"><strong>Galería Escarlata:</strong> Minas subterráneas llenas de cristales rojos que arden y peligros ambientales (pozos de lava, maquinaria abandonada). Requiere la Habilidad de Salto Mejorado (Doble Salto) para ser navegada.</li>
                    <li className="mb-2"><strong>Puntos de Guardado:</strong> Altares o Balizas de Luz distribuidos estratégicamente. Permiten guardar el progreso y gestionar el estado del jugador. Algunos también ofrecen Viaje Rápido entre ellos una vez activados.</li>
                </ul>
            </>
        )
    },
    objetos: {
        title: 'Objetos Clave',
        icon: '💎',
        content: (
            <>
                <p className="text-lg leading-relaxed mb-4">
                    Además de las habilidades principales, el juego cuenta con objetos coleccionables que alteran las mecánicas de Solenne:
                </p>
                <table className="w-full text-lg leading-relaxed">
                    <thead>
                    <tr className="border-b border-gray-700">
                        <th className="text-left py-2 pr-4">Objeto</th>
                        <th className="text-left py-2 pr-4">Efecto o Mecánica</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="border-b border-gray-800">
                        <td className="py-2 pr-4 font-bold">Corazón de Ceniza</td>
                        <td className="py-2 pr-4">Aumenta ligeramente la vida máxima, pero al recibir daño deja un rastro de fuego que hiere a los enemigos cercanos.</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                        <td className="py-2 pr-4 font-bold">Oración Rota</td>
                        <td className="py-2 pr-4">Reduce el tiempo de recuperación al morir, permitiendo reintentos más rápidos.</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                        <td className="py-2 pr-4 font-bold">Fragmento de Brasa Antigua</td>
                        <td className="py-2 pr-4">Incrementa el daño de ataques cargados, pero consume más energía al usarlos.</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                        <td className="py-2 pr-4 font-bold">Broche Carmesí</td>
                        <td className="py-2 pr-4">Aumenta la velocidad de movimiento cuando la salud está baja.</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                        <td className="py-2 pr-4 font-bold">Susurro de los Retratos</td>
                        <td className="py-2 pr-4">Mejora el alcance de los ataques mágicos, pero reduce la fuerza de los ataques físicos.</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                        <td className="py-2 pr-4 font-bold">Campana Hueca</td>
                        <td className="py-2 pr-4">Llama a espíritus de humo que atacan al azar cuando usas tu habilidad especial.</td>
                    </tr>
                    <tr>
                        <td className="py-2 pr-4 font-bold">Lente de Sangre</td>
                        <td className="py-2 pr-4">Permite ver muros falsos y pasajes ocultos (fundamental para la exploración y el género Metroidvania).</td>
                    </tr>
                    </tbody>
                </table>
            </>
        )
    }
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="text-fire-glow">Guía de Juego: Bell of Ashes</h1>
        <p>Domina las mecánicas y secretos para forjar tu destino en un mundo de cenizas.</p>
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
                    {sections[key].icon} {sections[key].title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <main className="wiki-content glass">
          <section id={activeSection}>
            <h2 className="text-gold-glow text-3xl font-bold mb-4">{sections[activeSection].title}</h2>
            {sections[activeSection].content}
          </section>
        </main>
      </div>
    </div>
  );
}

export default Gameplay;