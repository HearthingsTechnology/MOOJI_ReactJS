import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

import './Menu.css';
import Logo from '../../images/logo.png';
import Logo2 from '../../images/logo2.jpeg';

function Menu({acao}) {
    return(
      <Router>
        <nav className={acao ? 'menuPreto' : 'menu'} id="menu">
          <a href="#" className="logo"><img src={acao ? Logo2 : Logo} className={acao ? 'logoImg' : ''}/></a>
          <ul>
            <li><Link to="#">home</Link></li>
            <li><Link to="#portifolio">portifólio</Link></li>
            <li><Link to="#sobre">sobre</Link></li>
            <li><Link to="#quemsomos">quem somos?</Link></li>
            <li><Link to="#contato">contato</Link></li>
          </ul>
        </nav>
      </Router>
    );
} 
export default Menu;