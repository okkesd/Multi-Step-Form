import { React, useState } from "react";

export default function Form3({next, back, addFirst, setAddFirst, addSecond, setAddSecond, addThird,
                               setAddThird, isYearOrMonth, theme}){

    // set what's gonna happen when user clicks on an add-on
    let styleFirst = addFirst ? "2px solid blue": "none"
    let styleSecond = addSecond ? "2px solid blue" : "none"
    let styleThird = addThird ? "2px solid blue" : "none" 



    return (
        <div className="form-3">
        <h1 className="f3-h1">Pick add-ons</h1>

        {/* add-on 1 */}
        <p style={{ opacity: "0.5", marginBottom: 30 }}>Add-ons help emphance your gaming experience</p>
        <div className="add-ons" id="add-on-1" style={{border : styleFirst}} onClick={()=>setAddFirst(!addFirst)}>
            <div className="add-ons-left" >
                <div>
                <strong>Online Service</strong>
                <div style={{ opacity: "0.5", marginTop: 3 }} id="bir">Acces to multiplayer games</div>
                </div>
            </div>
            {isYearOrMonth ? <div className="add-ons-right">+$12/yr</div>: <div className="add-ons-right">+$1/mo</div>}
        </div>

        {/* add-on 2 */}
        <div className="add-ons" id="add-on-2" style={{border : styleSecond}} onClick={()=>setAddSecond(!addSecond)}>
            <div className="add-ons-left">
                <div>
                <strong>Larger storage</strong>
                <div style={{ opacity: "0.5", marginTop: 3 }} id="bir">Extra 1TB of cloud save</div>
                </div>
            </div>
            {isYearOrMonth ? <div className="add-ons-right">+$24/yr</div>: <div className="add-ons-right">+$2/mo</div>}
        </div>

        {/* add-on 3 */}
        <div className="add-ons" id="add-on-3" style={{border : styleThird}} onClick={()=>setAddThird(!addThird)}>
            <div className="add-ons-left">
                <div>
                <strong>Customizable profile</strong>
                <div style={{ opacity: "0.5", marginTop: 3 }} id="bir">Custom theme on your profile</div>
                </div>
            </div>
            {isYearOrMonth ? <div className="add-ons-right">+$36/yr</div> : <div className="add-ons-right">+$3/mo</div>}
        </div>
        
        <div className="form-3-buttons">
            <button className={theme ? "form-3-back-dark" : "form-3-back"} onClick={back}>Go Back</button>
        </div>
        <div className="form-3-buttons">
            <button className="form-3-next" onClick={next}>Next Step</button>
        </div>
        </div>
    )
} 