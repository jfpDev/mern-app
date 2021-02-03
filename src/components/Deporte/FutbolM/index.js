import React from 'react';

import '../../../styles.css';


function FutbolM(){
  return(
    <div>
    <div className="col">
     <div className="row">
        <p className="card-text">Horario: Lunes, Miércoles y Viernes. De 8:00 a 10:00 AM y de 2:00 a 4:00 PM</p>
        <p className="card-text"><small className="text-muted">Lugar: Villa Marina</small></p>
        <p className="card-text"><small className="text-muted">
          Monitores: <ul>
                      <li>Gustavo Murillo</li>
                      <li>Pablo César Murillo</li>
                      <li>Jannier Acevedo</li>
                    </ul>
          </small></p>
        <hr width="100%"/>
      </div>
      <div className="row">
         <p className="card-text">Horario: Lunes, Miércoles y Viernes. De 7:30 a 10:00 AM y 2:00 a 4:00 PM</p>
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
          <p className="card-text">Horario: Lunes, Miércoles y Viernes. De 2:00 a 3:30 PM </p>
          <p className="card-text"><small className="text-muted">Lugar: La María</small></p>
          <p className="card-text"><small className="text-muted">
            Monitores: <ul>
                        <li>Jannier Acevedo</li>
                        <li>Orlando Garcés</li>
                      </ul>
            </small></p>
        </div>
    </div>
    </div>
  );
}

export default FutbolM;
