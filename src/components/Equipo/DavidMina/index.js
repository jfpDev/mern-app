import React from 'react';
import {NavLink} from 'react-router-dom';
import './styles.css';

import DavidOrlandoMina from '../davidorlandomina.jpg';


function DavidMina(){
  return(
    <div className="container davidStyle">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <NavLink className="breadcrumb-item breadcrumb_davidStyle" to="/">Inicio</NavLink>
          <NavLink className="breadcrumb-item breadcrumb_davidStyle" to="/equipo">Equipo</NavLink>
          <li class="breadcrumb-item active" aria-current="page">Director</li>
        </ol>
      </nav>
      <h1>
          <center>David Orlando Mina Velasquez</center>
      </h1>
      <h3>
          <center>Director IMDER Pradera</center>
      </h3>
      <div className="justifyStyle">
        <img src={DavidOrlandoMina} className="david_imageStyle img-fluid" alt="David Mina foto imder pradera"/>
        <br/>
        <br/>
        <p>
          Nacido en el 	Municipio de Pradera, es abogado de la Universidad Libre de Cali con especialización en derecho administrativo de la Universidad Pontificia Bolivariana de Medellin y un curso superior en derechos humanos de la Universidad Rey Juan Carlos de Madrid – España.
        </p>
        <p>
          En el año 2013 comienza su carrera profesional como abogado defensor en la secretaria jurídica del Municipio de Palmira en la administración del doctor Ritter López Peña; posteriormente en la administración del doctor Jairo Ortega Samboní pasa a la secretaría de hacienda municipal de Palmira como coordinador del cobro coactivo del impuesto de industria y comercio.
        </p>
        <p className="justify-content-between">
          En el año 2017 se une a la administración del doctor Henry Devia Prado en el municipio de Pradera tomando el cargo de Asesor de Despacho dentro del contexto nacional de la firma del Acuerdo Final de Paz entre el Gobierno y las FARC – EP; asume la tarea de articular la etapa inicial de la implementación del Acuerdo en el municipio con entidades del orden nacional, resaltando la coordinación del equipo de relatores de la Alcaldía que hicieron parte de las mesas de trabajo de las pre asambleas comunitarias para la construcción de los PDET junto con la Agencia de Renovación del Territorio en la zona rural del municipio, logro que se incluyera en el COMPOS a la mesa municipal de victimas en cumplimiento de la ley de víctimas y el Acuerdo Final de Paz.
        </p>
        <p>
          Reactivó y actualizó el Consejo Territorial de Paz, Reconciliación y Convivencia del Municipio ampliándolo tal y como quedó estipulado en el Acuerdo Final de Paz tramitado ante el honorable Concejo Municipal el proyecto para tal fin que fue aprobado y sancionado, entre otras muchas articulaciones como la reincorporación, desminado humanitario, socialización de los beneficios ZOMAC, etc.
        </p>
        <p>
          Ahora en la administración del doctor Justino Sinisterra con 28 años de edad asume como Director Ejecutivo del Instituto Municipal del Deporte y la Recreación del Municipio de Pradera.
        </p>
        <p>
        En la parte cívica fue miembro de la plataforma de juventudes de Pradera siendo vicepresidente por los años 2015, 2016 y 2017 participando de sus actividades como organizar las semanas de juventud como espacio de integración juvenil para los adolescentes tanto pradereños como de otros municipios.
        </p>
        <br/>
        <h3>
          <center>Amante del Deporte y el Fútbol</center>
        </h3>
        <br/>
        <br/>
        <p>
          Desde muy temprana edad practica de manera aficionada el fútbol, pasando por varias escuelas de formación como la del profesor Willignton y la de Jaime Gallardo más conocido como Merengue, siempre en la posición de portero. Hoy hace parte del equipo aficionado Casa Navarra Futbol Club, también practica el ciclo montañismo que le ha permitido conocer la bella zona rural del Municipio de Pradera, por tal razón ha manifestado en su etapa profesional su interés de masificar el deporte comunitario y aficionado, sin descuidar el competitivo donde el Municipio de Pradera ha llegado muy alto con sus atletas y futbolistas, para que más habitantes practiquen deportes, conocer nuevos talentos y Pradera sea más saludable.
        </p>
        <p>
          Hincha confeso del América de Cali, disfruta como espectador del fútbol profesional colombiano.
        </p>
        <br/>
      </div>
    </div>
  );
}

export default DavidMina;
