import React from 'react';
import './Nos.css';

import LogoHTb from '../../assets/images/LogoHTb.png';
import LogoMoojiB from '../../assets/images/LogoMoojiB.png';
import Lucas from '../../assets/images/lucas.jpg';
import Raissa from '../../assets/images/raissa.jpg';
import William from '../../assets/images/william.jpg';
import Samuel from '../../assets/images/samuel.jpg';

function Nos(){
    var texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere euismod diam sed semper. Mauris vel nisi non ex fermentum suscipit. Vivamus at leo dui. Vestibulum tristique pretium eros id consectetur. Suspendisse ultricies ipsum at venenatis iaculis. Maecenas sodales nunc ornare pellentesque gravida.";
    return(
        <div className="containerNos">
            <div className="apresentationNos">
                <div className="titleNos"> Olá, nós somos a </div>
                <div className="logoHTNos" id="logoHTNos1"><img src={LogoHTb} /></div> 
            </div>
            <div className="contentNos1">
                <div className="textNos" id="textNos1">{texto}</div>  
                <div className="creators"> 
                    <div className="textNos" > E nos somos os criadores do: </div> 
                    <div className="logoMoojiNos"><img src={LogoMoojiB} /></div>    
                </div>
            </div> 
            
            <div className="contentNos2">
                <div className="textNos" id="textNos2">{texto}</div>
                <div className="verticalBar"></div>
                <div className="logoHTNos" id="logoHTNos2"><img src={LogoHTb} /></div> 
            </div>

            <div className="contentNos3">
                <div className="titleNos" id="titleNos2"> Lorem ipsum dolor sit amet, consectetur </div>

                <div className="quemSomos">
                    <div className="card">
                        <div className="imageNos"><img src={Lucas} /></div>
                        <div className="subtitleCard">Lucas <p>programador</p></div>     
                    </div>
                    <div className="card">
                        <div className="imageNos"><img src={Raissa} /></div>
                        <div className="subtitleCard">Raíssa <p>designer</p></div>     
                    </div>
                    <div className="card">
                        <div className="imageNos"><img src={William} /></div>
                        <div className="subtitleCard">William <p>programador</p></div>     
                    </div>
                    <div className="card">
                        <div className="imageNos"><img src={Samuel} /></div>
                        <div className="subtitleCard">Samuel <p>programador</p></div> 
                    </div>
                </div>

                <div className="logoHTNos" id="logoHTNos3"><img src={LogoHTb} /></div>
            </div>
        </div>
    );
} 
export default Nos;

/* <div className="LogoHTNos"><img src={LogoHTb} /></div>  */