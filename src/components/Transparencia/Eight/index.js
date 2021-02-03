import React from 'react';
import {NavLink}  from 'react-router-dom';

import './../styles.css';

import MainNav from './../MainNav';

import planDesarrolloContrato   from './plandesarrollocontrato.pdf';
import relacionContratosRcl     from './relacioncontratosrcl.pdf';
import convenioLago             from './conveniolago.pdf';
import relacionContratoSECOP    from './relacioncontratossecop.xlsx';
import planAdquisiciones2020    from './planadquisiciones2020.pdf';
import relacionContratos2020    from './relacioncontratacion2020.xlsx';

const Eight = () => {
  return(
    <div className="content_transparenciaStyle">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <NavLink className="breadcrumb-item" to="/">Inicio</NavLink>
          <NavLink className="breadcrumb-item" to="/transparencia">Transparencia</NavLink>
          <li class="breadcrumb-item active" aria-current="page">Contratación</li>
        </ol>
      </nav>
      <div className="row">
        <div className="col-sm-12 col-md-5 col-lg-4">
          <MainNav/>
        </div>
        <div className="col-sm-12 col-md-7 col-lg-8 transparenciaContent">
          <h1 className="mainNavTitle_transparenciaStyle">Contratación</h1>
          <ol type="a">
            <h3>
              <li>Información contractual</li>
              <ul>
                <li><a href={planDesarrolloContrato}>Plan desarrollo contrato</a></li>
                <li><a href={relacionContratosRcl}>Relación contratos RCL</a></li>
                <li><a href={relacionContratos2020}>Relación de contratos 2020</a></li>
                <li><a href={convenioLago}>Convenio lago</a></li>
                <li><a href={relacionContratoSECOP}>Relación contrato SECOP</a></li>
              </ul>
              <li><a href="https://www.contratos.gov.co/consultas/inicioConsulta.do">Ejecución de contratos</a></li>
              <li>Procedimientos, lineamientos y políticas en materia de adquisición de compras</li>
              <li><a href={planAdquisiciones2020}>Plan anual de adquisiciones</a></li>
            </h3>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Eight;
