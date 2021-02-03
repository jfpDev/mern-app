import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
//import firebase from "firebase/app";
//import "firebase/auth";
import './styles.css';

import axios from 'axios';

axios.defaults.baseURL = 'https://us-central1-imderpradera-c2ff8.cloudfunctions.net/api';

//'http://localhost:5000/imderpradera-c2ff8/us-central1/api';





const repite = (arreglo,valor) => {
  const longitud = arreglo.length;
  let i = 0;
  while (i<longitud){
    if (arreglo[i] === valor)
      return true;
    else
      i++;
  }
  return false;
};

const valores = (desfase) => {
  const rango = 15;
  let arreglo = [];
  let valor = 0;
  let i = 0;
  while (i < 5){
    valor = Math.floor(Math.random()*rango) + desfase;
    if (repite(arreglo,valor)){}
    else {
     arreglo[i] = valor;
     i++;
    }
  }
  return arreglo;
};

const B = () => {
  //const bRow = new Map();
  const arreglo = valores(1);
  //bRow.set('b0',arreglo[0]).set('b1',arreglo[1]).set('b2',arreglo[2]).set('b3',arreglo[3]).set('b4',arreglo[4]);
  const bRow = {'b0': arreglo[0], 'b1': arreglo[1], 'b2': arreglo[2], 'b3': arreglo[3], 'b4': arreglo[4]};
  return bRow;
};

const I = () => {
  const arreglo = valores(16);
  const iRow = {'i0': arreglo[0], 'i1': arreglo[1], 'i2': arreglo[2], 'i3': arreglo[3], 'i4': arreglo[4]};
  return iRow;
};

const N = () => {
  const arreglo = valores(31);
  const nRow = {'n0': arreglo[0], 'n1': arreglo[1], 'n3': arreglo[3], 'n4': arreglo[4]};
  return nRow;
};

const G = () => {
  const arreglo = valores(46);
  const gRow = {'g0': arreglo[0], 'g1': arreglo[1], 'g2': arreglo[2], 'g3': arreglo[3], 'g4': arreglo[4]};
  return gRow;
};

const O = () => {
  const arreglo = valores(61);
  const oRow = {'o0': arreglo[0], 'o1': arreglo[1], 'o2': arreglo[2], 'o3': arreglo[3], 'o4': arreglo[4]};
  return oRow;
};

const createTable = () =>  [B(),I(),N(),G(),O()];

