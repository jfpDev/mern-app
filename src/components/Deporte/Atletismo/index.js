import React from 'react';
import {NavLink}  from 'react-router-dom';

import '../../../styles.css';


function Atletismo(){
  return(
    <main className="deporte container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><NavLink to="/">Inicio</NavLink></li>
          <li class="breadcrumb-item"><NavLink to="/deporte">Deporte</NavLink></li>
          <li class="breadcrumb-item active" aria-current="page">Atletismo</li>
        </ol>
      </nav>
      <section className="deporteHorario">
        <p className="deporte_title">Horario:</p>
        <p className="deporte_content">
          Lunes a Viernes de 9:00 AM - 12:00 M y de 3:00 PM - 6:00 PM
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
          Monitores: <ul>
                      <li>Yolanda Beltrán</li>
                      <li>Luis Beltrán</li>
                      <li>Mabel Chacón</li>
                    </ul>
        </small>
      </section>
    </main>
  );
}

export default Atletismo;
