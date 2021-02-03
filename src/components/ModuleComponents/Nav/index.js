import React, {Component}  from 'react';
import {NavLink} from 'react-router-dom';

import '../../../styles.css';
import Logo from './imderpraderalogo.png';


class Nav extends Component{

  burgerFunc = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navLinks');

    nav.classList.toggle('navLinks_active');
    burger.classList.toggle('xburger');
  }

  render(){
    return(
      <header>
        <nav>
          <NavLink className="navLogo" to="/">
            <img className="navImg" src={Logo} alt="logo header"/>
          </NavLink>
          <ul className="navLinks">
            <li>
              <NavLink onClick={this.burgerFunc} className="navLinks_nav" activeClassName="nav-link-active" exact to="/">Inicio</NavLink>
            </li>
            <li>
              <NavLink onClick={this.burgerFunc} className="navLinks_nav" activeClassName="nav-link-active" to="/deporte">Deporte</NavLink>
            </li>
            <li>
              <NavLink onClick={this.burgerFunc} className="navLinks_nav" activeClassName="nav-link-active" to="/recreacion">Recreación</NavLink>
            </li>
            <li>
              <NavLink onClick={this.burgerFunc} className="navLinks_nav" activeClassName="nav-link-active" to="/noticias">Noticias</NavLink>
            </li>
            <li>
              <NavLink onClick={this.burgerFunc} className="navLinks_nav" activeClassName="nav-link-active" to="/transparencia">Transparencia</NavLink>
            </li>
            <li>
              <NavLink onClick={this.burgerFunc} className="navLinks_nav" activeClassName="nav-link-active" to="/equipo">Equipo</NavLink>
            </li>
            <li>
              <NavLink onClick={this.burgerFunc} className="navLinks_nav" activeClassName="nav-link-active" to="/atencion">Atención</NavLink>
            </li>
            {/*
            <Link className="nav-link" to="/escenarios">
              <li className="nav-item text-body">Escenarios</li>
            </Link>
            */}
          </ul>
          <div onClick={this.burgerFunc} className="burger">
            <div className="burgerLine1"></div>
            <div className="burgerLine2"></div>
            <div className="burgerLine3"></div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Nav;
