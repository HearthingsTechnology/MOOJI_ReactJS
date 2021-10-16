import React from 'react';
import './Home.css';

import CellClock from '../../assets/images/cellclock.png';

function Home(){
    return(
        <div className="containerHome">
            <div className="contentHome">
                <div className="titleHome">Emoções</div>
                <div className="subtitleHome">Saudáveis e com estilo</div>
                <div className="textHome">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nunc et neque rhoncus eleifend. Phasellus ut massa tellus. Aenean.</div>
            </div>
            <div className="imageHome">
                <img src={CellClock} />
            </div>
        </div>
    );
}
export default Home;