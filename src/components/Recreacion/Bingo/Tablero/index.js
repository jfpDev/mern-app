import React, {Component} from 'react';
import Table from './../../../ModuleComponents/Table/';

import './styles.css';

class Tablero extends Component{
  constructor(){
    super();
    this.state = {
      ficho1: false, ficho2: false, ficho3: false, ficho4: false, ficho5: false, ficho6: false, ficho7: false, ficho8: false, ficho9: false, ficho10: false, ficho11: false, ficho12: false, ficho13: false, ficho14: false, ficho15: false,
      ficho16: false, ficho17: false, ficho18: false, ficho19: false, ficho20: false, ficho21: false, ficho22: false, ficho23: false, ficho24: false, ficho25: false, ficho26: false, ficho27: false, ficho28: false, ficho29: false,
      ficho30: false, ficho31: false, ficho32: false, ficho33: false, ficho34: false, ficho35: false, ficho36: false, ficho37: false, ficho38: false, ficho39: false, ficho40: false, ficho41: false, ficho42: false, ficho43: false, ficho44: false, ficho45: false, ficho46: false, ficho47: false, ficho48: false, ficho49: false, ficho50: false,  ficho51: false, ficho52: false, ficho53: false, ficho54: false, ficho55: false, ficho56: false, ficho57: false, ficho58: false, ficho59: false, ficho60: false, ficho61: false, ficho62: false, ficho63: false, ficho64: false, ficho65: false, ficho66: false, ficho67: false, ficho68: false, ficho69: false, ficho70: false, ficho71: false, ficho72: false, ficho73: false, ficho74: false, ficho75: false
    }
  }

  handleStyleOnTouch = (fichoLogic, fichoNumber) => {
    if (fichoLogic === false)
      this.setState({[fichoNumber]: true});
    else
     this.setState({[fichoNumber]: false});
    }

  erase = () => {
    for (var i = 1; i < 76; i++) {
      this.setState({[`ficho${i}`]: false});
    }
  }

