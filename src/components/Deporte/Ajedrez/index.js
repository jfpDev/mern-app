import React from 'react';
import {NavLink}  from 'react-router-dom';

import '../../../styles.css';


function Ajedrez(){
  return(
    <main className="deporte container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><NavLink to="/">Inicio</NavLink></li>
          <li class="breadcrumb-item"><NavLink to="/deporte">Deporte</NavLink></li>
          <li class="breadcrumb-item active" aria-current="page">Ajedrez</li>
        </ol>
      </nav>
      <section className="deporteHorario">
        <p className="deporte_title">Horario:</p>
        <p className="deporte_content">
          Lunes, Miércoles y Viernes de 3:00 PM - 5:00 PM.
        </p>
      </section>
      <section className="deporteLugar">
        <p className="deporte_title">Lugar:</p>
        <p className="deporte_content">
          Estadio Salustio Reyes Caicedo
        </p>
      </section>
      <section className="deporteMonitores">
        <small className="text-muted">
          Monitor: <ul>
                      <li>Rubén Dario Manyoma</li>
                    </ul>
        </small>
      </section>
    </main>
  );
}

export default Ajedrez;
