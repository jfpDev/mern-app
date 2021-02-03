import React from 'react';
import {NavLink} from 'react-router-dom';

import './../styles.css';

import MainNav from './../MainNav';

import informeCienDias   from './informeciendias.pdf';
import avancePlanMejoramiento from './avanceplanmejoramiento.xlsx';
import suscripcionMejoramiento  from './suscripcionmejoramientorevisiondelacuenta2017.xlsx';
import datosEstadisticos        from './datosestadisticos.pdf';
import evaluacionInterno2019    from './evaluacioninternocontable2019.pdf';
import informeSoftware2019      from './informesoftware2019.pdf';
import resultadosFurag2019      from './resultadosfurag2019.pdf';
import informePormenorizado2020 from './informepormenorizadonovmarz2020.xlsx';
import informeSemestral2020     from './informesemestralcienerojunio2020.xlsx';
import InformeAuditoriaPS2020   from './informeauditoriaprimersemestre2020.pdf';

const Seven = () => {
  return(
    <div className="content_transparenciaStyle">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <NavLink className="breadcrumb-item" to="/">Inicio</NavLink>
          <NavLink className="breadcrumb-item" to="/transparencia">Transparencia</NavLink>
          <li class="breadcrumb-item active" aria-current="page">Control</li>
        </ol>
      </nav>
      <div className="row">
        <div className="col-sm-12 col-md-5 col-lg-4">
          <MainNav/>
        </div>
        <div className="col-sm-12 col-md-7 col-lg-8 transparenciaContent">
          <h1 className="mainNavTitle_transparenciaStyle">Control</h1>
          <ol type="a">
            <h3>
              <li>Informe de Gestión y Auditoría</li>
              <ul>
                <li><a href={InformeAuditoriaPS2020}>Informe de auditoría primer semestre 2020</a></li>
                <li><a href={informeCienDias}>Informe primeros 100 días</a></li>
                <li><a href={datosEstadisticos}>Informes de datos estadísticos</a></li>
              </ul>
              <li>Reportes de Control Interno</li>
              <ul>
                <li><a href={evaluacionInterno2019}>Evaluación control interno contable 2019</a></li>
                <li><a href={informeSoftware2019}>Informe de software IMDER 2019</a></li>
                <li><a href={resultadosFurag2019}>Resultados FURAG 2019</a></li>
                <li><a href={informePormenorizado2020}>Informe pormenorizado noviembre-marzo del 2020</a></li>
                <li><a href={informeSemestral2020}>Informe semestral enero-junio del 2020</a></li>
              </ul>
              <li>Planes de mejoramiento</li>
              <ul>
                <li><a href={avancePlanMejoramiento}>Avance plan de mejoramiento</a></li>
                <li><a href={suscripcionMejoramiento}>Suscripción mejoramiento suscripción de la cuenta 2017</a></li>
              </ul>
              <li>Entes de control que vigilan a la entidad y mecanismos de supervisión</li>
              <li>Información para población vulnerable</li>
              <li>Defensa judicial</li>
            </h3>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Seven;