  render(){
    let {
      ficho1, ficho2, ficho3, ficho4, ficho5, ficho6, ficho7, ficho8, ficho9, ficho10, ficho11, ficho12, ficho13, ficho14, ficho15, ficho16, ficho17, ficho18, ficho19, ficho20, ficho21, ficho22, ficho23, ficho24, ficho25, ficho26, ficho27, ficho28, ficho29, ficho30, ficho31, ficho32, ficho33, ficho34, ficho35, ficho36, ficho37, ficho38, ficho39, ficho40, ficho41, ficho42, ficho43, ficho44, ficho45, ficho46, ficho47, ficho48, ficho49, ficho50,  ficho51, ficho52, ficho53, ficho54, ficho55, ficho56, ficho57, ficho58, ficho59, ficho60, ficho61, ficho62, ficho63, ficho64, ficho65, ficho66, ficho67, ficho68, ficho69, ficho70, ficho71, ficho72, ficho73, ficho74, ficho75
    } = this.state;
    const fichosStyle1 = {
      background: "Red",
      color: "White"
    };
    const fichosStyle2 = {
      background: "LemonChiffon",
      color: "Black"
    };

    return(
      <main className="tablero_style">
        <div className="tableroUp">
          <div className="tableroTable">
            <Table table={[{'b0':0,'b1':0,'b2':0,'b3':0,'b4':0},
                    {'i0':0,'i1':0,'i2':0,'i3':0,'i4':0},
                    {'n0':0,'n1':0,'n2':0,'n3':0,'n4':0},
                    {'g0':0,'g1':0,'g2':0,'g3':0,'g4':0},
                    {'o0':0,'o1':0,'o2':0,'o3':0,'o4':0}]}></Table>
          </div>
          <div className="erase_tableroStyle" onClick={this.erase}>
            Borrar Tablero
          </div>
        </div>
        <div className="row row_tableroStyle">
          <div className="col letras_tableroStyle">
            B
          </div>
          <div className="col fichos_tableroStyle" style={ficho1 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho1,'ficho1')}>
            1
          </div>
          <div className="col fichos_tableroStyle" style={ficho2 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho2,'ficho2')}>
            2
          </div>
          <div className="col fichos_tableroStyle" style={ficho3 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho3,'ficho3')}>
            3
          </div>
          <div className="col fichos_tableroStyle" style={ficho4 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho4,'ficho4')}>
            4
          </div>
          <div className="col fichos_tableroStyle" style={ficho5 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho5,'ficho5')}>
            5
          </div>
          <div className="col fichos_tableroStyle" style={ficho6 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho6,'ficho6')}>
            6
          </div>
          <div className="col fichos_tableroStyle" style={ficho7 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho7,'ficho7')}>
            7
          </div>
          <div className="col fichos_tableroStyle" style={ficho8 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho8,'ficho8')}>
            8
          </div>
          <div className="col fichos_tableroStyle" style={ficho9 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho9,'ficho9')}>
            9
          </div>
          <div className="col fichos_tableroStyle" style={ficho10 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho10,'ficho10')}>
            10
          </div>
          <div className="col fichos_tableroStyle" style={ficho11 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho11,'ficho11')}>
            11
          </div>
          <div className="col fichos_tableroStyle" style={ficho12 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho12,'ficho12')}>
            12
          </div>
          <div className="col fichos_tableroStyle" style={ficho13 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho13,'ficho13')}>
            13
          </div>
          <div className="col fichos_tableroStyle" style={ficho14 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho14,'ficho14')}>
            14
          </div>
          <div className="col fichos_tableroStyle" style={ficho15 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho15,'ficho15')}>
            15
          </div>
        </div>
        <div className="row row_tableroStyle">
          <div className="col letras_tableroStyle">
            I
          </div>
          <div style={ficho16 ? fichosStyle1 : fichosStyle2} className="col fichos_tableroStyle" onClick={() => this.handleStyleOnTouch(ficho16,'ficho16')}>
            16
          </div>
          <div className="col fichos_tableroStyle" style={ficho17 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho17,'ficho17')}>
            17
          </div>
          <div className="col fichos_tableroStyle" style={ficho18 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho18,'ficho18')}>
            18
          </div>
          <div className="col fichos_tableroStyle" style={ficho19 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho19,'ficho19')}>
            19
          </div>
          <div className="col fichos_tableroStyle" style={ficho20 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho20,'ficho20')}>
            20
          </div>
          <div className="col fichos_tableroStyle" style={ficho21 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho21,'ficho21')}>
            21
          </div>
          <div className="col fichos_tableroStyle" style={ficho22 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho22,'ficho22')}>
            22
          </div>
          <div className="col fichos_tableroStyle" style={ficho23 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho23,'ficho23')}>
            23
          </div>
          <div className="col fichos_tableroStyle" style={ficho24 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho24,'ficho24')}>
            24
          </div>
          <div className="col fichos_tableroStyle" style={ficho25 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho25,'ficho25')}>
            25
          </div>
          <div className="col fichos_tableroStyle" style={ficho26 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho26,'ficho26')}>
            26
          </div>
          <div className="col fichos_tableroStyle" style={ficho27 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho27,'ficho27')}>
            27
          </div>
          <div className="col fichos_tableroStyle" style={ficho28 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho28,'ficho28')}>
            28
          </div>
          <div className="col fichos_tableroStyle" style={ficho29 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho29,'ficho29')}>
            29
          </div>
          <div className="col fichos_tableroStyle" style={ficho30 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho30,'ficho30')}>
            30
          </div>
        </div>
        <div className="row row_tableroStyle">
          <div className="col letras_tableroStyle">
            N
          </div>
          <div className="col fichos_tableroStyle" style={ficho31 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho31,'ficho31')}>
            31
          </div>
          <div className="col fichos_tableroStyle" style={ficho32 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho32,'ficho32')}>
            32
          </div>
          <div className="col fichos_tableroStyle" style={ficho33 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho33,'ficho33')}>
            33
          </div>
          <div className="col fichos_tableroStyle" style={ficho34 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho34,'ficho34')}>
            34
          </div>
          <div className="col fichos_tableroStyle" style={ficho35 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho35,'ficho35')}>
            35
          </div>
          <div className="col fichos_tableroStyle" style={ficho36 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho36,'ficho36')}>
            36
          </div>
          <div className="col fichos_tableroStyle" style={ficho37 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho37,'ficho37')}>
            37
          </div>
          <div className="col fichos_tableroStyle" style={ficho38 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho38,'ficho38')}>
            38
          </div>
          <div className="col fichos_tableroStyle" style={ficho39 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho39,'ficho39')}>
            39
          </div>
          <div className="col fichos_tableroStyle" style={ficho40 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho40,'ficho40')}>
            40
          </div>
          <div className="col fichos_tableroStyle" style={ficho41 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho41,'ficho41')}>
            41
          </div>
          <div className="col fichos_tableroStyle" style={ficho42 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho42,'ficho42')}>
            42
          </div>
          <div className="col fichos_tableroStyle" style={ficho43 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho43,'ficho43')}>
            43
          </div>
          <div className="col fichos_tableroStyle" style={ficho44 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho44,'ficho44')}>
            44
          </div>
          <div className="col fichos_tableroStyle" style={ficho45 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho45,'ficho45')}>
            45
          </div>
        </div>
        <div className="row row_tableroStyle">
          <div className="col letras_tableroStyle">
            G
          </div>
          <div className="col fichos_tableroStyle" style={ficho46 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho46,'ficho46')}>
            46
          </div>
          <div className="col fichos_tableroStyle" style={ficho47 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho47,'ficho47')}>
            47
          </div>
          <div className="col fichos_tableroStyle" style={ficho48 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho48,'ficho48')}>
            48
          </div>
          <div className="col fichos_tableroStyle" style={ficho49 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho49,'ficho49')}>
            49
          </div>
          <div className="col fichos_tableroStyle" style={ficho50 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho50,'ficho50')}>
            50
          </div>
          <div className="col fichos_tableroStyle" style={ficho51 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho51,'ficho51')}>
            51
          </div>
          <div className="col fichos_tableroStyle" style={ficho52 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho52,'ficho52')}>
            52
          </div>
          <div className="col fichos_tableroStyle" style={ficho53 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho53,'ficho53')}>
            53
          </div>
          <div className="col fichos_tableroStyle" style={ficho54 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho54,'ficho54')}>
            54
          </div>
          <div className="col fichos_tableroStyle" style={ficho55 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho55,'ficho55')}>
            55
          </div>
          <div className="col fichos_tableroStyle" style={ficho56 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho56,'ficho56')}>
            56
          </div>
          <div className="col fichos_tableroStyle" style={ficho57 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho57,'ficho57')}>
            57
          </div>
          <div className="col fichos_tableroStyle" style={ficho58 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho58,'ficho58')}>
            58
          </div>
          <div className="col fichos_tableroStyle" style={ficho59 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho59,'ficho59')}>
            59
          </div>
          <div className="col fichos_tableroStyle" style={ficho60 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho60,'ficho60')}>
            60
          </div>
        </div>
        <div className="row row_tableroStyle">
          <div className="col letras_tableroStyle">
            O
          </div>
          <div className="col fichos_tableroStyle" style={ficho61 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho61,'ficho61')}>
            61
          </div>
          <div className="col fichos_tableroStyle" style={ficho62 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho62,'ficho62')}>
            62
          </div>
          <div className="col fichos_tableroStyle" style={ficho63 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho63,'ficho63')}>
            63
          </div>
          <div className="col fichos_tableroStyle" style={ficho64 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho64,'ficho64')}>
            64
          </div>
          <div className="col fichos_tableroStyle" style={ficho65 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho65,'ficho65')}>
            65
          </div>
          <div className="col fichos_tableroStyle" style={ficho66 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho66,'ficho66')}>
            66
          </div>
          <div className="col fichos_tableroStyle" style={ficho67 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho67,'ficho67')}>
            67
          </div>
          <div className="col fichos_tableroStyle" style={ficho68 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho68,'ficho68')}>
            68
          </div>
          <div className="col fichos_tableroStyle" style={ficho69 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho69,'ficho69')}>
            69
          </div>
          <div className="col fichos_tableroStyle" style={ficho70 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho70,'ficho70')}>
            70
          </div>
          <div className="col fichos_tableroStyle" style={ficho71 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho71,'ficho71')}>
            71
          </div>
          <div className="col fichos_tableroStyle" style={ficho72 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho72,'ficho72')}>
            72
          </div>
          <div className="col fichos_tableroStyle" style={ficho73 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho73,'ficho73')}>
            73
          </div>
          <div className="col fichos_tableroStyle" style={ficho74 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho74,'ficho74')}>
            74
          </div>
          <div className="col fichos_tableroStyle" style={ficho75 ? fichosStyle1 : fichosStyle2} onClick={() => this.handleStyleOnTouch(ficho75,'ficho75')}>
            75
          </div>
        </div>
      </main>
    )
  }
}

export default Tablero;
