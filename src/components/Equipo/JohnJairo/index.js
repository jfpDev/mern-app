import React from 'react';
import {NavLink} from 'react-router-dom';

import './styles.css';

import JohnJairoPic       from '../johnjairo.png';


function JohnJairo(){
  return(
    <div className="container davidStyle">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <NavLink className="breadcrumb-item breadcrumb_jairoStyle" to="/">Inicio</NavLink>
          <NavLink className="breadcrumb-item breadcrumb_jairoStyle" to="/equipo">Equipo</NavLink>
          <li class="breadcrumb-item active" aria-current="page">John Jairo</li>
        </ol>
      </nav>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6">
         <img src={JohnJairoPic} className="Davidimage img-fluid mb-3" alt="primero"/>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <h1>
              <center>John Jairo Varón</center>
          </h1>
          <h3>
              <center>Asesor de control interno</center>
          </h3>
          <h5>
            Contador público de la Universidad del Valle y Especialista en Revisoría Fiscal y Auditoría de la Universidad Libre.
          </h5>
        </div>
      </div>
    </div>
  );
}

export default JohnJairo;
