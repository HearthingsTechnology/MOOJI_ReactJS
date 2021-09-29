import './App.css';
import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';

import Menu from './Menu/Menu.jsx';

import Home from './Home/Home.jsx';
/*import QuemSomos from './QuemSomos/QuemSomos';
import Portifolio from './Portifolio/Portifolio';
import Contato from './Contato/Contato'
import Sobre from './Sobre/Sobre';
*/

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
        <section id="portifolio"></section>
        <section id="nos"></section>
        <section id="sobre"></section>
        <section id="contato"></section>
      </article>
      <div className="rodape"><h3>Desenvolvido pela equipe do <a href="#quemsomos">MOOJI</a> : )</h3></div>
    </div>
  );
}

export default App;


