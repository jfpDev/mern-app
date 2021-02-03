import React from 'react';
import {NavLink}  from 'react-router-dom';

import './../styles.css';

import MainNav   from './../MainNav';

const Eleven = () => {
  return(
    <div className="content_transparenciaStyle">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <NavLink className="breadcrumb-item" to="/">Inicio</NavLink>
          <NavLink className="breadcrumb-item" to="/transparencia">Transparencia</NavLink>
          <li class="breadcrumb-item active" aria-current="page">Instrumentos de información</li>
        </ol>
      </nav>
      <div className="row">
        <div className="col-sm-12 col-md-5 col-lg-4">
          <MainNav/>
        </div>
        <div className="col-sm-12 col-md-7 col-lg-8 transparenciaContent">
          <h1 className="mainNavTitle_transparenciaStyle">Instrumentos de gestión de información pública</h1>
          <ol type="a">
            <h3>
              <li>Información mínima requerida a publicar (Artículos 9, 10 y 11 de la Ley 1712 de 2014)</li>
              <li>Registro de activos de información</li>
              <li>Índice de información clasificada y reservada</li>
              <li>Esquema de publicación de información</li>
              <li>Programa de gestión documental</li>
              <li>Tablas de retención documental</li>
              <li>Registro de publicaciones</li>
              <li>Costos de reproducción</li>
              <li>Mecanismos para presentar quejas y reclamos en relación con omisiones o acciones del sujeto obligado</li>
              <li>Informes de peticiones, quejas, reclamos, denuncias y solicitudes de acceso a la información</li>
              <li>Inventario de archivos para eliminación</li>
              <li>Inventario documental de archivos</li>
              <li>Cuadro de clasificación documental y tablas de valoración documental</li>
            </h3>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Eleven;
