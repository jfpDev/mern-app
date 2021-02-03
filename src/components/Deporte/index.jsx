import React from 'react';
import {NavLink}  from 'react-router-dom';

import '../../styles.css';

import Atletismo        from './atletismo.jpg';
import FutbolM          from './futbolm.jpg';
import FutbolF          from './futbolf.jpeg';
import FutbolS         from '../Home/futsalIzquierdo.jpg';
import Natacion         from './natacion.jpg';
import Voleibol         from '../Home/voleibolFemenino.jpeg';
import Patinaje         from './patinaje.jpg';
import Baloncesto       from './baloncestom.jpg';
import Ajedrez          from './ajedrez.jpg';
import Pesas            from './pesas.jpg';
import Hapkido          from './hapkido.jpg';
import Balonmano        from './balonmano.jpg';
import Boxeo            from './boxeo.jpg';
import DeporteAdaptado  from './deporteadaptado.jpg';


function Deporte(){
  return(
    <div className="container deporte">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><NavLink to="/">Inicio</NavLink></li>
          <li class="breadcrumb-item active" aria-current="page">Deporte</li>
        </ol>
      </nav>
      <div className="deporteTitle">
        <p>Esta es nuestra oferta en deporte</p>
      </div>
      <div className="Div">
        <hr/>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-4 deporteAbierto">
          <NavLink to="/deporte/atletismo">
            <div className="card">
              <img src={Atletismo} className="card-img-top" alt="Oferta Atletismo"/>
              <div className="card-body">
                <h5 className="card-title">Atletismo</h5>
              </div>
             </div>
          </NavLink>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 deporteAbierto">
            <NavLink to="/deporte/futsal">
              <div className="card">
                <img src={FutbolS} className="card-img-top" alt="Oferta Fútbol Sala Masculino"/>
                <div className="card-body">
                  <h5 className="card-title">Fútbol Sala</h5>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 deporteAbierto">
            <div className="card">
              <img src={Patinaje} className="card-img-top" alt="Oferta Patinaje"/>
              <div className="card-body">
                <h5 className="card-title">Patinaje</h5>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 deporteAbierto">
            <NavLink to="/deporte/voleibol">
              <div className="card">
                <img src={Voleibol} className="card-img-top" alt="Oferta Voleibol"/>
                <div className="card-body">
                  <h5 className="card-title">Voleibol</h5>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 deporteAbierto">
            <NavLink to="/deporte/baloncesto">
              <div className="card">
                <img src={Baloncesto} className="card-img-top" alt="Oferta Baloncesto Masculino"/>
                <div className="card-body">
                  <h5 className="card-title">Baloncesto</h5>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 deporteAbierto">
            <NavLink to="/deporte/ajedrez">
              <div className="card">
                <img src={Ajedrez} className="card-img-top" alt="Oferta Ajedrez"/>
                <div className="card-body">
                  <h5 className="card-title">Ajedrez</h5>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 deporteAbierto">
            <div className="card">
              <img src={Pesas} className="card-img-top" alt="Oferta Pesas"/>
              <div className="card-body">
                <h5 className="card-title">Pesas</h5>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 deporteAbierto">
            <div className="card">
              <img src={Hapkido} className="card-img-top" alt="Oferta Hapkido"/>
              <div className="card-body">
                <h5 className="card-title">Hapkido</h5>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 deporteAbierto">
            <div className="card">
              <img src={Boxeo} className="card-img-top" alt="Oferta Boxeo"/>
              <div className="card-body">
                <h5 className="card-title">Boxeo</h5>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 deporteCerrado">
            <div className="card">
              <img src={Balonmano} className="card-img-top" alt="Oferta Balonmano"/>
              <div className="card-body">
                <h5 className="card-title">Balonmano</h5>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 deporteCerrado">
            <div className="card">
              <img src={Natacion} className="card-img-top" alt="Oferta Natación"/>
              <div className="card-body">
                <h5 className="card-title">Natación</h5>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 deporteCerrado">
            <div className="card">
              <img src={DeporteAdaptado} className="card-img-top" alt="Deporte Adaptado"/>
              <div className="card-body">
                <h5 className="card-title">Deporte Adaptado</h5>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 deporteCerrado">
            <div className="card">
              <img src={FutbolM} className="card-img-top" alt="Oferta Fútbol Masculino"/>
              <div className="card-body">
                <h5 className="card-title">Fútbol Masculino</h5>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 deporteCerrado">
            <div className="card">
              <img src={FutbolF} className="card-img-top" alt="Oferta Fútbol Femenino"/>
              <div className="card-body">
                <h5 className="card-title">Fútbol Femenino</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Deporte;
