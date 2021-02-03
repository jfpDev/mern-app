import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './styles.css';

import axios from 'axios';

class Identificacion extends Component{

  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      firstName: 'Amigo-',
      tableNumber: '00',
      table: [],
      people: {}
    };
  }

  // componentDidMount(){
  //   axios.get('/bingo')
  //     .then((res) => {
  //       this.setState({people: res.data})
  //       console.log(`The response from database is: ${res.data}`);
  //     })
  //     .catch(err => console.log(err));
  // }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  }

  handleOnIdentification = (passData) => (this.props.onIndentificationPassData(passData));

  // compareData = () => {
  //   let peopleCounter = this.state.people.length;
  //   const {documentType, documentNumber, people} = this.state;
  //   const passData = {
  //     equal: false,
  //     firstName: '',
  //     tableNumber: '',
  //     table: []
  //   };
  //   while (peopleCounter > 0){
  //     if (documentType === people[peopleCounter-1].documentType && documentNumber === people[peopleCounter-1].documentNumber){
  //       passData.equal = true;
  //       passData.firstName = people[peopleCounter-1].firstName;
  //       passData.tableNumber = people[peopleCounter-1].tableNumber;
  //       passData.table = people[peopleCounter-1].table;
  //       return passData;
  //     }
  //     else
  //       peopleCounter = peopleCounter - 1;
  //   }
  //   return false;
  // };

  handleSubmit = (event) => {
    event.preventDefault();
    const {email, password} = this.state;
    if (email === '' || password === '')
      alert('Por favor llene los datos antes de obtener la tabla');
    else{
      const passData = {
        email,
        password
      };
      axios.post('/login', passData)
        .then(res => {
          this.handleOnIdentification(res.data.userData);
          this.props.history.push('/recreacion/bingo');
         })
        .catch(err => {
          alert('El usuario no existe o los datos son incorrectos, verifique e intente de nuevo!');
          console.error(err);
        });
    }
  }

  render(){
    return(
        <div className="container identificacion_style">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <NavLink className="breadcrumb-item" to="/">Inicio</NavLink>
            <NavLink className="breadcrumb-item" to="/recreacion">Recreación</NavLink>
            <NavLink className="breadcrumb-item" to="/recreacion/bingo/validacion">Validación</NavLink>
            <li class="breadcrumb-item active" aria-current="page">Identificación</li>
          </ol>
        </nav>
          <div className="tituloBingo_identificacionStyle">
            Bingo Familiar
          </div>
          <div className="titulo_identificacionStyle">
            Ingresa correo y contraseña
          </div>
          <form className="form_identificacionStyle" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label for="inputTypeDocument">Correo electrónico</label>
              <input type="text" className="form-control" name="email" id="email" onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label for="inputNumber">Contraseña</label>
              <input type="password" className="form-control" name="password" id="password" onChange={this.handleChange} />
              <small id="emailHelp" className="form-text text-muted">Ingrese su contraseña.</small>
            </div>
            <div className="btn btn_identificacionStyle">
              <input className="btn btn-outline-dark btn_identificacionStyle" type="submit" value="Ingresar"/>
            </div>
          </form>
        </div>
      );
  }
}

export default Identificacion;
