import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

import './Menu.css';
import LogoMoojiW from '../../assets/images/LogoMoojiW.png';
import LogoMoojiB from '../../assets/images/LogoMoojiB.png';
import SearchIcon from '../../assets/images/search.png';

function Menu({acao}) {
    return(
      <Router>
        <nav className={acao ? 'menuBranco' : 'menu'} id="menu">
          <ul>
            <li><Link to="#" className={acao ? 'color' : ''}>Home</Link></li>
            <li><Link to="#portifolio" className={acao ? 'color' : ''}>Portfólio</Link></li>
            <li><Link to="#nos" className={acao ? 'color' : ''}>Nós</Link></li>
            <li><Link to="#sobre" className={acao ? 'color' : ''}>Sobre</Link></li>
            <li><Link to="#contato" className={acao ? 'color' : ''}>Contato</Link></li>
          </ul>
          <img src={acao ? LogoMoojiB : LogoMoojiW} className="logoMooji"/>
          <img src={SearchIcon} className="SearchIcon"/>

          <div className="hambMenu">
            <div className="lines"></div>
          </div>
        </nav>
      </Router>
    );
} 
export default Menu;

// <a href="#" className="logo"><img src={acao ? Logo2 : Logo} className={acao ? 'logoImg' : ''}/></a>