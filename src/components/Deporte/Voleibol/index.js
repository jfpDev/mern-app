import React from 'react';
import {NavLink}  from 'react-router-dom';

import '../../../styles.css';


function Voleibol(){
  return(
    <main className="deporte container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><NavLink to="/">Inicio</NavLink></li>
          <li class="breadcrumb-item"><NavLink to="/deporte">Deporte</NavLink></li>
          <li class="breadcrumb-item active" aria-current="page">Voleibol</li>
        </ol>
      </nav>
      <section className="deporteHorario">
        <p className="deporte_title">Horario:</p>
        <p className="deporte_content">
          Lunes, Miércoles y Viernes de 4:00 PM - 6:00 PM.
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
          Monitor: <ul>
                      <li>Sebastián Torres</li>
                    </ul>
        </small>
      </section>
    </main>
  );
}

export default Voleibol;
