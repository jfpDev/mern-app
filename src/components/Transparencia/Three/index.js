import React from 'react';
import {NavLink}   from 'react-router-dom';

import './../styles.css';

import MainNav from './../MainNav';

import MisionVision  from './misionyvision.pdf';
import FuncionesDeberes from './funcionesempleadosimder.pdf';

const Three = () => {
  return(
    <div className="content_transparenciaStyle">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <NavLink className="breadcrumb-item" to="/">Inicio</NavLink>
          <NavLink className="breadcrumb-item" to="/transparencia">Transparencia</NavLink>
          <li class="breadcrumb-item active" aria-current="page">Estructura orgánica</li>
        </ol>
      </nav>
      <div className="row">
        <div className="col-sm-12 col-md-5 col-lg-4">
          <MainNav/>
        </div>
        <div className="col-sm-12 col-md-7 col-lg-8 transparenciaContent">
          <h1 className="mainNavTitle_transparenciaStyle">Estructura orgánica y de talento humano</h1>
          <ol type="a">
            <h3>
              <li><a href={MisionVision}>Misión y visión</a></li>
            </h3>
            <h3>
              <li><a href={FuncionesDeberes}>Funciones y deberes</a></li>
            </h3>
            <h3>
              <li>Procesos y procedimientos</li>
            </h3>
            <h3>
              <li><a href={FuncionesDeberes}>Organigrama</a></li>
            </h3>
            <h3>
              <li><NavLink className="" to="/equipo">Directorio de información de servidores públicos, empleados y contratistas</NavLink></li>
            </h3>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Three;
