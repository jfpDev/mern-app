//Import the modules
import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


// Import the components
import Home             from './components/Home/';
import Deporte          from './components/Deporte/';
import Atletismo        from './components/Deporte/Atletismo/';
import Ajedrez          from './components/Deporte/Ajedrez/';
import Baloncesto       from './components/Deporte/Baloncesto/';
import Voleibol         from './components/Deporte/Voleibol/';
import Futsal           from './components/Deporte/FutbolS';
import Recreacion       from './components/Recreacion/';
import Bingo            from './components/Recreacion/Bingo/';
import Identificacion   from './components/Recreacion/Bingo/Identificacion/';
import Registro         from './components/Recreacion/Bingo/Registro/';
import Validacion       from './components/Recreacion/Bingo/Validacion/';
import TableList        from './components/Recreacion/Bingo/TableList/';
import Tablero          from './components/Recreacion/Bingo/Tablero/';
import Escenarios       from './components/Escenarios/';
import Noticias         from './components/Noticias/';
import Transparencia    from './components/Transparencia/';
import One              from './components/Transparencia/One/';
import Two              from './components/Transparencia/Two/';
import TwoA             from './components/Transparencia/Two/TwoA/';
import TwoB             from './components/Transparencia/Two/TwoB/';
import TwoC             from './components/Transparencia/Two/TwoC/';
import TwoD             from './components/Transparencia/Two/TwoD/';
import TwoE             from './components/Transparencia/Two/TwoE/';
import TwoG             from './components/Transparencia/Two/TwoG/';
import TwoH             from './components/Transparencia/Two/TwoH/';
import Three            from './components/Transparencia/Three/';
import Four             from './components/Transparencia/Four/';
import FourA             from './components/Transparencia/Four/FourA/';
import Five             from './components/Transparencia/Five/';
import Six              from './components/Transparencia/Six/';
import Seven            from './components/Transparencia/Seven/';
import Eight            from './components/Transparencia/Eight/';
import Nine             from './components/Transparencia/Nine/';
import Ten              from './components/Transparencia/Ten/';
import Eleven           from './components/Transparencia/Eleven/';
import Twelve           from './components/Transparencia/Twelve/';
import Thirteen         from './components/Transparencia/Thirteen/';
import Atencion         from './components/Atencion/';
import Equipo           from './components/Equipo/';
import DavidMina        from './components/Equipo/DavidMina/';
import Leonardo         from './components/Equipo/Leonardo/';
import Ana              from './components/Equipo/Ana/';
import Pilar            from './components/Equipo/Pilar/';
import Fernando         from './components/Equipo/Fernando/';
import Erika            from './components/Equipo/Erika/';
import JohnJairo        from './components/Equipo/JohnJairo/';
import Julio            from './components/Equipo/Julio/';
import Diego            from './components/Equipo/Diego/';
import Jefferson        from './components/Equipo/Jefferson/';
import CarlosJulio       from './components/Equipo/CarlosJulio/';
import JuanFelipe       from './components/Equipo/JuanFelipe/';
import Nav              from './components/ModuleComponents/Nav/';
import Encuentranos     from './components/ModuleComponents/Encuentranos/';



class App extends Component{

  constructor(){
    super();
    this.state = {
      firstName: 'Amigo',
      tableNumber: 0,
      table: [{'b0':0,'b1':0,'b2':0,'b3':0,'b4':0},
              {'i0':0,'i1':0,'i2':0,'i3':0,'i4':0},
              {'n0':0,'n1':0,'n2':0,'n3':0,'n4':0},
              {'g0':0,'g1':0,'g2':0,'g3':0,'g4':0},
              {'o0':0,'o1':0,'o2':0,'o3':0,'o4':0}]
    };
  }

  handlePassDataToUser = (data) => {
    this.setState(
      {
        firstName: data.firstName,
        table: data.table,
        tableNumber: data.tableNumber
      }
    );
  };

