import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

import '../../styles.css';

import MainNav from './MainNav';


import Acuerdo009         from './acuerdo009.pdf';
import FuncionesEmpleados from './funcionesEmpleados.pdf';
import PlanAdquisiciones  from './plan-adquisiciones-imder-2020.pdf';
import InformeSoftware    from './informeSoftware.pdf';
import PlanAuditorias     from './planAuditorias2020.pdf';

class Transparencia extends Component{

  render(){
    return(
      <main className="transparencia">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <NavLink to="/">Inicio</NavLink>
            </li>
            <li className="breadcrumb-item active" aria-current="page">Transparencia</li>
          </ol>
        </nav>
        <section className="transparenciaMain">
          <div className="transparenciaMenu">
            <MainNav/>
          </div>
          <div className="transparenciaContent">
            <div className="acuerdo009Style">
              <h3><center>Acuerdo 009 de 2001</center></h3>
              <h5>Por medio del cual se modifica el ente municipal para el deporte, la recreación, el aprovechamiento del tiempo libre y la educación extraescolar de Pradera Valle, se deroga el acuerdo 002 de marzo de 1998 y se dictan otras disposiciones.</h5>
              <br/>
              <p className="moreinfo_transparenciaStyle">Para ver el documento completo haga click <a href={Acuerdo009}>aquí</a></p>
            </div>
            <div className="acuerdo009Style">
              <h3><center>Resolución No. 500-23-02-04-003-2018 de Enero 15 /2018</center></h3>
              <h5>Por el cual se adopta y establece el Manual Específico de Funciones y de Competencias
      Laborales de los empleos de la Planta de Personal del IMDERPRADERA.</h5>
              <br/>
              <p className="moreinfo_transparenciaStyle">Para ver el documento completo haga click <a href={FuncionesEmpleados}>aquí</a></p>
            </div>
            <div className="acuerdo009Style">
              <h3><center>Plan de adquisiciones IMDER</center></h3>
              <h5>El principal objetivo del Plan Anual de Aquisiciones es permitir que la entidad estatal aumente la probabilidad de lograr mej ores condiciones de competencia...</h5>
              <br/>
              <p className="moreinfo_transparenciaStyle">Para ver el documento completo haga click <a href={PlanAdquisiciones}>aquí</a></p>
            </div>
            <div className="acuerdo009Style">
              <h3><center>Informe de software instalado en equipos del IMDER</center></h3>
              <h5>Informe del software instalado en los equipos del Instituto del deporte y recreación IMDER.</h5>
              <br/>
              <p className="moreinfo_transparenciaStyle">Para ver el documento completo haga click <a href={InformeSoftware}>aquí</a></p>
            </div>
            <div className="acuerdo009Style">
              <h3><center>Plan anual de auditorías 2020</center></h3>
              <h5>El cronograma previsto abarca desde la notificación del inicio de la auditoria hasta la entrega del informe y suscripción del plan
      de mejoramiento por parte del funcionario responsable de cada proceso.</h5>
              <br/>
              <p className="moreinfo_transparenciaStyle">Para ver el documento completo haga click <a href={PlanAuditorias}>aquí</a></p>
            </div>
          </div>
        </section>
      </main>
    );
  }
}


export default Transparencia;
