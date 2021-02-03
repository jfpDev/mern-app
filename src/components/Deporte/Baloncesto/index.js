import React from 'react';
import {NavLink}  from 'react-router-dom';

import '../../../styles.css';


function Baloncesto(){
  return(
    <main className="deporte container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><NavLink to="/">Inicio</NavLink></li>
          <li class="breadcrumb-item"><NavLink to="/deporte">Deporte</NavLink></li>
          <li class="breadcrumb-item active" aria-current="page">Baloncesto</li>
        </ol>
      </nav>
      <section className="deporteHorario">
        <div className="deporteHorario_men">
          <p className="deporte_title">Horario Hombres:</p>
          <p className="deporte_content">
            Lunes, Miércoles y viernes de 6:00 PM - 8:00 PM.
          </p>
        </div>
        <div className="Div">
          <hr/>
        </div>
        <div className="deporteHorario_women">
          <p className="deporte_title">Horario Mujeres:</p>
          <p className="deporte_content">
            Martes y Jueves de 4:00 PM - 6:00 PM.
          </p>
        </div>
      </section>
      <section className="deporteLugar">
        <p className="deporte_title">Lugar:</p>
        <p className="deporte_content">
          Coliseo del BelloHorizonte
        </p>
      </section>
      <section className="deporteMonitores">
        <small className="text-muted">
          Monitora: <ul>
                      <li>Martha Godoy</li>
                    </ul>
        </small>
      </section>
    </main>
  );
}

export default Baloncesto;