  render(){
    return (
      <Router>
        <Nav/>
        <Switch>
            <Route path='/'                 exact component = {Home} />
            <Route exact path='/deporte'                component = {Deporte} />
            <Route path='/deporte/atletismo'                component = {Atletismo} />
            <Route path='/deporte/baloncesto'                component = {Baloncesto} />
            <Route path='/deporte/ajedrez'                component = {Ajedrez} />
            <Route path='/deporte/voleibol'                component = {Voleibol} />
            <Route path='/deporte/futsal'                component = {Futsal} />
            <Route path='/recreacion'       exact component = {Recreacion} />
            <Route path='/recreacion/bingo' exact component = {() => <Bingo bingoUserData={this.state} /> }/>
            <Route path='/recreacion/bingo/identificacion' component = {(routeProps) => <Identificacion {...routeProps} onIndentificationPassData={this.handlePassDataToUser}/>}/>
            <Route path='/recreacion/bingo/validacion' component = {Validacion}/>
            <Route path='/recreacion/bingo/registro'   component = {(routeProps) => <Registro {...routeProps} onRegisterPassData={this.handlePassDataToUser} />} />
            <Route path='/recreacion/bingo/tablas'     component = {TableList} />
            <Route path='/recreacion/bingo/tablero'    component = {Tablero} />
            <Route path='/escenarios'             component = {Escenarios} />
            <Route path='/noticias'               component = {Noticias} />
            <Route path='/transparencia'        exact component = {Transparencia} />
            <Route path='/transparencia/mecanismos'    component = {One} />
            <Route path='/transparencia/informacion'    component = {Two} />
            <Route path='/transparencia/datos-abiertos'    component = {TwoA} />
            <Route path='/transparencia/publicaciones'    component = {TwoB} />
            <Route path='/transparencia/convocatorias'    component = {TwoC} />
            <Route path='/transparencia/glosario'    component = {TwoE} />
            <Route path='/transparencia/calendario'    component = {TwoG} />
            <Route path='/transparencia/informacion-niñ@s'    component = {TwoH} />
            <Route path='/transparencia/preguntas-respuestas'    component = {TwoD} />
            <Route path='/transparencia/estructura'    component = {Three} />
            <Route path='/transparencia/normatividad'    component = {Four} />
            <Route path='/transparencia/consulta-normatividad'    component = {FourA} />
            <Route path='/transparencia/presupuesto'    component = {Five} />
            <Route path='/transparencia/planeacion'    component = {Six} />
            <Route path='/transparencia/control'    component = {Seven} />
            <Route path='/transparencia/contratacion'    component = {Eight} />
            <Route path='/transparencia/tramites'    component = {Nine} />
            <Route path='/transparencia/instrumentos-gestion'    component = {Ten} />
            <Route path='/transparencia/transparencia-pasiva'    component = {Eleven} />
            <Route path='/transparencia/accesibilidad'    component = {Twelve} />
            <Route path='/transparencia/proteccion-datos'    component = {Thirteen} />
            <Route path='/equipo'           exact component = {Equipo} />
            <Route path='/equipo/davidmina'       component = {DavidMina} />
            <Route path='/equipo/leonardo'        component = {Leonardo} />
            <Route path='/equipo/ana'             component = {Ana} />
            <Route path='/equipo/pilar'           component = {Pilar} />
            <Route path='/equipo/fernando'        component = {Fernando} />
            <Route path='/equipo/erika'           component = {Erika} />
            <Route path='/equipo/johnjairo'       component = {JohnJairo} />
            <Route path='/equipo/julio'           component = {Julio} />
            <Route path='/equipo/diego'           component = {Diego} />
            <Route path='/equipo/jefferson'       component = {Jefferson} />
            <Route path='/equipo/carlosjulio'     component = {CarlosJulio} />
            <Route path='/equipo/juanfelipe'      component = {JuanFelipe} />
            <Route path='/atencion'               component = {Atencion} />
        </Switch>
        <Encuentranos/>
      </Router>
    );
  }
}

export default App;
