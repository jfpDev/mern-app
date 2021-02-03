import React from 'react';

import '../../../styles.css';

import Youtube   from './youtube.png';
import Facebook  from './facebook.png';
import Instagram from './instagram.png';

function Encuentranos(){
  return(
    <footer className="footer">
      <p>Sigue nuestras redes sociales</p>
      <div className="encuentranosLogos">
        <a href="https://www.facebook.com/IMDERPraderaValle">
          <img src={Facebook} alt="facebook img" />
        </a>
        <a href="https://www.instagram.com/imderpradera/">
          <img src={Instagram} alt="instagram img" />
        </a>
        <a href="https://www.youtube.com/channel/UCx4jZoVnFjDMQGzWSff-qbw?view_as=subscriber">
          <img src={Youtube} alt="youtube img" />
        </a>
      </div>
    </footer>
  );
}


export default Encuentranos;
