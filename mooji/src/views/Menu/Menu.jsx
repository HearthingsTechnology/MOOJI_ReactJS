import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

import './Menu.css';
import LogoMoojiW from '../../assets/images/LogoMoojiW.png';
import LogoMoojiB from '../../assets/images/LogoMoojiB.png';

function Menu({acao}) {
    return(
      <Router>
        <nav className={acao ? 'menuPreto' : 'menu'} id="menu">
          <ul>
            <li><Link to="#">Home</Link></li>
            <li><Link to="#portifolio">Portifólio</Link></li>
            <li><Link to="#nos">Nós</Link></li>
            <li><Link to="#sobre">Sobre</Link></li>
            <li><Link to="#contato">Contato</Link></li>
          </ul>
          <a href="#" className="logo"><img src={LogoMoojiW} className="logoMooji"/></a>
        </nav>
      </Router>
    );
} 
export default Menu;

// <a href="#" className="logo"><img src={acao ? Logo2 : Logo} className={acao ? 'logoImg' : ''}/></a>