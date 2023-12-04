import React, { useState } from "react";
// import phone-input component
import PhoneInputGfg from "./phone-input";

export default function Form1({next, setName, name, setEmail, email, phone, setPhone, nameTrue, emailTrue, phoneTrue, theme}){    

    return (
        <div className="main-right form-1-main">
            <h1>Personal Info</h1>
            <p style={{opacity:0.3, marginBottom:25}}>Please provide your name, email addres and phone number.</p>
            <div className="form-1-form">
 
                 {/* controlled name input that has error states depends on nameTrue state */}
                <label htmlFor="form-1-name" style={{color: nameTrue ? theme? "white" :"black" : "red"}}>Name *</label> <br />
                <input type="text" name="name" id={nameTrue? "form-1-name" : "form-1-name-wrong"} className={theme ? "form-1-input-dark" : ""}
                placeholder= {nameTrue ? "Name": "Name should be entered"} value={name} style={{borderColor: nameTrue ? "rgba(49, 46, 46, 0.2)" : "red"}} 
                onChange={(e)=> setName(e.target.value)} autoComplete="off"/> <br />
                
                {/* controlled email input that has error states depends on emailTrue state */}
                <label htmlFor="form-1-email" style={{color: emailTrue ? theme? "white" :"black" : "red"}}>Email Address *</label> <br />
                <input type="email" name="Email-address" id={emailTrue ? "form-1-email" : "form-1-email-wrong"} placeholder={emailTrue ? "Email" : "Email must be entered"} value={email} 
                onChange={(e)=> setEmail (e.target.value)} autoComplete="off" className={theme ? "form-1-input-dark" : ""}
                style={{borderColor: emailTrue ? "rgba(49, 46, 46, 0.2)" : "red"}}/> <br />
                
                {/* controlled phone number input */}
                <label htmlFor="form-1-tel" style={{color: phoneTrue ? theme? "white" :"black" : "red"}}>Phone Number *</label> <br />
                <input type="text" name="Phone-number" id="form-1-tel" value={phone} onChange={(e)=> {setPhone(e.target.value)}} autoComplete="off"
                className={theme ? "form-1-input-dark" : ""}/>
            </div>
            {/* next step button */}
            <div className="form-1-buttons">
                <button className="form-1-next" onClick={next}>Next Step</button>
            </div>
        </div>
    )
}