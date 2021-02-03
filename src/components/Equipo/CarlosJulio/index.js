import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.css';

import CarlosJulioPic   from '../carlosjulio.jpeg';


function CarlosJulio(){
  return(
    <div className="container cardinfoStyle">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <NavLink className="breadcrumb-item breadcrumb_carlosStyle" to="/">Inicio</NavLink>
          <NavLink className="breadcrumb-item breadcrumb_carlosStyle" to="/equipo">Equipo</NavLink>
          <li class="breadcrumb-item active" aria-current="page">Carlos Julio</li>
        </ol>
      </nav>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6">
         <img src={CarlosJulioPic} className="Davidimage img-fluid mb-3" alt="foto carlo julio"/>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 justify-content-center">
          <h1>
              <center>Carlos Julio Salamanca</center>
          </h1>
          <h3>
              <center>Fisioterapeuta</center>
          </h3>
          <h5>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default CarlosJulio;
