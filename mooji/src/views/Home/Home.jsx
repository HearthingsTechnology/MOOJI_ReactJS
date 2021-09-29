import React from 'react';
import './Home.css';

import CellClock from '../../assets/images/cellclock.png';

function Home(){
    return(
        <div className="container">
            <div className="content">
                <h1 className="title">Emoções</h1>
                <h1 className="subtitle">Saudáveis e com estilo</h1>
                <h1 className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nunc et neque rhoncus eleifend. Phasellus ut massa tellus. Aenean.</h1>
            </div>
            <div className="images">
                <img src={CellClock} />
            </div>
        </div>
    );
}
export default Home;