import React from 'react';
import {NavLink} from 'react-router-dom';

import './styles.css';

import LeonardoPic       from '../leonardo.jpeg';


function Leonardo(){
  return(
    <div className="container davidStyle">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <NavLink className="breadcrumb-item breadcrumb_leoStyle" to="/">Inicio</NavLink>
          <NavLink className="breadcrumb-item breadcrumb_leoStyle" to="/equipo">Equipo</NavLink>
          <li class="breadcrumb-item active" aria-current="page">Leonardo</li>
        </ol>
      </nav>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6">
         <img src={LeonardoPic} className="Davidimage img-fluid mb-3" alt="primero"/>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <h1>
              <center>Leonardo Fabio Benavides Lince</center>
          </h1>
          <h3>
              <center>Metodólogo</center>
          </h3>
          <h5>
            Licenciado en Educación Física y Salud de la Universidad del Valle. Ha desempeñado labores como entrenador internacional de voleibol
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Leonardo;
