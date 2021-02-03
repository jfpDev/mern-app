import React from 'react';
import {NavLink} from 'react-router-dom';

import './styles.css';

import JeffersonPic       from '../jefferson.jpeg';


function Jefferson(){
  return(
    <div className="container davidStyle">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <NavLink className="breadcrumb-item breadcrumb_jeffersonStyle" to="/">Inicio</NavLink>
          <NavLink className="breadcrumb-item breadcrumb_jeffersonStyle" to="/equipo">Equipo</NavLink>
          <li class="breadcrumb-item active" aria-current="page">Jefferson</li>
        </ol>
      </nav>
      <h1>
          <center>Jefferson Riascos</center>
      </h1>
      <img src={JeffersonPic} className="david_imageStyle img-fluid" alt="David Mina foto imder pradera"/>
    </div>
  );
}

export default Jefferson;
