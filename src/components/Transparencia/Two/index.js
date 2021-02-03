import React from 'react';
import {NavLink}  from 'react-router-dom';

import './../styles.css';

import MainNav from './../MainNav';
import TratoDigno from './cartatratodigno.pdf';

const Two = () => {
  return(
    <div className="content_transparenciaStyle">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <NavLink className="breadcrumb-item" to="/">Inicio</NavLink>
          <NavLink className="breadcrumb-item" to="/transparencia">Transparencia</NavLink>
          <li class="breadcrumb-item active" aria-current="page">Información de interés</li>
        </ol>
      </nav>
      <div className="row">
        <div className="col-sm-12 col-md-5 col-lg-4">
          <MainNav/>
        </div>
        <div className="col-sm-12 col-md-7 col-lg-8 transparenciaContent">
          <h1 className="mainNavTitle_transparenciaStyle">Información de interés</h1>
          <ol type="A">
            <h3>
              <li><NavLink className="" to="/transparencia/datos-abiertos">Publicación de datos abiertos</NavLink></li>
            </h3>
            <h3>
              <li><NavLink className="" to="/transparencia/publicaciones">Estudios, investigaciones y otras publicaciones</NavLink></li>
            </h3>
            <h3>
              <li><NavLink className="" to="/transparencia/convocatorias">Convocatorias</NavLink></li>
            </h3>
            <h3>
              <li><NavLink className="" to="/transparencia/preguntas-respuestas">Preguntas y respuestas frecuentes</NavLink></li>
            </h3>
            <h3>
              <li><NavLink className="" to="/transparencia/glosario">Glosario</NavLink></li>
            </h3>
            <h3>
              <li><NavLink className="" to="/noticias">Noticias</NavLink></li>
            </h3>
            <h3>
              <li><NavLink className="" to="/transparencia/calendario">Calendario de actividades</NavLink></li>
            </h3>
            <h3>
              <li><NavLink className="" to="/transparencia/informacion-niñ@s">Información para niñas, niños y adolescentes</NavLink></li>
            </h3>
            <h3>
              <li><a href={TratoDigno}>Carta de trato digno a los usuarios</a></li>
            </h3>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Two;
