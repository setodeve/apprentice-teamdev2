import React from "react";
import "./index.css";

const GreenButton = (props) =>{
  return (
    <>
      <button className="green_button">{props.name}</button>
    </>
  )
}

export default GreenButton;