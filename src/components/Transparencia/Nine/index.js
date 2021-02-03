import React from 'react';
import {NavLink} from 'react-router-dom';

import './../styles.css';

import MainNav from './../MainNav';

import actaCompromisoDeportivo   from './actacompromisodeportivo.xls';
import ejemploCreacionComiteEjecutivoClubDeportivo   from './ejemplocreacioncomiteejecutivoclubdeportivo.pdf';
import ejemploEstatutoRegimenPresidencial from './ejemploestatutoregimenpresidencial.pdf';
import instructivoCreacionClubDeportivo   from './instructivocreacionclubdeportivo.pdf';
import reconocimientoDeportivo            from './reconocimientodeportivo.pdf';
import registroDignatariosyAceptaciondeCargos  from './registrodignatariosyaceptaciondecargos.xlsx';
import Resolucion000231                        from './resolucion000231.pdf';

const Nine = () => {
  return(
    <div className="content_transparenciaStyle">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <NavLink className="breadcrumb-item" to="/">Inicio</NavLink>
          <NavLink className="breadcrumb-item" to="/transparencia">Transparencia</NavLink>
          <li class="breadcrumb-item active" aria-current="page">Trámites</li>
        </ol>
      </nav>
      <div className="row">
        <div className="col-sm-12 col-md-5 col-lg-4">
          <MainNav/>
        </div>
        <div className="col-sm-12 col-md-7 col-lg-8 transparenciaContent">
          <h1 className="mainNavTitle_transparenciaStyle">Trámites y servicios</h1>
          <ol type="a">
            <h3>
              <li>Trámites</li>
              <li>Servicios a la ciudadanía</li>
                <ul>
                  <li><a href={reconocimientoDeportivo}>Reconocimiento deportivo a clubes deportivos</a></li>
                  <li><a href={actaCompromisoDeportivo}>Acta compromiso deportivo</a></li>
                  <li><a href={ejemploCreacionComiteEjecutivoClubDeportivo}>Ejemplo creación del comité ejecutivo para club deportivo</a></li>
                  <li><a href={ejemploEstatutoRegimenPresidencial}>Ejemplo estatuto régimen presidencial</a></li>
                  <li><a href={instructivoCreacionClubDeportivo}>Instructivo creación club deportivo</a></li>
                  <li><a href={registroDignatariosyAceptaciondeCargos}>Registro dignatarios y aceptación de cargos</a></li>
                  <li><a href={Resolucion000231}>Resolución 000231</a></li>
                </ul>
            </h3>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Nine;
