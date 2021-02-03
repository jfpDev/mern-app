import React from 'react';
import {NavLink}  from 'react-router-dom';

import './../styles.css';

import MainNav from './../MainNav';

import Adiciones2020  from './adiciones2020.pdf';
import EjecucionPresupuestal2020  from './ejecucionpresupuestal2020.pdf';
import Traslados2020              from './traslados2020.pdf';
import Presupuesto2020            from './actoaprobacionpresupuesto.pdf';

const Five = () => {
  return(
    <div className="content_transparenciaStyle">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <NavLink className="breadcrumb-item" to="/">Inicio</NavLink>
          <NavLink className="breadcrumb-item" to="/transparencia">Transparencia</NavLink>
          <li class="breadcrumb-item active" aria-current="page">Presupuesto</li>
        </ol>
      </nav>
      <div className="row">
          <div className="col-sm-12 col-md-5 col-lg-4">
            <MainNav/>
          </div>
        <div className="col-sm-12 col-md-7 col-lg-8 transparenciaContent">
          <h1 className="mainNavTitle_transparenciaStyle">Presupuesto</h1>
          <ol type="a">
            <h3>
              <li>Presupuesto general asignado para cada año fiscal</li>
              <ul>
                <li><a href={Presupuesto2020}>Presupuesto aprobado 2020</a></li>
              </ul>
              <li>Ejecución presupuestal histórica anual</li>
              <ul>
                <li><a href={Adiciones2020}>Adiciones presupuestales 2020</a></li>
                <li><a href={EjecucionPresupuestal2020}>Ejecuciones Presupuestales 2020</a></li>
                <li><a href={Traslados2020}>Traslados presupuestales 2020</a></li>
              </ul>
              <li><NavLink className="" to="/transparencia/estados-financieros">Estados financieros</NavLink></li>
            </h3>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Five;
