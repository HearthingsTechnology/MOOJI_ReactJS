import './App.css';
import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';

import Mooji from './Mooji/Mooji.jsx';
import Menu from './Menu/Menu.jsx';
import QuemSomos from './QuemSomos/QuemSomos';
import Portifolio from './Portifolio/Portifolio';
import Contato from './Contato/Contato'
import Sobre from './Sobre/Sobre';

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
        <section id="home"><Mooji /></section>
        <section id="portifolio"><Portifolio /></section>
        <section id="sobre"><Sobre /></section>
        <section id="quemsomos"><QuemSomos /></section>
        <section id="contato"><Contato /></section>
      </article>
      <div className="rodape"><h3>Desenvolvido pela equipe do <a href="#quemsomos">MOOJI</a> : )</h3></div>
    </div>
  );
}

export default App;


