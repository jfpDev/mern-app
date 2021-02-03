import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

import Table from './../../ModuleComponents/Table/';
import './styles.css';

class Bingo extends Component{
  //
  // constructor(props){
  //   super();
  //   this.state = {
  //     //nombre: bingoUserData.nombre,
  //     //table: bingoUserData.table
  //   };
  //   console.log(props);
  // }

  // componentDidMount(){
  //   this.setState({
  //     nombre: this.props.bingoUserData.nombre,
  //     table: this.props.bingoUserData.table
  //   });
  // }

  render(){
    const {firstName, tableNumber, table} = this.props.bingoUserData;
    return(
      <div className="bingo_style">
        <div className="container">
        <nav aria-label="breadcrumb breadcrumb_bingoStyle">
          <ol className="breadcrumb">
            <NavLink className="breadcrumb-item" to="/">Inicio</NavLink>
            <NavLink className="breadcrumb-item" to="/recreacion">Recreación</NavLink>
            <NavLink className="breadcrumb-item" to="/recreacion/bingo/validacion">Validación</NavLink>
            <li class="breadcrumb-item active" aria-current="page">Bingo</li>
          </ol>
        </nav>
          <div className="title_bingoStyle">
            Hola {`${firstName}`}, ¡A jugar Bingo Familiar con el IMDER!
          </div>
          <div className="tableNumber_bingoStyle">
            Tabla # {`${tableNumber}`}
          </div>
          <div className="table_bingoStyle">
            <Table table={table} />
          </div>
        </div>
      </div>
    );
  }
}

export default Bingo;
