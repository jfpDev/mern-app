import React from 'react';
import {NavLink}  from 'react-router-dom';

import './styles.css';

import DiegoPic   from '../diego.jpeg';


function Diego(){
  return(
    <div className="container cardinfoStyle">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <NavLink className="breadcrumb-item breadcrumb_diegoStyle" to="/">Inicio</NavLink>
          <NavLink className="breadcrumb-item breadcrumb_diegoStyle" to="/equipo">Equipo</NavLink>
          <li class="breadcrumb-item active" aria-current="page">Diego Gamboa</li>
        </ol>
      </nav>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6">
         <img src={DiegoPic} className="Davidimage img-fluid mb-3" alt="Diego Gamboa foto"/>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <h1>
              <center>Diego Fernando Gamboa Palencia</center>
          </h1>
          <h3>
              <center>Asesor Jurídico</center>
          </h3>
          <h5>
            Abogado de la Universidad Santiago de Cali
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Diego;