class Registro extends Component{

  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      secondName: '',
      lastName1: '',
      lastName2: '',
      documentType: '',
      documentNumber: '',
      gender: '',
      age: '',
      phoneNumber: '',
      neighborhood: '',
      address: '',
      email: '',
      password: '',
      city: '',
      table: []
    };
    //this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    const table = createTable();
    this.setState({
      table
    });
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  }

  handleOnRegister = (passData) => (this.props.onRegisterPassData(passData));

  handleSubmit = (event) => {
    event.preventDefault();
    const { firstName, lastName1, lastName2, documentType, documentNumber, gender, age, phoneNumber, neighborhood, address,
    city, email, password, confirmPassword } = this.state;
    let passLength = password.length;
    if (firstName === '' || lastName1 === '' || lastName2 === '' || documentType === '' || documentNumber === '' || gender === '' || age === '' || phoneNumber === '' || email === '' || password === '' || confirmPassword === '' || neighborhood === '' || address === '' || city === '')
      alert('Por favor llene todos los datos obligatorios');
    else {
      if (password === confirmPassword){
        if (passLength >= 6){
          axios.post('/register', this.state)
            .then(res => {
              if (res.data.message === 'cant-connect-db'){
                alert('No se pudo acceder a la base de datos, intente más tarde nuevamente.')
                return console.log(res.data.error);
              }
              if (res.data.message === 'max-table-reached'){
                alert('Lo sentimos, se ha alcanzado el número máximo de 3000 tablas de bingo, espere una nueva apertura.');
                return this.props.history.push('/');
              }
              if (res.data.message === 'auth/email-already-in-use'){
                alert('Ya se ha registrado con este correo antes');
                return this.props.history.push('/recreacion/bingo/validacion');
              }
              if (res.data.message === 'couldnt-update-counter'){
                alert('Hubo un error, contáctese con el administrador de la página');
                return console.log(res.data.error);
              }
              if (res.data.message === 'success'){
                const passData = {
                  firstName,
                  table: this.state.table,
                  tableNumber: res.data.tableNumber
                };
                this.handleOnRegister(passData);
                alert('Usted se ha registrado satisfactoriamente.');
                return this.props.history.push('/recreacion/bingo');
              }
              else {
                alert('Algo salió mal...');
                return console.log(res.data);
              }
            })
            .catch(err => {
               alert('Hubo un error, contáctese con el Instituto del Deporte y la Recreación para más información.');
               console.error(err);
            })
        }else {
          alert('La contraseña debe ser igual o mayor a seis dígitos');
        }
      }else {
        alert('Las contraseñas no coinciden, por favor verifique.');
      }
    }
 }

  render(){
  return(
    <div className="container registro_style">
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <NavLink className="breadcrumb-item" to="/">Inicio</NavLink>
        <NavLink className="breadcrumb-item" to="/recreacion">Recreación</NavLink>
        <NavLink className="breadcrumb-item" to="/recreacion/bingo/validacion">Validación</NavLink>
        <li className="breadcrumb-item active" aria-current="page">Registro</li>
      </ol>
    </nav>
      <div className="titulo_registroStyle">
        Registra todos los datos para obtener tu tabla
      </div>
      <form className="form_resgistroStyle" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label for="firstName">Primer Nombre</label>
          <input className="form-control" onChange={this.handleChange} type="text" id="firstName" name="firstName" autoFocus/>
          <small id="firstName" className="form-text text-muted">Campo obligatorio</small>
        </div>
        <div className="form-group">
          <label for="secondName">Segundo Nombre</label>
          <input className="form-control" onChange={this.handleChange} type="text" id="secondName" name="secondName" />
        </div>
        <div className="form-group">
          <label for="lastName1">Primer Apellido</label>
          <input className="form-control" onChange={this.handleChange} type="text" id="lastName1" name="lastName1" />
          <small id="lastName1" className="form-text text-muted">Campo obligatorio</small>
        </div>
        <div className="form-group">
          <label for="lastName2">Segundo Apellido</label>
          <input className="form-control" onChange={this.handleChange} type="text" id="lastName2" name="lastName2" />
          <small id="lastName2" className="form-text text-muted">Campo obligatorio</small>
        </div>
        <div className="form-group">
          <label for="documentType">Seleccione el tipo de documento</label>
          <select className="form-control" onChange={this.handleChange} name="documentType" id="documentType" >
            <option value="">--</option>
            <option value="tidentidad">Tarjeta de Identidad</option>
            <option value="cedula">Cédula de ciudadanía</option>
          </select>
          <small id="documentType" className="form-text text-muted">Campo obligatorio</small>
        </div>
        <div className="form-group">
          <label for="documentNumber">Número de documento</label>
          <input className="form-control" onChange={this.handleChange} type="number" id="documentNumber" name="documentNumber" />
          <small id="documentNumber" className="form-text text-muted">Campo obligatorio</small>
        </div>
        <div className="form-group">
          <label for="gender">Género</label>
          <select className="form-control" onChange={this.handleChange} name="gender" id="gender" >
            <option value="">--</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
            <option value="no-binario">No binario</option>
          </select>
          <small id="gender" className="form-text text-muted">Campo obligatorio</small>
        </div>
        <div className="form-group">
          <label for="age">Edad</label>
          <input className="form-control" onChange={this.handleChange} type="number" id="age" name="age" />
          <small id="age" className="form-text text-muted">Campo obligatorio</small>
        </div>
        <div className="form-group">
          <label for="phoneNumber">Número telefónico</label>
          <input className="form-control" onChange={this.handleChange} type="tel" id="phoneNumber" name="phoneNumber" />
          <small id="phoneNumber" className="form-text text-muted">Campo obligatorio</small>
        </div>
        <div className="form-group">
          <label for="email">Correo</label>
          <input className="form-control" onChange={this.handleChange} type="text" id="email" name="email" />
          <small id="correo" className="form-text text-muted">Campo obligatorio</small>
        </div>
        <div className="form-group">
          <label for="password">Contraseña</label>
          <input className="form-control" onChange={this.handleChange} type="password" id="password" name="password" />
          <small id="password" className="form-text text-muted">Campo obligatorio</small>
        </div>
        <div className="form-group">
          <label for="confirmPassword">Confirme Contraseña</label>
          <input className="form-control" onChange={this.handleChange} type="password" id="confirmPassword" name="confirmPassword" />
          <small id="confirmPassword" className="form-text text-muted">Campo obligatorio</small>
        </div>
        <div className="form-group">
          <label for="neighborhood">Barrio</label>
          <input className="form-control" onChange={this.handleChange} type="text" id="neighborhood" name="neighborhood" />
          <small id="neighborhood" className="form-text text-muted">Campo obligatorio</small>
        </div>
        <div className="form-group">
          <label for="address">Dirección</label>
          <input className="form-control" onChange={this.handleChange} type="text" id="address" name="address" />
          <small id="address" className="form-text text-muted">Campo obligatorio</small>
        </div>
        <div className="form-group">
          <label for="city">Ciudad</label>
          <input className="form-control" onChange={this.handleChange} type="text" id="city" name="city" />
          <small id="city" className="form-text text-muted">Campo obligatorio</small>
        </div>
        <div className="formButton_registroStyle">
          <input className="btn btn-secondary form-group formButton_registroStyle" type="submit" value="Registrame"/>
        </div>
        <div id='recaptcha-container'>
          {
            //window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container')
          }
        </div>
      </form>
    </div>
    );
  }
}

  export default Registro;
