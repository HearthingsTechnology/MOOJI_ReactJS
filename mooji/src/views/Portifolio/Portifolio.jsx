import './Portifolio.css';
import Alegria from '../../images/alegria.gif';
import Tristeza from '../../images/tristeza.gif';
import Normal from '../../images/normal.gif';
import AnimacaoMooji from '../../images/animacaoMooji.gif';

function Portifolio() {
    return(
       
        <div id="container">
            <div className="content">
                <img src={Tristeza} className="imgPortifolio"/>
                <h3>Animação "tristeza" - Display LCD.</h3>
            </div>
            <div className="content">
                <img src={Alegria} className="imgPortifolio"/>
                <h3>Animação "alegria" - Display LCD.</h3>
            </div>
            <div className="content">
                <img src={Normal} className="imgPortifolio"/>
                <h3>Animação "normal" - Display LCD.</h3>
            </div>
            <div className="content">
                <img src={AnimacaoMooji} className="imgPortifolio"/>
                <h3>Animação exemplificando o MOOJI numa situação real.</h3>
            </div>
            <div className="content">
                <img src={Alegria} className="imgPortifolio"/>
                <h3>Lorem ipsum dolor sit amet.</h3>
            </div>
            <div className="content">
                <img src={Alegria} className="imgPortifolio"/>
                <h3>Lorem ipsum dolor sit amet.</h3>
            </div>
            <div className="content">
                <img src={Alegria} className="imgPortifolio"/>
                <h3>Lorem ipsum dolor sit amet.</h3>
            </div>
            <div className="content">
                <img src={Alegria} className="imgPortifolio"/>
                <h3>Lorem ipsum dolor sit amet.</h3>
            </div>
        </div>
           
    );
}
export default Portifolio;