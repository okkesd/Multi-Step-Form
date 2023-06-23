import React, { useRef } from "react";

export default function Solid({one, two, three, four, num}){

    let backGround = "rgba(95, 182, 250)"

    return (
       
        <div className="main-left">
            <div className="step-1" style={num===1 ? {background: backGround}: null} onClick={one}>
                <button className="main-left-button" onClick={one}>1</button>
                <div className="step-right">
                    <p style={{opacity: 0.5}}>Step 1</p>
                    <p><strong>Your Info</strong></p>
                </div>
            </div>
            <div className="step-2" style={num===2 ? {background: backGround}: null} onClick={two}>
                <button className="main-left-button" onClick={two}>2</button>
                <div className="step-right">
                    <p style={{opacity: 0.5}}>Step 2</p>
                    <p><strong>Select Plan</strong></p>
                </div>
            </div>
            <div className="step-3" style={num===3 ? {background: backGround}: null} onClick={three}>
                <button className="main-left-button" onClick={three}>3</button>
                <div className="step-right">
                    <p style={{opacity: 0.5}}>Step 3</p>
                    <p><strong>Add-Ons</strong></p>
                </div>
            </div>
            <div className="step-4" style={num===4 ? {background: backGround}: null} onClick={four}>
                <button className="main-left-button" onClick={four}>4</button>
                <div className="step-right">
                    <p style={{opacity: 0.5}}>Step 4</p>
                    <p><strong>Summary</strong></p>
                </div>
            </div>
        </div>
                
    )
}