import './App.css';
import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';

import Menu from './Menu/Menu.jsx';

import Home from './Home/Home.jsx';
import Portfolio from './Portfolio/Portfolio';
import Nos from './Nos/Nos';
import Sobre from './Sobre/Sobre';
import Contato from './Contato/Contato';

import LogoHTw from '../assets/images/LogoHTw.png';
import LogoMoojiW from '../assets/images/LogoMoojiW.png';
import Instagram from '../assets/images/instagram.png';
import Gmail from '../assets/images/gmail.png';

function App() {
  const [ativaCor, setAtivaCor] = useState(false);
  
  useEffect(function(){
    function posicaoScroll(){
      if(window.scrollY > 890){
        setAtivaCor(true);
      } else{
        setAtivaCor(false);
      }
    }

    window.addEventListener('scroll', posicaoScroll);
  }, []);

  return (
    <div class="container">
      <Menu acao={ativaCor}/>
      <article>
        <section id="home"><Home /></section>
        <section id="portifolio"><Portfolio /></section>
        <section id="nos"><Nos /></section>
        <section id="sobre"><Sobre /></section>
        <section id="contato"><Contato /></section>
      </article>
      <div className="containerRodape">
            <div className="titleRodape">Aqui para o futuro!</div>
            <div className="textRodape">2021 - Todos os direitos reservados</div>  
            <div className="logos">
                <div className="logoMoojiRodape"><img src={LogoMoojiW} /></div>
                <div className="logoHTRodape"><img src={LogoHTw} /></div>
            </div>
      </div>
    </div>
  );
}

export default App;

/*
<div className="social">
              <div className="gmail"><img src={Gmail} /></div>
              <div className="instagram"><img src={Instagram} /></div>
            </div>
*/

