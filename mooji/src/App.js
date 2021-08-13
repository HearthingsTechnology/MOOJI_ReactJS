import './App.css';
import React, { useEffect, useState } from 'react';
import Mooji from './views/Mooji.jsx';
import Menu from './views/Menu.jsx';
import QuemSomos from './views/QuemSomos';
import Portifolio from './views/Portifolio';
import Contato from './views/Contato'
import Sobre from './views/Sobre';

function App() {
  const [ativaCor, setAtivaCor] = useState(false);

  useEffect(function(){
    function posicaoScroll(){
      if(window.scrollY > 900){
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


