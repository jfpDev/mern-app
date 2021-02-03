import React from 'react';
import {NavLink}   from 'react-router-dom';

import './../../styles.css';

import MainNav from './../../MainNav';

const TwoE = () => {
  return(
    <div className="content_transparenciaStyle">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <NavLink className="breadcrumb-item" to="/">Inicio</NavLink>
          <NavLink className="breadcrumb-item" to="/transparencia">Transparencia</NavLink>
          <NavLink className="breadcrumb-item" to="/transparencia/informacion">Información interés</NavLink>
          <li class="breadcrumb-item active" aria-current="page">Glosario</li>
        </ol>
      </nav>
      <div className="row">
        <div className="col-sm-12 col-md-8 col-lg-3">
          <MainNav/>
        </div>
        <div className="col-sm-12 col-md-8 col-lg-9">
          <h1 className="mainNavTitle_transparenciaStyle">Información de interés</h1>
          <h3>Glosario</h3>
        </div>
      </div>
    </div>
  );
}

export default TwoE;