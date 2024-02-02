import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const GreenButton = (props) =>{
  return (
    <>
      <Link className="green_button" to={props.link}>{props.name}</Link>
    </>
  )
}

export default GreenButton;