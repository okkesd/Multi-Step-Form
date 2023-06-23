import React, { useState } from "react";

export default function OrderButton ({plan, nameTrue, emailTrue, phoneTrue, setShowMessage}){

const [animate, setAnimate] = useState(false);


const handleClick = () => {

  // check everthingv is exist
  if (plan && nameTrue && emailTrue && phoneTrue){

  // animation duration for complete order button
  if (!animate) {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 10000);
  }

  // set the timer for order has taken text to appear and disapear
  setTimeout(() => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 5000);
  }, 10000);
  } else {alert("order is not possible")}
}

  return (
  <button className={`order ${animate ? 'animate' : ''}`} onClick={handleClick}>
    <span className="default">Complete Order</span>
    <span className="success">
      Order Placed
      <svg viewBox="0 0 12 10">
        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
      </svg>
    </span>
    <div className="box"></div>
    <div className="truck">
      <div className="back"></div>
      <div className="front">
        <div className="window"></div>
      </div>
      <div className="light top"></div>
      <div className="light bottom"></div>
    </div>
    <div className="lines"></div>
  </button>
);
};
