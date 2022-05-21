import React from "react";
import { useState } from "react";
import "./grid.css";
import Keyboard from "./Keyboard"
import {AiFillCloseSquare} from "react-icons/ai"
import { VALID_GUESSES } from "../constants/validGuesses.ts"

const Grid = () => {

    var realWord = ["B", "O", "N", "D", "I"];
    const [word, setWord] = useState("");
    const [cellclass, setCellClass] = useState(["cell", "cell", "cell", "cell", "cell", "cell", "cell", "cell","cell", "cell", "cell", "cell", "cell", "cell", "cell", "cell", "cell", "cell", "cell", "cell", "cell", "cell", "cell", "cell","cell", "cell", "cell", "cell", "cell", "cell"])
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(4)
    const [win, setWin] = useState(false)

    const toggle = () => {        
        setWin(!win);
    }

    const concat = (value) => {
        if(word.length <= max) {
            setWord(word + value);
        }
    }

    const confirm = () => {
        if(VALID_GUESSES.includes(word.slice(min,max+1).toLocaleLowerCase())) {
            if(((word.length) % (max + 1)) === 0) {
                var realWordAux = realWord;
                var borrar = false;
                for(var i=min, l=0; i<= max; i++, l++) {
                    if(word[i] === realWordAux[l]) {
                        cellclass[i]="cell-correct animation-rotate";
                        realWordAux[l] = "";
                    } 
                }
                for(var i=min, l=0; i<= max; i++, l++) {
                    borrar= false;
                    for(var j=0; j<= 4; j++) {
                        if(word[i] === realWordAux[j] && i !== j && !borrar) {
                            cellclass[i] = "cell-present animation-rotate";
                            realWordAux[j] = "";
                            borrar = true;
                        }
                    }
                if(cellclass[i] === "cell") {
                    cellclass[i] = "cell-absent animation-rotate";
                }
                }
                setMin(min + 5);
                setMax(max + 5);
                if(cellclass[min] === "cell-correct animation-rotate" && cellclass[min+1] === "cell-correct animation-rotate" && cellclass[min+2] === "cell-correct animation-rotate" && cellclass[min+3] === "cell-correct animation-rotate" && cellclass[min+4] === "cell-correct animation-rotate") {
                    setWin(true);
                }
            }
        }
    }

    const del = () => {
        if(word.length > min) {    
            setWord(word.slice(0,word.length-1))
        }
    }

    return (
        <grid>
            <div className="cell-wrapp">
                <div className={cellclass[0]}>{word[0]}</div>
                <div className={cellclass[1]}>{word[1]}</div>
                <div className={cellclass[2]}>{word[2]}</div>
                <div className={cellclass[3]}>{word[3]}</div>
                <div className={cellclass[4]}>{word[4]}</div>
            </div>
            <div className="cell-wrapp">
                <div className={cellclass[5]}>{word[5]}</div>
                <div className={cellclass[6]}>{word[6]}</div>
                <div className={cellclass[7]}>{word[7]}</div>
                <div className={cellclass[8]}>{word[8]}</div>
                <div className={cellclass[9]}>{word[9]}</div>
            </div>
            <div className="cell-wrapp">
                <div className={cellclass[10]}>{word[10]}</div>
                <div className={cellclass[11]}>{word[11]}</div>
                <div className={cellclass[12]}>{word[12]}</div>
                <div className={cellclass[13]}>{word[13]}</div>
                <div className={cellclass[14]}>{word[14]}</div>
            </div>
            <div className="cell-wrapp">
                <div className={cellclass[15]}>{word[15]}</div>
                <div className={cellclass[16]}>{word[16]}</div>
                <div className={cellclass[17]}>{word[17]}</div>
                <div className={cellclass[18]}>{word[18]}</div>
                <div className={cellclass[19]}>{word[19]}</div>
            </div>
            <div className="cell-wrapp">
                <div className={cellclass[20]}>{word[20]}</div>
                <div className={cellclass[21]}>{word[21]}</div>
                <div className={cellclass[22]}>{word[22]}</div>
                <div className={cellclass[23]}>{word[23]}</div>
                <div className={cellclass[24]}>{word[24]}</div>
            </div>
            <div className="cell-wrapp">
                <div className={cellclass[25]}>{word[25]}</div>
                <div className={cellclass[26]}>{word[26]}</div>
                <div className={cellclass[27]}>{word[27]}</div>
                <div className={cellclass[28]}>{word[28]}</div>
                <div className={cellclass[29]}>{word[29]}</div>
            </div>
            <Keyboard
                concat={concat}
                confirm={confirm}
                del={del}
            />
            {win && (
            <div className="wrapper">
                <div className="background" onClick={toggle}></div>
                <div className="window animation-window">
                    <button onClick={toggle} className="closebtn"><AiFillCloseSquare/></button>
                    <div className="info-title">GANASTE WACHIN</div>
                    <div className="info">
                        Te ganaste un besito UwU
                    </div>
                </div>
            </div>
            )}
        </grid>
    )
}
export default Grid
