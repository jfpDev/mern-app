import React from 'react';
import {NavLink}  from 'react-router-dom';

import './../styles.css';

import MainNav from './../MainNav';
import OneB from './OneB';

const One = () => {
  return(
    <div className="content_transparenciaStyle">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <NavLink className="breadcrumb-item" to="/">Inicio</NavLink>
          <NavLink className="breadcrumb-item" to="/transparencia">Transparencia</NavLink>
          <li class="breadcrumb-item active" aria-current="page">Mecanismos de contacto</li>
        </ol>
      </nav>
      <div className="row">
        <div className="col-sm-12 col-md-5 col-lg-4">
          <MainNav/>
        </div>
        <div className="col-sm-12 col-md-7 col-lg-8 transparenciaContent">
          <h1 className="mainNavTitle_transparenciaStyle">Mecanismos de contacto con el sujeto obligado</h1>
          <ol type="A">
            <h3>
              <li>Sección particular</li>
            </h3>
            <h4>Estimado ciudadano: El Instituto del Deporte y la Recreación IMDER ha destinado este botón de transparencia para facilitar el acceso a la información de interés público que genera la Entidad. Lo invitamos a conocer su contenido.</h4>
            <h3><li>Mecanismos para la atención al ciudadano
              <OneB/>
            </li></h3>
            <h3>
              <li><NavLink className="" to="/atencion">Localización física, sucursales o regionales, horarios y días de atención al público.</NavLink></li>
            </h3>
            <h3><li>Correo electrónico para notificaciones judiciales: </li></h3>
            <h3><li>Políticas de seguridad de la información del sitio web y protección de datos personales</li></h3>
            <ul>
              <h4>
                <li><a href="https://www.procuraduria.gov.co/portal/media/file/190124_politica_proteccion_datos_pgn.pdf">Resolución 670 de 2017 - </a>Políticas y procedimientos para la protección de datos personales.</li>
              </h4>
              <h4>
                <li><a href="https://www.procuraduria.gov.co/portal/media/file/modulo_calidad/230_resolucion302-05.pdf">Resolución 302 de 2005 - </a>Políticas de uso de los equipos de cómputo de la Procuraduría General de la Nación y los servicios institucionales de Correo Electrónico e Internet, el manejo, instalación y desinstalación de software y la conservación y cuidado de la información afectada al funcionamiento de la Entidad.</li>
              </h4>
            </ul>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default One;
