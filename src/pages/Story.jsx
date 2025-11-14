import '../App.css';

function Story() {
  return (
    <div className="page-container" style={{paddingTop: '8rem'}}>
      <div className="page-header">
        <h1 className="text-fire-glow">Historia de Bell of Ashes</h1>
        <p>Un relato épico de dioses caídos, profecías olvidadas y el poder del fuego eterno</p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="story-section glass p-8 rounded-lg">
          <h2 className="text-gold-glow text-3xl font-bold mb-4">El Mito Fundacional</h2>
          <p className="text-lg leading-relaxed mb-4">En el principio, del Fuego de la Creación nacieron los dos dioses gemelos: Ignira (Diosa de la Creación), forjadora de la vida, montañas, ríos y cielos; y Ozyr (Dios de la Destrucción), encargado de cerrar el ciclo de las cosas, devolviendo la calma y la oportunidad para una segunda creación. Ambos dioses tejieron el destino en un equilibrio perfecto y un profundo amor, siendo sus encuentros el origen de las auroras y nuevas constelaciones.</p>
        </div>
        
        <div className="story-section glass p-8 rounded-lg" style={{animationDelay: '0.2s'}}>
          <h2 className="text-gold-glow text-3xl font-bold mb-4">La Caída del Equilibrio</h2>
          <p className="text-lg leading-relaxed mb-4">El equilibrio fue roto por los Portadores del Eco, un culto temeroso de que el ciclo de vida y muerte girara sin final. Capturaron a Ozyr y lo encadenaron a la Campana del Eco, un artefacto prohibido nacido del vacío. El sonido de la campana torció las raíces del mundo, apagando la esperanza y debilitando a Ignira, cuyo fuego creador se convirtió en brasas. En el lamento de Ignira, una profecía resonó en las cavernas de Noctaria, anunciando la llegada de una "viajera de cenizas" que rompería el yugo o extinguiría el mundo con su fuego.</p>
        </div>

        <div className="story-section glass p-8 rounded-lg" style={{animationDelay: '0.4s'}}>
          <h2 className="text-gold-glow text-3xl font-bold mb-4">La Travesía de Solenne</h2>
          <p className="text-lg leading-relaxed mb-4">Solenne aparece como la "viajera de cenizas" de la profecía. A lo largo de su camino por tierras desoladas, logra encontrar y rescatar a varios aliados clave y reunir fragmentos de humanidad, que devuelven la vida al Santuario del Faro.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-gold-glow text-2xl font-bold mb-2">Aliados Principales:</h3>
              <ul className="list-disc list-inside text-lg leading-relaxed mb-4">
                <li>Arieth, la Guardiana del Santuario: Guía y protectora silenciosa.</li>
                <li>Velric, el Coleccionista de Reliquias: Comerciante de objetos olvidados con conocimiento de secretos arcanos.</li>
                <li>Mira, la Viajera Herida: Reflejo de la corrupción por el eco, sirve como advertencia.</li>
                <li>Thyros, el Forjador de Ecos: Herrero encadenado con una promesa de redención.</li>
                <li>Selianne, la Voz del Faro: Espíritu prisionero en una campana rota.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-fire-glow text-2xl font-bold mb-2">Enemigos Clave:</h3>
              <ul className="list-disc list-inside text-lg leading-relaxed mb-4">
                <li>Portadores del Eco: Espectros que buscan el silencio eterno.</li>
                <li>Kael, el Peregrino Oscuro: Un joven consumido por la obsesión de apropiarse del poder de Ozyr.</li>
                <li>Verdugo del Martillo: El primer jefe al que se enfrenta el jugador.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="story-section glass p-8 rounded-lg" style={{animationDelay: '0.6s'}}>
          <h2 className="text-gold-glow text-3xl font-bold mb-4">El Clímax y la Verdad</h2>
          <p className="text-lg leading-relaxed mb-4">El viaje culmina en el Corazón del Eco, donde Solenne halla a Ozyr encadenado y convertido en una marioneta del culto. Durante la batalla, la espada de Solenne estalla en luz, y su cuerpo mortal se quiebra, revelando su verdadera identidad: Solenne siempre fue Ignira, la diosa de la Creación, que había descendido en forma mortal para salvar a su amado. El enfrentamiento final no es para destruir a Ozyr, sino para liberar el mundo al quebrar la campana que lo esclaviza.</p>
        </div>

        <div className="story-section glass p-8 rounded-lg" style={{animationDelay: '0.8s'}}>
          <h2 className="text-fire-glow text-3xl font-bold mb-4">Posibles Desenlaces</h2>
          <p className="text-lg leading-relaxed mb-4">El destino del mundo depende de las acciones del jugador, dando lugar a tres finales narrados en las viejas canciones:</p>
          <ul className="list-disc list-inside text-lg leading-relaxed">
            <li className="mb-2"><span className="font-bold text-gold-glow">Sacrificio Parcial:</span> Si Ignira logra quebrar la campana, Ozyr es liberado y se reencuentran. Sin embargo, la diosa queda debilitada y condenada a extinguirse lentamente.</li>
            <li className="mb-2"><span className="font-bold text-fire-glow">La Ceniza Final:</span> Si Ignira falla en romper la campana, se ve obligada a matar a Ozyr, y el ciclo termina en lágrimas y cenizas, consumiendo el mundo.</li>
            <li><span className="font-bold">Nuevo Amanecer (Final Verdadero):</span> Si el jugador ha salvado a todos los aliados y reunido las reliquias, Ignira logra romper la campana sin sacrificarse. Junto a Ozyr, encienden un nuevo amanecer donde el eco se convierte en un canto de esperanza, restaurando el equilibrio eterno.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Story;
