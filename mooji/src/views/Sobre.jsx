import './Sobre.css';
import LogoHT from '../images/logoHT.jpg';

function Sobre() {
    var texto = "Emoções são, sem dúvida alguma, grandes mistérios, todos passam por situações nas quais ficam confusos quanto a como expressá-las, e, após algumas pesquisas foi possível reparar que existem certos tipos de deficiências, síndromes, doenças, e problemas causados por acidentes, que possuem como consequência a perda parcial ou total da habilidade de expressão e comunicação de um indivíduo (autismo e catatonia, por exemplo). De modo geral, afetos são invisíveis até que haja manifestações corporais (seja por microexpressões, ou por eventos internos, como irregularidade da frequência cardíaca), por esse motivo muitas vezes passam despercebidos, principalmente em casos como os já citados, isto é, em determinados tipos de enfermidades. Esse cenário deixa uma incógnita a respeito do que se passa dentro de um outro alguém, e a possibilidade de descobrir. De fato, num primeiro momento parece uma ideia absurda, mas somente quando se explora a relação existente entre o coração e as emoções, é que o surreal desaparece. Descobrimos (após várias pesquisas) que certos padrões são seguidos pela frequência cardíaca perante a presença das emoções. Considerando essas informações, através de um sensor cardíaco Arduino (e outros componentes, como uma I.A., responsável por analisá-los), podemos, por meio de um algoritmo, saber se as pessoas estão felizes, tristes, bravas, etc., mostrando, através de um monitor, um emoji referente a cada tipo de emoção, o que seria útil tanto para o público em geral (pois saberiam o que eles mesmos estão sentindo, principalmente nos tempos de pandemia em que nos encontramos), quanto para o clínico (melhorando a interação entre médicos e pacientes portadores de certos males que impedem/dificultam a comunicação)."
    return(
        <div className="containerSobre">
            <div className="text">
            <text>{texto}</text>
            </div>
            <div className="verticalLine"></div>
            <img src={LogoHT} className="ht"/>
        </div>
    );
}
export default Sobre;