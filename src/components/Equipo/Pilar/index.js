import React from 'react';
import {NavLink} from 'react-router-dom';

import './styles.css';

import PilarPic       from '../pilar.jpeg';


function Pilar(){
  return(
    <div className="container davidStyle">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <NavLink className="breadcrumb-item breadcrumb_pilarStyle" to="/">Inicio</NavLink>
          <NavLink className="breadcrumb-item breadcrumb_pilarStyle" to="/equipo">Equipo</NavLink>
          <li class="breadcrumb-item active" aria-current="page">Pilar</li>
        </ol>
      </nav>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6">
         <img src={PilarPic} className="Davidimage img-fluid mb-3" alt="primero"/>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <h1>
              <center>Pilar</center>
          </h1>
          <h3>
              <center>Presupuesto</center>
          </h3>
          <h5>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Pilar;
