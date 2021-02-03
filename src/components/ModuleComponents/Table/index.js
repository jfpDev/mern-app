import React, { Component } from 'react';
import './styles.css';

import Logo2 from './imderpraderalogo.png';


class Table extends Component{

  constructor(){
    super();
    this.state = {
      fichob0: false,
      fichob1: false,
      fichob2: false,
      fichob3: false,
      fichob4: false,
      fichoi0: false,
      fichoi1: false,
      fichoi2: false,
      fichoi3: false,
      fichoi4: false,
      fichon0: false,
      fichon1: false,
      fichon3: false,
      fichon4: false,
      fichog0: false,
      fichog1: false,
      fichog2: false,
      fichog3: false,
      fichog4: false,
      fichoo0: false,
      fichoo1: false,
      fichoo2: false,
      fichoo3: false,
      fichoo4: false
    }
  }

  handleStyleOnTouch = (fichoLogic, fichoNumber) => {
    if (fichoLogic === false)
      this.setState({[fichoNumber]: true});
    else
     this.setState({[fichoNumber]: false});
    }

  render (){
    const {table} = this.props;
    let {
      fichob0,
      fichob1,
      fichob2,
      fichob3,
      fichob4,
      fichoi0,
      fichoi1,
      fichoi2,
      fichoi3,
      fichoi4,
      fichon0,
      fichon1,
      fichon3,
      fichon4,
      fichog0,
      fichog1,
      fichog2,
      fichog3,
      fichog4,
      fichoo0,
      fichoo1,
      fichoo2,
      fichoo3,
      fichoo4
    } = this.state;

    return(
      <div className="tabla_style">
        <div className="row letras_tablaStyle">
          <div className="col-2 col-sm-2 col-md-2 col-lg-2 letra_tablaStyle">
            B
          </div>
          <div className="col-2 col-sm-2 col-md-2 col-lg-2 letra_tablaStyle">
            I
          </div>
          <div className="col-2 col-sm-2 col-md-2 col-lg-2 letra_tablaStyle">
            N
          </div>
          <div className="col-2 col-sm-2 col-md-2 col-lg-2 letra_tablaStyle">
            G
          </div>
          <div className="col-2 col-sm-2 col-md-2 col-lg-2 letra_tablaStyle">
            O
          </div>
        </div>
        <div className="fichos_tablaStyle">
          <div className="row fichosRow_tablaStyle">
            <div style={{background: fichob0 ? "DarkGreen" : "LemonChiffon"}} className="col-2 col-sm-2 col-md-2 col-lg-2 ficho_tablaStyle" onClick={() => this.handleStyleOnTouch(fichob0,'fichob0')}>
              {table[0].b0}
            </div>
            <div style={{background: fichoi0 ? "DarkGreen" : "LemonChiffon"}} className="col-2 col-sm-2 col-md-2 col-lg-2 ficho_tablaStyle" onClick={() => this.handleStyleOnTouch(fichoi0,'fichoi0')}>
              {table[1].i0}
            </div>
            <div style={{background: fichon0 ? "DarkGreen" : "LemonChiffon"}} className="col-2 col-sm-2 col-md-2 col-lg-2 ficho_tablaStyle" onClick={() => this.handleStyleOnTouch(fichon0,'fichon0')}>
              {table[2].n0}
            </div>
            <div style={{background: fichog0 ? "DarkGreen" : "LemonChiffon"}} className="col-2 col-sm-2 col-md-2 col-lg-2 ficho_tablaStyle" onClick={() => this.handleStyleOnTouch(fichog0,'fichog0')}>
              {table[3].g0}
            </div>
            <div style={{background: fichoo0 ? "DarkGreen" : "LemonChiffon"}} className="col-2 col-sm-2 col-md-2 col-lg-2 ficho_tablaStyle" onClick={() => this.handleStyleOnTouch(fichoo0,'fichoo0')}>
              {table[4].o0}
            </div>
          </div>
          <div className="row fichosRow_tablaStyle">
            <div style={{background: fichob1 ? "DarkGreen" : "LemonChiffon"}} className="col-2 col-sm-2 col-md-2 col-lg-2 ficho_tablaStyle" onClick={() => this.handleStyleOnTouch(fichob1,'fichob1')}>
              {table[0].b1}
            </div>
            <div style={{background: fichoi1 ? "DarkGreen" : "LemonChiffon"}} className="col-2 col-sm-2 col-md-2 col-lg-2 ficho_tablaStyle" onClick={() => this.handleStyleOnTouch(fichoi1,'fichoi1')}>
              {table[1].i1}
            </div>
            <div style={{background: fichon1 ? "DarkGreen" : "LemonChiffon"}} className="col-2 col-sm-2 col-md-2 col-lg-2 ficho_tablaStyle" onClick={() => this.handleStyleOnTouch(fichon1,'fichon1')}>
              {table[2].n1}
            </div>
            <div style={{background: fichog1 ? "DarkGreen" : "LemonChiffon"}} className="col-2 col-sm-2 col-md-2 col-lg-2 ficho_tablaStyle" onClick={() => this.handleStyleOnTouch(fichog1,'fichog1')}>
              {table[3].g1}
            </div>
            <div style={{background: fichoo1 ? "DarkGreen" : "LemonChiffon"}} className="col-2 col-sm-2 col-md-2 col-lg-2 ficho_tablaStyle" onClick={() => this.handleStyleOnTouch(fichoo1,'fichoo1')}>
              {table[4].o1}
            </div>
          </div>
          <div className="row fichosRow_tablaStyle">
            <div style={{background: fichob2 ? "DarkGreen" : "LemonChiffon"}} className="col-2 col-sm-2 col-md-2 col-lg-2 ficho_tablaStyle" onClick={() => this.handleStyleOnTouch(fichob2,'fichob2')}>
              {table[0].b2}
            </div>
            <div style={{background: fichoi2 ? "DarkGreen" : "LemonChiffon"}} className="col-2 col-sm-2 col-md-2 col-lg-2 ficho_tablaStyle" onClick={() => this.handleStyleOnTouch(fichoi2,'fichoi2')}>
              {table[1].i2}
            </div>
            <div className="col-2 col-sm-2 col-md-2 col-lg-2 fichoImage_tablaStyle">
              <img className="image_tablaStyle" src={Logo2} alt="logoheader"/>
            </div>
            <div style={{background: fichog2 ? "DarkGreen" : "LemonChiffon"}} className="col-2 col-sm-2 col-md-2 col-lg-2 ficho_tablaStyle" onClick={() => this.handleStyleOnTouch(fichog2,'fichog2')}>
              {table[3].g2}
            </div>
            <div style={{background: fichoo2 ? "DarkGreen" : "LemonChiffon"}} className="col-2 col-sm-2 col-md-2 col-lg-2 ficho_tablaStyle" onClick={() => this.handleStyleOnTouch(fichoo2,'fichoo2')}>
              {table[4].o2}
            </div>
          </div>
          <div className="row fichosRow_tablaStyle">
            <div style={{background: fichob3 ? "DarkGreen" : "LemonChiffon"}} className="col-2 col-sm-2 col-md-2 col-lg-2 ficho_tablaStyle" onClick={() => this.handleStyleOnTouch(fichob3,'fichob3')}>
              {table[0].b3}
            </div>
            <div style={{background: fichoi3 ? "DarkGreen" : "LemonChiffon"}} className="col-2 col-sm-2 col-md-2 col-lg-2 ficho_tablaStyle" onClick={() => this.handleStyleOnTouch(fichoi3,'fichoi3')}>
              {table[1].i3}
            </div>
            <div style={{background: fichon3 ? "DarkGreen" : "LemonChiffon"}} className="col-2 col-sm-2 col-md-2 col-lg-2 ficho_tablaStyle" onClick={() => this.handleStyleOnTouch(fichon3,'fichon3')}>
              {table[2].n3}
            </div>
            <div style={{background: fichog3 ? "DarkGreen" : "LemonChiffon"}} className="col-2 col-sm-2 col-md-2 col-lg-2 ficho_tablaStyle" onClick={() => this.handleStyleOnTouch(fichog3,'fichog3')}>
              {table[3].g3}
            </div>
            <div style={{background: fichoo3 ? "DarkGreen" : "LemonChiffon"}} className="col-2 col-sm-2 col-md-2 col-lg-2 ficho_tablaStyle" onClick={() => this.handleStyleOnTouch(fichoo3,'fichoo3')}>
              {table[4].o3}
            </div>
          </div>
          <div className="row fichosRow_tablaStyle">
            <div style={{background: fichob4 ? "DarkGreen" : "LemonChiffon"}} className="col-2 col-sm-2 col-md-2 col-lg-2 ficho_tablaStyle" onClick={() => this.handleStyleOnTouch(fichob4,'fichob4')}>
              {table[0].b4}
            </div>
            <div style={{background: fichoi4 ? "DarkGreen" : "LemonChiffon"}} className="col-2 col-sm-2 col-md-2 col-lg-2 ficho_tablaStyle" onClick={() => this.handleStyleOnTouch(fichoi4,'fichoi4')}>
              {table[1].i4}
            </div>
            <div style={{background: fichon4 ? "DarkGreen" : "LemonChiffon"}} className="col-2 col-sm-2 col-md-2 col-lg-2 ficho_tablaStyle" onClick={() => this.handleStyleOnTouch(fichon4,'fichon4')}>
              {table[2].n4}
            </div>
            <div style={{background: fichog4 ? "DarkGreen" : "LemonChiffon"}} className="col-2 col-sm-2 col-md-2 col-lg-2 ficho_tablaStyle" onClick={() => this.handleStyleOnTouch(fichog4,'fichog4')}>
              {table[3].g4}
            </div>
            <div style={{background: fichoo4 ? "DarkGreen" : "LemonChiffon"}} className="col-2 col-sm-2 col-md-2 col-lg-2 ficho_tablaStyle" onClick={() => this.handleStyleOnTouch(fichoo4,'fichoo4')}>
              {table[4].o4}
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Table;
