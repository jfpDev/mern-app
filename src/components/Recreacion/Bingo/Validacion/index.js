import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';


const Validacion = () => {
  return(
    <div className="container validacion_style">
    <nav aria-label="breadcrumb breadcrumb_validacionStyle">
      <ol className="breadcrumb">
        <NavLink className="breadcrumb-item" to="/">Inicio</NavLink>
        <NavLink className="breadcrumb-item" to="/recreacion">Recreación</NavLink>
        <li className="breadcrumb-item active" aria-current="page">Validación</li>
      </ol>
    </nav>
      <div className="title_validacionStyle">
        Bingo Familiar con el IMDER
      </div>
      <div className="pregunta_validacionStyle">
        <h3>Hola, ¿ya estás registrad@?</h3>
      </div>
      <div className="options_validacionStyle col-sm-12 col-md-12 col-lg-12">
        <NavLink className="btn button_validacionStyle" to="/recreacion/bingo/identificacion">
          Sí
        </NavLink>
        <NavLink className="btn button_validacionStyle" to="/recreacion/bingo/registro">
            No
        </NavLink>
      </div>
    </div>
  );
};


export default Validacion;
