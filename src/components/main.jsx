import React, { useEffect, useState } from "react";
// import all components
import Solid from "./solid";
import Form1 from "./form-1";
import Form2 from "./form-2";
import Form3 from "./form-3";
import Form4 from "./form-4";

export default function Main(){

    // state for the form number
    const [num,setNum] = useState(1)

    // states for the form 1 to use in inputs
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")

    // states for checking inputs in form 1
    const [nameTrue,isNameTrue] = useState(true)
    const [emailTrue,isEmailTrue] = useState(true)
    const [phoneTrue,isPhoneTrue] = useState(true)

    // states fro choosing the plan in form 2
    const [divFirst,setDivFirst] = useState(false)
    const [divSecond,setDivSecond] = useState(false)
    const [divThird,setDivThird] = useState(false)

    // states for adding add-ons
    const [isYearOrMonth,setYearOrMonth] = useState(false) // this one is for changing the prises on month or year
    const [addFirst,setAddFirst] = useState(false)
    const [addSecond,setAddSecond] = useState(false)
    const [addThird,setAddThird] = useState(false)

    // states for showing the informations at the end
    const [summary,setSummary] = useState("")
    const [showMessage, setShowMessage] = useState(false)
    const [price,setPrice] = useState(0)
    
    // add the plan to the summary to show to user at the end (setting price is for every plan is in form 2)
    // note: sum is a variable, summary is a state
    let plan
    let sum = {name: name, email: email, phone: phone}
    if (divFirst){
        plan = isYearOrMonth ? "Arcade (year)" : "Arcade (month)"
        sum.plan = plan
    } else if (divSecond){
        plan = isYearOrMonth ? "Advanced (year)" : "Advanced (month)"
        sum.plan = plan
    } else if (divThird){
        plan = isYearOrMonth ? "Pro (year)" : "Pro (month)"
        sum.plan = plan
    } else {
        plan = null
        sum.plan = plan
    }

    // add the price for every add-on that has choosen by user
    useEffect(()=>{
        setPrice(isYearOrMonth ? price => price+12 : price => price+1)
        console.log(price +" useeffect")
    },[addFirst])

    useEffect(()=>{
        setPrice(isYearOrMonth ? price => price+24 : price => price+2)
        console.log(price +" useeffect")
    },[addSecond])

    useEffect(()=>{
        setPrice(isYearOrMonth ? price => price+36 : price => price+3)
        console.log(price +" useeffect")
    },[addThird])

    // add add-ons to the summary
    let addOns
    if (addFirst){
        addOns = " Online Service"
        if (addSecond){
            addOns += ", Larger Storage"
            if(addThird){
                addOns += ", Customizable Profile"
            }
        }
    } else if (addSecond) {
        addOns ="Larger Storage"
        if (addThird) {
            addOns += ", Customizable Profile"
        }
        
    } else if (addThird){
        addOns = "Customizable Profile"
    } else {
        addOns = null
    }
    sum.addons = addOns

    // set summary to sum every time num changes (every time form changes)
    useEffect(()=>setSummary(sum),[num])

    // create forms that will be used one by one , send states and functions as props
    let currentForm 
    if (num===1){
        currentForm = <Form1 next={next} name={name} setName={setName} email={email} setEmail={setEmail}
        phone={phone} setPhone={setPhone} nameTrue={nameTrue} emailTrue={emailTrue} phoneTrue={phoneTrue}/>
    } else if (num===2){
        currentForm = <Form2 next={next} back={back} divFirst={divFirst} setDivFirst={setDivFirst}
        divSecond={divSecond} setDivSecond={setDivSecond} divThird={divThird} setDivThird={setDivThird}
        isYearOrMonth={isYearOrMonth} setYearOrMonth={setYearOrMonth} price={price} setPrice={setPrice}/>
    } else if (num===3){
        currentForm = <Form3 next={next} back={back} addFirst={addFirst} setAddFirst={setAddFirst}
        addSecond={addSecond} setAddSecond={setAddSecond} addThird={addThird} setAddThird={setAddThird} isYearOrMonth={isYearOrMonth}/>
    } else if (num===4){
        currentForm = <Form4 summary={summary} back={back} plan={plan} nameTrue={nameTrue}
        emailTrue={emailTrue} phoneTrue={phoneTrue} price={price} showMessage={showMessage} setShowMessage={setShowMessage}/>
    }

    // functions for next step buttons, valiate the name and email when going from form 1 to form 2, validate that plan is chosen in form 2
    function next(){
        if (num == 1){
        if (name==""){
            console.log("name=null")
            isNameTrue(false)
            isEmailTrue(email!="" && /^[a-zA-Z0-9.,]*@[a-zA-Z0-9.,]*$/.test(email))
        } else {
            isNameTrue(true)
            isEmailTrue(email!="" && /^[a-zA-Z0-9.,]*@[a-zA-Z0-9.,]*$/.test(email))
            if (emailTrue){
                setNum(num+1)
            } else {
                alert("email is invalid")
            }
        }
    } else if (num == 2) {
        plan ? setNum(num+1) : alert("plan didnt choosen")
    } else {
        setNum(num+1)
    }
    
}
    // function for back buttons
    function back(){
        setNum(num-1)
    }

    // functions for jumping one form to another directly (user can jump from form 1 to form 3 or to the end)
    function buttonOne(){
        setNum(1)
    }
    function buttonTwo(){
        setNum(2)
    }
    function buttonThree(){
        setNum(3)
    }
    function buttonFour(){
        setNum(4)
    }
    
    // return the Solid component (which will stay always on the page) and currentForm
    return (
        <>
        <h2 className="title">Multi-Step Form</h2>
        <div className="main"> 
            <Solid one={buttonOne} two={buttonTwo} three={buttonThree} four={buttonFour} num={num}/>
            {currentForm}
        </div>
        <p className="developer">Maden by Ökkeş Donbaloğlu</p>
        </>
    )
}