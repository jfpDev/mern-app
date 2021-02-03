import React from 'react';
import {NavLink} from 'react-router-dom';

import './styles.css';

import JulioPic       from '../julio.jpeg';


function Julio(){
  return(
    <div className="container davidStyle">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <NavLink className="breadcrumb-item breadcrumb_julioStyle" to="/">Inicio</NavLink>
          <NavLink className="breadcrumb-item breadcrumb_julioStyle" to="/equipo">Equipo</NavLink>
          <li class="breadcrumb-item active" aria-current="page">Julio</li>
        </ol>
      </nav>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6">
         <img src={JulioPic} className="Davidimage img-fluid mb-3" alt="primero"/>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <h1>
              <center>Julio César Hernandez Becerra</center>
          </h1>
          <h3>
              <center></center>
          </h3>
          <h5>
            Ingeniero Agroindustrial de la Universidad Nacional de Colombia y con una especialización en Gerencia de Proyectos. Desempeñó la docencia en emprendimiento e innovación, además cuenta con 2 años de experiencia en la secretaría de desarrollo económico. Amante al cine, los libros y las ciencias experimentales.
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Julio;
