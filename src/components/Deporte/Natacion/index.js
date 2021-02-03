import React from 'react';

import '../../../styles.css';


function Natacion(){
  return(
    <div>
    <p className="card-text"> Horario: De 7:30 a 8:30 AM, de 8:30 a 9:30 AM, de 2:00 a 3:00 PM y de 3:00 a 4:00 PM </p>
    <p className="card-text"><small class="text-muted">Lugar: Las Palmeras</small></p>
    <p className="card-text"><small className="text-muted">
      Monitores: <ul>
                  <li>Luis Alfonso Rojas</li>
                  <li>Andrés Muñoz</li>
                </ul>
      </small></p>
    </div>
  );
}

export default Natacion;
