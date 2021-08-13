import './Menu.css';
import React from 'react';
import Logo from '../images/logo.png';
import Logo2 from '../images/logo2.jpeg';

function Menu({acao}) {
    return(
      <nav className={acao ? 'menuPreto' : 'menu'} id="menu">
        <a href="#" className="logo"><img src={acao ? Logo2 : Logo} className={acao ? 'logoImg' : ''}/></a>
        <ul>
          <li><a href="#">home</a></li>
          <li><a href="#portifolio">portifólio</a></li>
          <li><a href="#sobre">sobre</a></li>
          <li><a href="#quemsomos">quem somos?</a></li>
          <li><a href="#contato">contato</a></li>
        </ul>
      </nav>
    );
} 
export default Menu;