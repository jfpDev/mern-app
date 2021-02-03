import React from 'react';
import {NavLink}  from 'react-router-dom';

import '../../styles.css';

import FutsalIzquierdo      from './futsalIzquierdo.jpg';
import Transparencia        from './transparencia.jpeg';

function Home(){
  return(
    <main className="home">
      <section className="homeTitle">
        {/*<div className="wedidit_homeStyle">
          <p>¡Lo hemos hecho!</p>
          <p>IMDER Pradera ha sido referente regional por su compromiso e innovación durante la pandemia.</p>
        </div>*/}
        <h1 className="homeTitle">Instituto Municipal para la Recreación y el Deporte</h1>
      </section>
      <section className="homeActivities">
        <figure>
          <img className="homeActivities_img" src={FutsalIzquierdo} alt="Futbol de salon izquierdo" />
        </figure>
        <figcaption><NavLink to="/deporte">Mira aquí nuestros deportes ofertados</NavLink></figcaption>
      </section>
      <div className="Div">
        <hr/>
      </div>
      <div className="Div">
        <hr/>
      </div>
      <section className="homeTransparencia">
        <div className="homeTransparencia_title">
          <p>Nuestra sección de transparencias ha cambiado, <NavLink to="/transparencia">entra aquí para ver nuestro sitio.</NavLink></p>
          <img src={Transparencia} alt="transparencia img" />
        </div>
      </section>
      <section className="homeEnlaces">
        <div className="homeEnlace_paginas"></div>
        <div className="homeEnlace_paginas"></div>
        <div className="homeEnlace_paginas"></div>
      </section>
    </main>
  );
}


export default Home;
