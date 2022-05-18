import React, { useState } from "react";
import "./nav.css";
import {BsInfoSquareFill, BsFillNutFill} from "react-icons/bs"
import {AiFillCloseSquare} from "react-icons/ai"

const Nav = () => {

    const [active, setActive] = useState (false);

    const toggle = () => {        
        setActive(!active);
    }

    if(localStorage.getItem('firstTime') !== 'si') {
        toggle();
        localStorage.setItem('firstTime', 'si');
    } 
    
    return (
        <nav>
            <div className="container nav__container">
                <button className="nav__button" onClick={toggle}><BsInfoSquareFill/></button>
                <h1 className="title">Uru Wordle</h1>
                <button className="nav__button"><BsFillNutFill/></button>
            </div>
            {active && (
            <div className="wrapper">
                <div className="background" onClick={toggle}></div>
                <div className="window animation-window">
                    <button onClick={toggle} className="closebtn"><AiFillCloseSquare/></button>
                    <div className="info-title">Cómo jugar</div>
                    <div className="info">
                        tenés 6 intentos para adivinar la palabra del día. 
                        después de cada intento, el color de las teclas se 
                        modificará para mostrarte qué tan cerca estás de acertar.
                    </div>
                    <div className="cell-wrapp">
                        <div className="cell-correct animation">
                            C
                        </div>
                        <div className="cell animation">
                            E
                        </div>
                        <div className="cell animation">
                            B
                        </div>
                        <div className="cell animation">
                            A
                        </div>
                        <div className="cell animation">
                            R
                        </div>
                    </div>
                    <div className="info">
                    la palabra contiene la letra C y está en el lugar correcto.
                    </div>
                    <div className="cell-wrapp">
                        <div className="cell animation">
                            B
                        </div>
                        <div className="cell animation">
                            O
                        </div>
                        <div className="cell-present animation">
                            T
                        </div>
                        <div className="cell animation">
                            O
                        </div>
                        <div className="cell animation">
                            N
                        </div>
                    </div>
                    <div className="info">
                        la palabra contiene la letra T pero está en el lugar incorrecto.
                    </div>
                    <div className="cell-wrapp">
                        <div className="cell animation">
                            C
                        </div>
                        <div className="cell-absent animation">
                            H
                        </div>
                        <div className="cell animation">
                            I
                        </div>
                        <div className="cell animation">
                            V
                        </div>
                        <div className="cell animation">
                            A
                        </div>
                    </div>
                    <div className="info">
                        la palabra no contiene la letra H. <br /> <br />
                        en UruWordle, la palabra del día es una relacionada con Uruguay.
                        puede ser del lunfardo, de uso popular en distintas generaciones 
                        y lugares del país, e incluso ser una cosa o figura icónica!
                    </div>
                </div>
            </div>
            )}
        </nav>
    )
}
export default Nav