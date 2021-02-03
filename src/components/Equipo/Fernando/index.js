import React from 'react';
import {NavLink}  from 'react-router-dom';

import './styles.css';

import FernandoPic       from '../fernando.jpeg';


function Fernando(){
  return(
    <div className="container davidStyle">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <NavLink className="breadcrumb-item breadcrumb_fernandoStyle" to="/">Inicio</NavLink>
          <NavLink className="breadcrumb-item breadcrumb_fernandoStyle" to="/equipo">Equipo</NavLink>
          <li class="breadcrumb-item active" aria-current="page">Fernando</li>
        </ol>
      </nav>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6">
         <img src={FernandoPic} className="Davidimage img-fluid mb-3" alt="primero"/>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <h1>
              <center>Fernando Morales Sanchez</center>
          </h1>
          <h3>
              <center>Coordinador de mantenimiento</center>
          </h3>
          <h5>
            Mecánico de mantenimiento. Con experiencia en metal-mecánica en ingenios azucareros de la región; emprendedor en esta área con el desarrollo de proyectos para diversos ingenios.
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Fernando;
