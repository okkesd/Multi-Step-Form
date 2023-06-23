import React from "react";
import OrderButton from "./order-button";

export default function Form4({summary, back, nameTrue, emailTrue, phoneTrue, price, showMessage, setShowMessage}){
    
    // destruct the summary
    let {name, email, phone, plan, addons} = summary
    console.log(name)
    console.log(email)
    console.log(phone)
    console.log(plan)
    console.log(addons)
    console.log(price)

    // set the non chosens
    const spanColorName = name ? 'black' : 'red'
    const spanColorEmail = email ? 'black' : 'red'
    const spanColorPhone = phone ? 'black' : 'red'
    const spanColorPlan = plan ? 'black' : 'red'
    const spanColorAddOns = addons ? 'black' : 'red'

    return (
        <div className="form-4">
            <h3>Name: <span style={{opacity:0.7, color: spanColorName}}>{name ? name : "'name yok'"}</span></h3>
            <h3>Email: <span style={{opacity:0.7, color: spanColorEmail}}>{email ? email : "'email yok'"}</span></h3>
            <h3>Phone Number: <span style={{opacity:0.7, color: spanColorPhone}}>{phone ? "+"+phone : "'number yok'"}</span></h3>
            <h4>Le Plan: <span style={{opacity:0.7, color: spanColorPlan}}>{plan ? plan : "'il n'y a pas de plan'"}</span></h4>
            <h4>Les Add-ons: <span style={{opacity:0.7, color: spanColorAddOns}}>{addons ? addons : "'il n'y a pas des add-ons'"}</span></h4>
            <h5>Price : ${price}</h5>

            <div className="form-3-buttons"> 
            <button className="form-3-back" onClick={back}>Go Back</button>
            <OrderButton plan={plan} nameTrue={nameTrue} emailTrue={emailTrue} phoneTrue={phoneTrue} setShowMessage={setShowMessage}/>
            
            <h4 className={`order-widget ${showMessage ? 'show' : ''}`}>Order has Taken</h4>
            </div>   
        </div>
    )
} 