import React from 'react';
import {NavLink}  from 'react-router-dom';

import './../styles.css';

import MainNav   from './../MainNav';

const Four = () => {
  return(
    <div className="content_transparenciaStyle">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <NavLink className="breadcrumb-item" to="/">Inicio</NavLink>
          <NavLink className="breadcrumb-item" to="/transparencia">Transparencia</NavLink>
          <li class="breadcrumb-item active" aria-current="page">Normatividad</li>
        </ol>
      </nav>
      <div className="row">
        <div className="col-sm-12 col-md-5 col-lg-4">
          <MainNav/>
        </div>
        <div className="col-sm-12 col-md-7 col-lg-8 transparenciaContent">
          <h1 className="mainNavTitle_transparenciaStyle">Normatividad</h1>
          <ol type="a">
            <h3><li><NavLink className="" to="/transparencia/consulta-normatividad">Consulta de la Normatividad relacionada con la entidad (en relatoría)</NavLink></li>
            <ul>
              <li>Decreto Único Reglamentario Sectorial: Decreto 262 de 2000 (PDF)</li>
              <li><NavLink className="" to="/">Decretos de estructura, salarios, leyes marco y otros.</NavLink></li>
              <li><NavLink className="" to="/">Listado General de Normativa relacionada con la Entidad</NavLink></li>
              <li><NavLink className="" to="/">Procuraduría en el Sistema Únio de Información Normativa, SUIN</NavLink></li>
              <li><NavLink className="" to="/">Conceptos del Procurador a a la Corte Constitucional</NavLink></li>
              <li><NavLink className="" to="/">Consultas, fallos y demás providencias de la Procuraduría</NavLink></li>
              <li><NavLink className="" to="/">Guía disciplinaria</NavLink></li>
              <li><NavLink className="" to="/">Documentos de interés</NavLink></li>
            </ul>
            </h3>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Four;
