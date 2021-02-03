import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles.css';


function Recreacion(){
  return(
    <main className="recreacion">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li className="breadcrumb-item active" aria-current="page">Recreación</li>
        </ol>
      </nav>
      <div className="recreacionTitle">
        <p>Esta es nuestra oferta en recreación</p>
      </div>
      <div className="Div">
        <hr/>
      </div>
      <section className="recreacionDeporte"></section>
    </main>
  );
}

export default Recreacion;
