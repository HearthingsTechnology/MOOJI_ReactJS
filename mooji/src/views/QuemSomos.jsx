import './QuemSomos.css';
import Samuel from '../images/samuel.jpeg';
import Lucas from '../images/lucas.jpeg';
import Raissa from '../images/raissa.jpeg';
import William from '../images/william.jpeg';

function QuemSomos() {
    return(
		<>
			<div className="titulo"><h1>Nosso Time</h1></div>
			<div class="time">
				<div class="card">
					<img src={Raissa} />
					<h1 className="nome">Raíssa Benini de Laia</h1>
					<h1>17 Anos</h1>
					<h1>Designer</h1>
				</div>
				<div class="card">
					<img src={Lucas} />
					<h1 className="nome">Lucas Seles Silva de Oliveira</h1>
					<h1>18 Anos</h1>
					<h1>Programador</h1>
				</div>
				<div class="card">
					<img src={William} />
					<h1 className="nome">William Gabriel de Barros</h1>
					<h1>18 Anos</h1>
					<h1>Programador</h1>
				</div>
				<div class="card">
					<img src={Samuel} />
					<h1 className="nome">Samuel Martins Francisco</h1>
					<h1>17 Anos</h1>
					<h1>Programador</h1>
				</div>
			</div>
		</>
    );
}

export default QuemSomos;