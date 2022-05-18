import React from "react"
import "./keyboard.css"
import {FiDelete} from "react-icons/fi"


export const Keyboard = ({concat, confirm, del}) => {
    
    const write = (event) => {
        if((event.currentTarget.id >= "A" && event.currentTarget.id <= "Z" && event.currentTarget.className === "letter") || (event.currentTarget.id === "Ñ")) {
            concat(event.currentTarget.id);
        } else {
            if(event.currentTarget.id === "ENVIAR") {
                confirm();
            } else {
                if(event.currentTarget.id === "DEL") {
                    del();
                }
            }
        }
    }

    return(
        <keyboard>
            <div className="wrapp-letters">
                <div className="letter" id="Q" onClick={write}>Q</div>
                <div className="letter" id="W" onClick={write}>W</div>
                <div className="letter" id="E" onClick={write}>E</div>
                <div className="letter" id="R" onClick={write}>R</div>
                <div className="letter" id="T" onClick={write}>T</div>
                <div className="letter" id="Y" onClick={write}>Y</div>
                <div className="letter" id="U" onClick={write}>U</div>
                <div className="letter" id="I" onClick={write}>I</div>
                <div className="letter" id="O" onClick={write}>O</div>
                <div className="letter" id="P" onClick={write}>P</div>
            </div>
            <div className="wrapp-letters">
                <div className="letter" id="A" onClick={write}>A</div>
                <div className="letter" id="S" onClick={write}>S</div>
                <div className="letter" id="D" onClick={write}>D</div>
                <div className="letter" id="F" onClick={write}>F</div>
                <div className="letter" id="G" onClick={write}>G</div>
                <div className="letter" id="H" onClick={write}>H</div>
                <div className="letter" id="J" onClick={write}>J</div>
                <div className="letter" id="K" onClick={write}>K</div>
                <div className="letter" id="L" onClick={write}>L</div>
                <div className="letter" id="Ñ" onClick={write}>Ñ</div>
            </div>
            <div className="wrapp-letters">
                <div className="letter-send" id="ENVIAR" onClick={write}>ENVIAR</div>
                <div className="letter" id="Z" onClick={write}>Z</div>
                <div className="letter" id="X" onClick={write}>X</div>
                <div className="letter" id="C" onClick={write}>C</div>
                <div className="letter" id="V" onClick={write}>V</div>
                <div className="letter" id="B" onClick={write}>B</div>
                <div className="letter" id="N" onClick={write}>N</div>
                <div className="letter" id="M" onClick={write}>M</div>
                <div className="letter-delete" id="DEL" onClick={write}><FiDelete></FiDelete></div>
            </div>
        </keyboard>
    )
}
export default Keyboard