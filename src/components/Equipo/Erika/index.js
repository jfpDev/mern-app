import React from 'react';
import {NavLink} from 'react-router-dom';

import './styles.css';

import ErikaPic     from '../erika.jpeg';


function Erika(){
  return(
    <div className="container davidStyle">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <NavLink className="breadcrumb-item breadcrumb_erickaStyle" to="/">Inicio</NavLink>
          <NavLink className="breadcrumb-item breadcrumb_erickaStyle" to="/equipo">Equipo</NavLink>
          <li class="breadcrumb-item active" aria-current="page">Ericka</li>
        </ol>
      </nav>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6">
         <img src={ErikaPic} className="Davidimage img-fluid mb-3" alt="primero"/>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <h1>
              <center>Ericka Grijalba Paredes</center>
          </h1>
          <h3>
              <center>Jefe de presupuesto</center>
          </h3>
          <h5>
            Contadora Pública de la Universidad Santiago de Cali. Ha trabajado en la división de gestión administrativa y financiera de la Dian Seccional Aduanas, en la cooperativa Coopserp y en la empresa Servitractores Berbo S.A.S.
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Erika;
