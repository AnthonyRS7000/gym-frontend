import React from 'react';
import './Gym.css';  // Asegúrate de que los estilos estén aquí

const Gym = () => {
  return (
    <div className="gym-container">
      {/* Sección Hero con solo el banner de fondo */}
      <section className="hero">
        <div className="hero-image">
          <img src="/images/banner.png" alt="Banner de Smart Fit" />
        </div>
      </section>

        {/* Nueva Sección de "Buscar Sede" con la imagen de fondo */}
      <section className="search-location">
        <div className="search-location-background">
          <img src="/images/buscar-sede.png" alt="Buscar Sede" />
        </div>
        <div className="search-location-content">
          <h2>Encuentra la sede más cercana</h2>
          <div className="search-container">
            <input 
              type="text" 
              className="search-input" 
              placeholder="Buscar sede" 
            />
            <button className="search-button">
              <i className="fas fa-search"></i> {/* Aquí usamos el ícono de la lupa */}
            </button>
          </div>
        </div>
      </section>
     {/* Sección de planes */}
     <section className="plans">
     <h1>ELIGE <span>TU PLAN</span></h1>
      <h2>¡Comienza a entrenar con nosotros! Elige el plan que quieras y nos vemos en la sede de tu preferencia.</h2>

        {/* Tabla de planes */}
        <div className="plans-table">
          <div className="plans-table-header">
            <div className="plans-table-header-item">Más beneficios</div>
            <div className="plans-table-header-item">PLAN Black</div>
            <div className="plans-table-header-item">PLAN Fit</div>
            <div className="plans-table-header-item">PLAN Smart</div>
          </div>

          <div className="plans-table-row">
            <div className="plans-table-item">Entrena en todos los gimnasios de Smart Fit en Perú y Latinoamérica (+1700)</div>
            <div className="plans-table-item">✔</div>
            <div className="plans-table-item">✔</div>
            <div className="plans-table-item">✖</div>
          </div>

          <div className="plans-table-row">
            <div className="plans-table-item">Acceso ilimitado a todas las áreas de peso libre e integrado - Máquinas, pesas, discos y barras</div>
            <div className="plans-table-item">✔</div>
            <div className="plans-table-item">✔</div>
            <div className="plans-table-item">✔</div>
          </div>

          <div className="plans-table-row">
            <div className="plans-table-item">Clases grupales con profesores - Actívate, baila y relájate</div>
            <div className="plans-table-item">✔</div>
            <div className="plans-table-item">✔</div>
            <div className="plans-table-item">✔</div>
          </div>

          <div className="plans-table-row">
            <div className="plans-table-item">Smart Fit App - Tu plan de entrenamiento personalizado</div>
            <div className="plans-table-item">✔</div>
            <div className="plans-table-item">✔</div>
            <div className="plans-table-item">✔</div>
          </div>

          <div className="plans-table-row">
            <div className="plans-table-item">Smart Fit Go - Entrena donde y cuando quieras</div>
            <div className="plans-table-item">✔</div>
            <div className="plans-table-item">✔</div>
            <div className="plans-table-item">✔</div>
          </div>

          <div className="plans-table-row">
            <div className="plans-table-item">Relájate en los sillones de masajes</div>
            <div className="plans-table-item">✔</div>
            <div className="plans-table-item">✔</div>
            <div className="plans-table-item">✖</div>
          </div>

          <div className="plans-table-row">
            <div className="plans-table-item">5 invitados al mes en el gimnasio que quieras</div>
            <div className="plans-table-item">✔</div>
            <div className="plans-table-item">✖</div>
            <div className="plans-table-item">✖</div>
          </div>

          <div className="plans-table-footer">
            <div className="plans-table-footer-item">Desde</div>
            <div className="plans-table-footer-item">S/ 19.90* <br/> en el 1er mes, después S/ 109.90/mes</div>
            <div className="plans-table-footer-item">S/ 19.90* <br/> en el 1er mes, después S/ 79.90/mes</div>
            <div className="plans-table-footer-item">S/ 19.90* <br/> en el 1er mes, después S/ 89.90/mes</div>
          </div>
        </div>

        <button className="cta-button">¡Inscríbete ya!</button>
      </section>

      {/* Sección de experiencia */}
      <section className="experience">
        <h2>Vive la experiencia Smart Fit</h2>
        <div className="experience-cards">
          <div className="experience-card">
            <img src="/images/equipo_moderno.png" alt="Equipos modernos" />
            <h3>Equipos modernos</h3>
          </div>
          <div className="experience-card">
            <img src="/images/clases_grupales.png" alt="Clases grupales" />
            <h3>Clases grupales</h3>
          </div>
          <div className="experience-card">
            <img src="/images/entrenamiento.png" alt="Zona de entrenamiento" />
            <h3>Zona de entrenamiento</h3>
          </div>
        </div>
      </section>

      {/* Sección de clases grupales */}
      <section className="group-classes">
        <h2>Conoce nuestras Clases Grupales Exclusivas</h2>
        <div className="classes-cards">
          <div className="class-card">
            <h3>Zumba</h3>
            <p>Duración: 45-50 min | Intensidad: Alta</p>
          </div>
          <div className="class-card">
            <h3>Smart Tabata</h3>
            <p>Duración: 30 min | Intensidad: Alta</p>
          </div>
          <div className="class-card">
            <h3>Bike</h3>
            <p>Duración: 45-60 min | Intensidad: Alta</p>
          </div>
        </div>
      </section>

      {/* Sección de la aplicación Smart Fit */}
      <section className="app">
        <h2>Smart Fit App</h2>
        <p>Descarga la app para entrenar dentro y fuera del gimnasio</p>
        <button className="cta-button">Descargar la App</button>
      </section>

      {/* Sección de Coach */}
      <section className="coach">
        <h2>Smart Fit Coach</h2>
        <p>Personaliza tu entrenamiento con un nutricionista especializado</p>
        <button className="cta-button">Infórmate más</button>
      </section>
    </div>
  );
};

export default Gym;
