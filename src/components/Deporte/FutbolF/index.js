import React from 'react';

import '../../../styles.css';


function FutbolF(){
  return(
    <div>
    <div className="col">
     <div className="row">
        <p className="card-text">Horario: Martes y Jueves. De 8:00 a 10:00 AM y de 2:00 a 4:00 PM</p>
        <p className="card-text"><small className="text-muted">Lugar: Villa Marina</small></p>
        <p className="card-text"><small className="text-muted">
          Monitores: <ul>
                      <li>Gustavo Murillo</li>
                      <li>Pablo César Murillo</li>
                    </ul>
          </small></p>
        <hr width="100%"/>
      </div>
      <div className="row">
         <p className="card-text">Horario: Martes y Jueves. De 8:00 a 10:00 AM y 2:00 a 4:00 PM</p>
         <p className="card-text"><small className="text-muted">Lugar: Manuel José Ramirez</small></p>
         <p className="card-text"><small className="text-muted">
           Monitores: <ul>
                       <li>Miguel Valencia</li>
                       <li>Alexis Caicedo</li>
                     </ul>
           </small></p>
         <hr width="100%"/>
       </div>
       <div className="row">
          <p className="card-text">Horario: Martes y Jueves. De 8:00 a 10:00 AM y 2:00 a 4:00 PM </p>
          <p className="card-text"><small className="text-muted">Lugar: La María</small></p>
          <p className="card-text"><small className="text-muted">
            Monitores: <ul>
                        <li>Cristian Gutiérrez</li>
                        <li>Camilo Solarte</li>
                      </ul>
            </small></p>
        </div>
    </div>
    </div>
  );
}

export default FutbolF;
