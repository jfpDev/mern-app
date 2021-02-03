import React from 'react';
import {NavLink}  from 'react-router-dom';

import './../styles.css';

import programaPrimeraInfancia from './programaprimerainfancia.pdf';
import InformeEnpalme  from './informeEnpalme.pdf';
import programaEscuelasFormacion from './programaescuelasformacion.pdf';
import programaAdultoMayor       from './programaadultomayor.pdf';
import planAccion                from './planaccion.xlsx';
import planDesarrollo            from './plandesarrollo.pdf';
import Proyectos                 from './proyectos.pdf';
import gestionProgramasFormacion from './gestionprogramasformacion.pdf';
import POAI                      from './poai.xlsx';
import planAnticorrupcion        from './plananticorrupcion.xlsx';
import planAnualAuditorias       from './plananualauditorias.xlsx';

import MainNav from './../MainNav';

const Six = () => {
  return(
    <div className="content_transparenciaStyle">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <NavLink className="breadcrumb-item" to="/">Inicio</NavLink>
          <NavLink className="breadcrumb-item" to="/transparencia">Transparencia</NavLink>
          <li class="breadcrumb-item active" aria-current="page">Planeación</li>
        </ol>
      </nav>
      <div className="row">
        <div className="col-sm-12 col-md-5 col-lg-4">
          <MainNav/>
        </div>
        <div className="col-sm-12 col-md-7 col-lg-8 transparenciaContent">
          <h1 className="mainNavTitle_transparenciaStyle">Planeación</h1>
          <ol type="a">
            <h3>
              <li>Políticas, lineamientos y manuales</li>
              <ul>
                <li><a href={planAnticorrupcion}>Plan anticorrupción y de atención al ciudadano</a></li>
                <li><a href={planAnualAuditorias}>Plan anual de auditorías</a></li>
              </ul>
              <li><a href={planAccion}>Plan de acción</a></li>
              <li><a href={planDesarrollo}>Plan de desarrollo</a></li>
              <li><a href={POAI}>POAI</a></li>
              <li><NavLink className="" to="/">Programas y proyectos en ejecución</NavLink></li>
              <ul>
                <li><a href={programaEscuelasFormacion}>Programa escuelas de formación</a></li>
                <li><a href={programaPrimeraInfancia}>Programa de primera infancia</a></li>
                <li><a href={programaAdultoMayor}>Programa de adulto mayor</a></li>
                <li><a href={Proyectos}>Proyectos</a></li>
                <li><a href={gestionProgramasFormacion}>Gestión de programas de formación técnica</a></li>
              </ul>
            <li>Metas, objetivos e indicadores de gestión y/o desempeño</li>
            <li>Participación en la formulación de políticas</li>
            <li><a href={InformeEnpalme}>Informe de empalme</a></li>
          </h3>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Six;
