import React from 'react';
import {NavLink}  from 'react-router-dom';

import '../../../styles.css';


function FutbolSM(){
  return(
    <main className="deporte container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><NavLink to="/">Inicio</NavLink></li>
          <li class="breadcrumb-item"><NavLink to="/deporte">Deporte</NavLink></li>
          <li class="breadcrumb-item active" aria-current="page">Fútbol sala</li>
        </ol>
      </nav>
      <section className="deporteHorario">
        <p className="deporte_title">Horario:</p>
        <p className="deporte_content">
          Martes, Jueves y Viernes de 2:00 a 4:00 PM en el Coliseo Bello Horizonte y Miércoles de 2:00 a 4:00 PM en el lago.
        </p>
      </section>
      <section className="deporteLugar">
        <p className="deporte_title">Lugar:</p>
        <p className="deporte_content">
          Coliseo del Bello Horizonte
        </p>
      </section>
      <section className="deporteMonitores">
        <small className="text-muted">
          Monitores <ul>
                      <li>Alberto Izquierdo</li>
                    </ul>
        </small>
      </section>
    </main>
  );
}

export default FutbolSM;
