import React from 'react';
import {NavLink} from 'react-router-dom';

import './styles.css';

import JuanFelipePic       from '../jfelipepava.jpeg';


function JuanFelipe(){
  return(
    <div className="container davidStyle">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <NavLink className="breadcrumb-item breadcrumb_felipeStyle" to="/">Inicio</NavLink>
          <NavLink className="breadcrumb-item breadcrumb_felipeStyle" to="/equipo">Equipo</NavLink>
          <li class="breadcrumb-item active" aria-current="page">Juan Felipe</li>
        </ol>
      </nav>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6">
         <img src={JuanFelipePic} className="Davidimage img-fluid mb-3" alt="primero"/>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <h1>
              <center>Juan Felipe Pava Osorio</center>
          </h1>
          <h3>
              <center>Desarrollador web y administrador de redes sociales</center>
          </h3>
          <h5>
            Ingeniero Electrónico de la Pontificia Universidad Javeriana Cali. Ha trabajado como desarrollador en el cargo de Asistente de Investigación para el Instituto de Estudios Interculturales de la Universidad Javeriana; también ha sido profesor de física y matemáticas en colegios e instituto de pre-ices en la ciudad de Cali.
          </h5>
        </div>
      </div>
    </div>
  );
}

export default JuanFelipe;
