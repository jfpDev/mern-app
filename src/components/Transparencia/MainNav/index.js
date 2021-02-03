import React from 'react';
import {NavLink}  from 'react-router-dom';

import './../styles.css';

const MainNav = () => {
  return(
    <div className="transparenciaNav">
      <div className="transparenciaNav_item">
        <NavLink className="transparenciaContent_transparenciaStyle" to="/transparencia/mecanismos">1. Mecanismos de contacto con el sujeto obligado</NavLink>
      </div>
      <div className="transparenciaNav_item">
        <NavLink className="transparenciaContent_transparenciaStyle" to="/transparencia/informacion">2. Información de interés</NavLink>
      </div>
      <div className="transparenciaNav_item">
        <NavLink className="transparenciaContent_transparenciaStyle" to="/transparencia/estructura">3. Estructura orgánica y talento humano</NavLink>
      </div>
      <div className="transparenciaNav_item">
        <NavLink className="transparenciaContent_transparenciaStyle" to="/transparencia/normatividad">4. Normatividad</NavLink>
      </div>
      <div className="transparenciaNav_item">
        <NavLink className="transparenciaContent_transparenciaStyle" to="/transparencia/presupuesto">5. Presupuesto</NavLink>
      </div>
      <div className="transparenciaNav_item">
        <NavLink className="transparenciaContent_transparenciaStyle" to="/transparencia/planeacion">6. Planeación</NavLink>
      </div>
      <div className="transparenciaNav_item">
        <NavLink className="transparenciaContent_transparenciaStyle" to="/transparencia/control">7. Control</NavLink>
      </div>
      <div className="transparenciaNav_item">
        <NavLink className="transparenciaContent_transparenciaStyle" to="/transparencia/contratacion">8. Contratación</NavLink>
      </div>
      <div className="transparenciaNav_item">
        <NavLink className="transparenciaContent_transparenciaStyle" to="/transparencia/tramites">9. Trámites y servicios</NavLink>
      </div>
      <div className="transparenciaNav_item">
        <NavLink className="transparenciaContent_transparenciaStyle" to="/transparencia/instrumentos-gestion">10. Instrumentos de gestión de información pública</NavLink>
      </div>
      <div className="transparenciaNav_item">
        <NavLink className="transparenciaContent_transparenciaStyle" to="/transparencia/transparencia-pasiva">11. Transparencia pasiva</NavLink>
      </div>
      <div className="transparenciaNav_item">
        <NavLink className="transparenciaContent_transparenciaStyle" to="/transparencia/accesibilidad">12. Accesibilidad web</NavLink>
      </div>
      <div className="transparenciaNav_item">
        <NavLink className="transparenciaContent_transparenciaStyle" to="/transparencia/proteccion-datos">13. Protección de datos personales</NavLink>
      </div>
    </div>
  );
}

export default MainNav;
