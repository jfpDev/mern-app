import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles.css';

import DavidMina       from './davidorlandomina.jpg';
import Leonardo        from './leonardo.jpeg';
import Ana             from './ana.jpeg';
import Pilar           from './pilar.jpeg';
import Fernando        from './fernando.jpeg';
import Ericka           from './erika.jpeg';
import JohnJairo       from './johnjairo.png';
import Julio           from './julio.jpeg';
import Diego           from './diego.jpeg';
import Jefferson       from './jefferson.jpeg';
import JFelipePava     from './jfelipepava.jpeg';
import CarlosJulio     from './carlosjulio.jpeg';

function Equipo(){
  return(
    <main className="container equipo">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li className="breadcrumb-item active" aria-current="page">Equipo</li>
        </ol>
      </nav>
      <section className="equipoTitle">
        <p>Nuestro equipo de trabajo</p>
      </section>
      <div className="Div">
        <hr/>
      </div>
      <section className="row">
        <div className="col-sm-12 col-md-12 col-lg-12 equipoDavid">
          <img src={DavidMina} className="equipoDavid_img" alt="Director IMDER"/>
          <NavLink className="equipoDavid_pie" to="/equipo/davidmina">Conozca a nuestro Director</NavLink>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 equipoPerson">
          <img src={Leonardo} className="equipoImg" alt="Leonardo"/>
          <NavLink className="equipoPie" to="/equipo/leonardo">
            Leonardo
          </NavLink>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 equipoPerson">
          <img src={Ana} className="equipoImg" alt="Ana"/>
          <NavLink className="equipoPie" to="/equipo/ana">
            Ana
          </NavLink>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 equipoPerson">
          <img src={Pilar} className="equipoImg" alt="Pilar"/>
          <NavLink className="equipoPie" to="/equipo/pilar">
            Pilar
          </NavLink>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 equipoPerson">
          <img src={Fernando} className="equipoImg" alt="Fernando"/>
          <NavLink className="equipoPie" to="/equipo/fernando">
            Fernando
          </NavLink>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 equipoPerson">
          <img src={Ericka} className="equipoImg" alt="Ericka"/>
          <NavLink className="equipoPie" to="/equipo/ericka">
            Ericka
          </NavLink>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 equipoPerson">
          <img src={JohnJairo} className="equipoImg" alt="JohnJairo"/>
          <NavLink className="equipoPie" to="/equipo/johnjairo">
            John Jairo
          </NavLink>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 equipoPerson">
          <img src={Julio} className="equipoImg" alt="Julio"/>
          <NavLink className="equipoPie" to="/equipo/julio">
            Julio
          </NavLink>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 equipoPerson">
          <img src={Diego} className="equipoImg" alt="Diego"/>
          <NavLink className="equipoPie" to="/equipo/diego">
            Diego
          </NavLink>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 equipoPerson">
          <img src={Jefferson} className="equipoImg" alt="Jefferson"/>
          <NavLink className="equipoPie" to="/equipo/jefferson">
            Jefferson
          </NavLink>
        </div>
        <div className="container col-sm-12 col-md-6 col-lg-6 equipoPerson">
          <img src={CarlosJulio} className="equipoImg" alt="CarlosJulio"/>
          <NavLink className="equipoPie" to="/equipo/carlosjulio">
            Carlos Julio
          </NavLink>
        </div>
        <div className="container col-sm-12 col-md-6 col-lg-6 equipoPerson">
          <img src={JFelipePava} className="equipoImg" alt="JFelipePava"/>
          <NavLink className="equipoPie" to="/equipo/juanfelipe">
            Juan Felipe
          </NavLink>
        </div>
      </section>
    </main>
  );
}

export default Equipo;
