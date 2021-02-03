import React from 'react';
import './styles.css';


function Escenarios(){
  return(
    <div className="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">Principal</a></li>
          <li class="breadcrumb-item active" aria-current="page">Escenarios</li>
        </ol>
      </nav>
      <h1>
        <p>
          Estos son los escenarios deportivos
        </p>
      </h1>
    </div>
  );
}

export default Escenarios;
