import './Contato.css';
import Gmail from '../../images/gmail.png';
import Instagram from '../../images/instagram.png';

function Contato() {
    return(
        <>
            <div id="campos">
                <h2>CONTATE-NOS</h2>
			    <form>
				    <input type="text" name="nome" id="nome" placeholder="Nome" />
				    <input type="email" name="email" id="email" placeholder="E-mail" />
				    <textarea placeholder="Mensagem" rows="10" id="mensagem"></textarea>
				    <button type="submit" onsubmit="" id="botao">Enviar</button>
			    </form>
            </div>
            <div className="redesSociais">
                <div className="icons"><a href="mailto:societybracelet@gmail.com?Subject=Título%20da%20mensagem"><img src={Gmail} /></a></div>
                <div className="icons"><a href="https://www.instagram.com/_mooji.bs/" target="_blank" rel="noreferrer"><img src={Instagram} /></a></div>
            </div>
        </>
    )
}
export default Contato;