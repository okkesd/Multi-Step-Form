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
    const [showMessage, setShowMessage] = useState(false) // order taken message's state
    const [price,setPrice] = useState(0) // price's state
    const [theme,setTheme] = useState(false) // dark-theme or light-theme state
    
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
        phone={phone} setPhone={setPhone} nameTrue={nameTrue} emailTrue={emailTrue} phoneTrue={phoneTrue} theme={theme}/>
    } else if (num===2){
        currentForm = <Form2 next={next} back={back} divFirst={divFirst} setDivFirst={setDivFirst}
        divSecond={divSecond} setDivSecond={setDivSecond} divThird={divThird} setDivThird={setDivThird}
        isYearOrMonth={isYearOrMonth} setYearOrMonth={setYearOrMonth} price={price} setPrice={setPrice} theme={theme}/>
    } else if (num===3){
        currentForm = <Form3 next={next} back={back} addFirst={addFirst} setAddFirst={setAddFirst}
        addSecond={addSecond} setAddSecond={setAddSecond} addThird={addThird} setAddThird={setAddThird}
        isYearOrMonth={isYearOrMonth} theme={theme}/>
    } else if (num===4){
        currentForm = <Form4 summary={summary} back={back} plan={plan} nameTrue={nameTrue}
        emailTrue={emailTrue} phoneTrue={phoneTrue} price={price} showMessage={showMessage} setShowMessage={setShowMessage} theme={theme}/>
    }

    // functions for next step buttons, valiate the name and email when going from form 1 to form 2, validate that plan is chosen in form 2
    function next() {
        if (num === 1) {
          const isNameValid = name !== "";
          const isEmailValid = email !== "" && /^[a-zA-Z0-9.,]*@[a-zA-Z0-9.,]*$/.test(email);
      
          isNameTrue(isNameValid);
          isEmailTrue(isEmailValid);
      
          if (isNameValid && isEmailValid) {
            setNum(num + 1);
          } else {
            alert("Email is invalid");
          }
        } else if (num === 2) {
          if (plan) {
            setNum(num + 1);
          } else {
            alert("Plan hasn't been chosen");
          }
        } else {
          setNum(num + 1);
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

    function changeTheme(){
        setTheme(!theme)
        console.log(theme)
        console.log("theme değiştirildi")
    }
    

    // return the Solid component (which will stay always on the page) and currentForm
    return (
        <div className={theme ? "full-body-dark":"full-body"}>
        <div className="navbar">
        <h2 className="title">Multi-Step Form</h2>
            <label className="switch" >
                <span className="sun">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g fill="#ffd43b">
                        <circle r={5} cy={12} cx={12} />
                        <path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z" />
                    </g>
                </svg>
                </span>
                <span className="moon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
                    </svg>
                </span>
                    <input type="checkbox" className="input-theme" onChange={changeTheme}/>
                <span className="slider-theme" />
            </label>
            </div>
        <div className={theme?"main-dark":"main"}> 
            <Solid one={buttonOne} two={buttonTwo} three={buttonThree} four={buttonFour} num={num}/>
            {currentForm}
        </div>
        <div className="information">
            <a href="https://github.com/okkesd/Multi-Step-Form" className="link-to-github" target="_blank">Click here for the project's GitHub link</a>
            <p className="developer">Made by Ökkeş Donbaloğlu</p>
        </div>
        
        </div>
    )
}
