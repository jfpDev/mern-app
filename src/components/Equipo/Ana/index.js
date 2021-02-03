import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

import AnaPic  from  '../ana.jpeg';


function Ana(){
  return(
    <div className="container cardinfoStyle">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <NavLink className="breadcrumb-item breadcrumb_anaStyle" to="/">Inicio</NavLink>
          <NavLink className="breadcrumb-item breadcrumb_anaStyle" to="/equipo">Equipo</NavLink>
          <li class="breadcrumb-item active" aria-current="page">Ana</li>
        </ol>
      </nav>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6">
         <img src={AnaPic} className="Davidimage img-fluid mb-3" alt="foto ana"/>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <h1>
              <center>Ana Alicia Gómez A.</center>
          </h1>
          <h3>
              <center>Secretaría y Atención al usuario</center>
          </h3>
          <h5>
            Con experiencia en atención al usuario
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Ana;
