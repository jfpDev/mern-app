import React, {Component} from 'react';

import './styles.css';

import Table from './../../../ModuleComponents/Table/';
import axios from 'axios';

class TableList extends Component{

  constructor(){
    super();
    this.state = {
      people: [],
      person: '',
      tables: [],
      winners: [],
      tableNumber: '',
      render: ''
    };
    console.log('constructor');
  }
  // {table: [{'b0':0,'b1':0,'b2':0,'b3':0,'b4':0},
  //         {'i0':0,'i1':0,'i2':0,'i3':0,'i4':0},
  //         {'n0':0,'n1':0,'n2':0,'n3':0,'n4':0},
  //         {'g0':0,'g1':0,'g2':0,'g3':0,'g4':0},
  //         {'o0':0,'o1':0,'o2':0,'o3':0,'o4':0}]}
  componentDidMount(){
    axios.get('/tablas')
      .then((res) => {
        return this.setState({people: res.data.data})
        //console.log(this.state.people);
        //return console.log(res.data.data[0].table);
      })
      .catch(err => console.log(err));
    console.log('componentDidMount');
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  }

  // componentDidUpdate(){
  //   console.log('componentDidUpdate');
  //   this.renderTable();
  //   //this.state.winners.push(this.state.people[0]);
  //    //console.log(`The response from database -- First table: ${this.state.people[0].table}`);
  //  }

  renderTable = () => {
    return this.setState({
      render: true
    });
  };

  bingo = () => {
    console.log('bingo');
    return this.setState({
      person: '',
      winners: [...this.state.winners, this.state.person]});
    //return this.state.winners.push(this.state.person);
  };

  findPerson = () => {
    let registed = false;
    this.state.people.map(person => {
      if (person.tableNumber.toString() === this.state.tableNumber){
        this.setState({person});
        registed = true;
      }
      return registed;
    });
    return this.renderTable();
  };

  render(){
    console.log('render');
    return(
      <div className="container tableList_style">
        <div id="cover">
          <div className="tb">
            <div className="td">
              <input className="input_tableListStyle" type="text" name="tableNumber" onChange={this.handleChange} placeholder="Buscar tabla" required />
            </div>
            <div className="td" id="s-cover">
              <button className="button_tableListStyle" type="submit" name="tableNumber" onClick={this.findPerson}>
                <div id="s-circle">
                </div>
                <span>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="table_tableliststyle">
          {
            this.state.person === '' ? <span></span> :
              <div>
                <div className="row">
                  <div className="col-sm-12 col-md-8 col-lg-6">
                    <Table table={this.state.person.table} />
                  </div>
                  <div className="col-sm-12 col-md-4 col-lg-6 person_tablelistStyle">
                    <div># Tabla: {this.state.person.tableNumber}</div>
                    <div>{this.state.person.firstName}&nbsp;{this.state.person.lastName1}
                    </div>
                    <div>
                      <button className="buttonBingo_tableListStyle" onClick={this.bingo} type="button">Bingo</button>
                    </div>
                  </div>
                </div>
              </div>
          }
          <div className="ganadores_tableListStyle">
            Ganadores del B I N G O
          </div>
          {
            this.state.winners.length === 0 ? <span></span> :
              this.state.winners.map(person =>
                <div className="winners_tableListStyle">
                  <div className="winnersPerson_tableListStyle">
                    <p># Tabla: {person.tableNumber}</p>
                    <p>{person.firstName}&nbsp;{person.lastName1}</p>
                    <p>{person.address}</p>
                    <p>{person.neighborhood}</p>
                    <p>{person.phoneNumber}</p>
                  </div>
                </div>
              )
          }
        </div>
      </div>
    );
  }
}


export default TableList;

// <div className="row">
//   <div className="col">
//     <Table table={person.table} />
//   </div>
//   <div className="col">
//     person.firstName
//   </div>
// </div>
// )

// button span
// {
//     position: absolute;
//     top: 68px;
//     left: 43px;
//     display: block;
//     width: 45px;
//     height: 15px;
//     background-color: transparent;
//     border-radius: 10px;
//     transition: 0.5s ease all;
// }
// button span:before, button span:after
// {
//     content: '';
//     position: absolute;
//     bottom: 0;
//     right: 0;
//     width: 45px;
//     height: 15px;
//     background-color: #fff;
//     border-radius: 10px;
//     transform: rotateZ(0);
//     transition: 0.5s ease all;
// }
//
// #s-cover:hover #s-circle
// {
//     top: -1px;
//     width: 67px;
//     height: 15px;
//     border-width: 0;
//     background-color: #fff;
//     border-radius: 20px;
// }
//
// #s-cover:hover span
// {
//     top: 50%;
//     left: 56px;
//     width: 25px;
//     margin-top: -9px;
//     transform: rotateZ(0);
// }
//
// #s-cover:hover button span:before
// {
//     bottom: 11px;
//     transform: rotateZ(52deg);
// }
//
// #s-cover:hover button span:after
// {
//     bottom: -11px;
//     transform: rotateZ(-52deg);
// }
// #s-cover:hover button span:before, #s-cover:hover button span:after
// {
//     right: -6px;
//     width: 40px;
//     background-color: #fff;
// }
//
// #ytd-url {
//   display: block;
//   position: fixed;
//   right: 0;
//   bottom: 0;
//   padding: 10px 14px;
//   margin: 20px;
//   color: #fff;
//   font-family: Nunito;
//   font-size: 14px;
//   text-decoration: none;
//   background-color: #ff7575;
//   border-radius: 4px;
//   box-shadow: 0 10px 20px -5px rgba(255, 117, 117, 0.86);
//   z-index: 125;
// }
