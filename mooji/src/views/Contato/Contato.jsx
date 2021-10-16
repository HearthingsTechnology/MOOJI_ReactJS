import React from 'react';
import './Contato.css'

function Contato(){

    return(
        <div className="containerContato">
            <div className="titleContato"> Nos envie uma mensagem! </div>
            <form className="formContato">
                <input type="text" name="nome" id="nome" placeholder="Nome" />
                <input type="email" name="email" id="email" placeholder="E-mail" />
                <textarea placeholder="Mensagem" rows="10" id="mensagem"></textarea>
                <button type="submit" onsubmit="" id="botao">Enviar</button>
			</form>
        </div>
    );
}
export default Contato;