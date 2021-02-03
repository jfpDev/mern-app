import React from 'react';
import {NavLink} from 'react-router-dom';

import './../styles.css';

import MainNav from './../MainNav';

const Eleven = () => {
  return(
    <div className="content_transparenciaStyle">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <NavLink className="breadcrumb-item" to="/">Inicio</NavLink>
          <NavLink className="breadcrumb-item" to="/transparencia">Transparencia</NavLink>
          <li class="breadcrumb-item active" aria-current="page">Transparencia Pasiva</li>
        </ol>
      </nav>
      <div className="row">
        <div className="col-sm-12 col-md-5 col-lg-4">
          <MainNav/>
        </div>
        <div className="col-sm-12 col-md-7 col-lg-8 transparenciaContent">
          <h1 className="mainNavTitle_transparenciaStyle">Transparencia pasiva</h1>
          <ol type="a">
            <h3>
              <li>Medios de seguimiento para la consulta del estado de las solicitudes de información pública</li>
              <li>Formulario para la recepción de solicitudes de información pública</li>
              <li>Costos de reproducción de la información pública en la Procuraduría General de la Nación</li>
            </h3>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Eleven;
