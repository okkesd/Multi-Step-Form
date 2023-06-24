import {React, useRef, useState} from "react";


export default function Form2({next, back, divFirst, setDivFirst, divSecond, setDivSecond, 
    divThird, setDivThird, isYearOrMonth, setYearOrMonth, price, setPrice, theme}){

    // set what gonna happen to plan-cards when user choose a plan
    let styleFirst = divFirst ? theme ? "4px solid rgb(121, 137, 166)" :"3px solid purple" : "1px solid rgba(49, 46, 46, 0.2)"
    let styleSecond = divSecond ?  theme ? "4px solid rgb(121, 137, 166)" :"3px solid purple": "1px solid rgba(49, 46, 46, 0.2)"
    let styleThird = divThird ? theme ? "4px solid rgb(121, 137, 166)" :"3px solid purple" :"1px solid rgba(49, 46, 46, 0.2)"
    let backFirst = divFirst ? "rgb(207, 208, 209)" : "white"
    let backSecond = divSecond ? "rgb(207, 208, 209)" : "white"
    let backThird = divThird ? "rgb(207, 208, 209)" : "white"

    // set the functions when user chooses a plan and set the price state
    function handleClick(){
        setDivFirst(!divFirst)
        setDivSecond(false)
        setDivThird(false)
        if (isYearOrMonth){
            setPrice(108)
        } else {
            setPrice(9)
        }
    }
    function handleClickSecond(){
        setDivFirst(false)
        setDivSecond(!divSecond)
        setDivThird(false)
        if (isYearOrMonth){
            setPrice(144)
        } else {
            setPrice(12)
        }
    }
    function handleClickThird(){
        setDivFirst(false)
        setDivSecond(false)
        setDivThird(!divThird)
        if (isYearOrMonth){
            setPrice(180)
        } else {
            setPrice(15)
        }
    }

    // change the price text when user click on checkbox to switch to monthly or to yearly
    let moye = isYearOrMonth ? "yr" : "mo"

    /* there is also another way. Instead of holding the price and chaning it every time user do something,
       you can add an onclick function on next step button in form 2, and calculate the price based on user's choice */
    
    // change the state when user clicks on checkbox to switch to monthly or to yearly and update the price      
    let checkbox = useRef()
    function handleChange(){
        setYearOrMonth(!isYearOrMonth) 
        setPrice(isYearOrMonth ? price => price/12 : price => price*12)
    }
    
    return(
        <div className="main-right form-2-main">
            <h1 className="f2-h1">Select your plan</h1>
            <p style={{ opacity: "0.5", marginBottom: 30 }}>You have the option of monthly or yearly billing.</p>
            <div className="cards">

                {/* first plan */}
                <div className="cards-div" style={{border : styleFirst, backgroundColor: theme ? "rgb(35, 79, 161)" : backFirst}} onClick={handleClick}>
                    <img src={process.env.PUBLIC_URL + '/img/icon-arcade.png'} width={40} alt="olmuyor"/>
                    <strong><p className="strong-p">Arcade</p></strong>
                    {isYearOrMonth ? <p style={{ opacity: "0.5" }}>$108/{moye}</p>: <p style={{ opacity: "0.5" }}>$9/{moye}</p>}
                </div>

                {/* second plan */}
                <div className="cards-div" style={{border: styleSecond, backgroundColor: theme ? "rgb(35, 79, 161)" : backSecond}} onClick={handleClickSecond}>
                    <img src={process.env.PUBLIC_URL + '/img/icon-advanced.png'} />
                    <strong><p className="strong-p">Advanced</p></strong>
                    {isYearOrMonth ? <p style={{ opacity: "0.5" }}>$144/{moye}</p>: <p style={{ opacity: "0.5" }}>$12/{moye}</p>}
                </div>

                {/* third plan */}
                <div className="cards-div" style={{border: styleThird, backgroundColor: theme ? "rgb(35, 79, 161)" : backThird}} onClick={handleClickThird}>
                    <img src={process.env.PUBLIC_URL + '/img/icon-pro.png'}/>
                    <strong><p className="strong-p">Pro</p></strong>
                    {isYearOrMonth ? <p style={{ opacity: "0.5" }}>$180/{moye}</p>: <p style={{ opacity: "0.5" }}>$15/{moye}</p>}
                </div>
            </div>
        {/* monthly yearly checkbox */}
        <div className={theme ? "main-div-checkbox-dark" : "main-div-checkbox"}>
            <div className="div-checkbox">
                <p>Monthly</p>
                <label className="switch">
                <input type="checkbox" className="checkbox" ref={checkbox} checked={isYearOrMonth} onChange={handleChange}/>
        <div className="slider"></div>
            </label>
            <p>Yearly</p> 
        </div>
        </div>

        <div className="form-2-buttons">
            <button className={theme ? "form-2-back-dark":"form-2-back"} onClick={back}>Go Back</button>
        </div>
        <div className="form-2-buttons">
            <button className="form-2-next" onClick={next}>Next Step</button>
        </div>
    </div>
    )
}
/**
 * 3 tane divin kendi state'leri olacak
 * 3 state bir onclick eventlistener'ı ile true ile false arasında değişecek
 * her div için ayrı bir değişken oluşturulacak 
 * her değişkene kendi div'inin state'ine bağlı olarak bazı text'ler verilecek
 * o değişkenler kendi div'lerinin style'ına atanacak
 */