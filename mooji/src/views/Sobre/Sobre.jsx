import React from 'react';
import './Sobre.css';

import LogoMoojiB from '../../assets/images/LogoMoojiB.png';

function Sobre(){
    var texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere euismod diam sed semper. Mauris vel nisi non ex fermentum suscipit. Vivamus at leo dui. Vestibulum tristique pretium eros id consectetur. Suspendisse ultricies ipsum at venenatis iaculis. Maecenas sodales nunc ornare pellentesque gravida.";
    return(
        <div>
            <div className="containerSobre">
                <div className="logoMoojiSobre"><img src={LogoMoojiB} /></div>
                <div className="verticalBar" id="verticalBarSobre"></div>
                <div className="textSobre">{texto}</div> 
            </div> 
        </div>
    );
} 
export default Sobre; 