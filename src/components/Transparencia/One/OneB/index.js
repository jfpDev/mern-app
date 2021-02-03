import React from 'react';
import {NavLink}   from 'react-router-dom';

import './../../styles.css';


const OneB = () => {
  return(
    <div className="">
      <ul type="">
        <h4><li><NavLink className="" to="/atencion">Los espacios físicos destinados para el contacto con el sujeto obligado</NavLink></li></h4>
        <h4><li><NavLink className="" to="/atencion">Los teléfonos fijos y móviles, líneas gratuitas y fax, incluyendo el indicativo nacional e internacional</NavLink></li></h4>
        <h4><li><NavLink className="" to="/atencion">Correo electrónico institucional</NavLink></li></h4>
        <h4><li><NavLink className="" to="/atencion">Correo físico o postal</NavLink></li></h4>
        <h4><li><NavLink className="" to="/">Link al formulario electrónico de solicitudes, peticiones, quejas, reclamos y denuncias</NavLink></li></h4>
        <h4><li><NavLink className="" to="/">Link al formulario electrónico de solicitudes, peticiones, quejas, reclamos y denuncias</NavLink></li></h4>
        <h4><li><NavLink className="" to="/atencion">Localización física, sucursales o regionales, horarios y días de atención al público</NavLink></li></h4>
        <h4><li><NavLink className="" to="/">Correo electrónico para notificaciones judiciales: </NavLink></li></h4>
        <h4><li><NavLink className="" to="/">Políticas de seguridad de la información del sitio web y protección de datos personales</NavLink></li></h4>
      </ul>
    </div>
  );
}

export default OneB;
