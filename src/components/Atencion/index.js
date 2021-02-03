import React from 'react';
import './styles.css';

import AtencionUsuario        from './atencion.jpg';

function Atencion(){
  return(
    <div className="container atencionStyle">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">Inicio</a></li>
          <li class="breadcrumb-item active" aria-current="page">Atención al cliente</li>
        </ol>
      </nav>
          <br/>
          <br/>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12 info_atencionStyle">
          <h4>Estamos en la Calle 4 # 8-32</h4>
          <br/>
          <h6>Llámanos al 267 2435</h6>
          <br/>
          <h6>Atendemos de Lunes a Viernes de 8:00 am a 12:00 pm y de 2:00 pm a 5:00 pm</h6>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-12 image_atencionStyle">
          <img src={AtencionUsuario} className="col-sm-12 col-md-12 col-lg-12 image_atencionStyle" alt="Imagen de atencion al cliente"/>
        </div>
     </div>
    </div>
  );
}

export default Atencion;
