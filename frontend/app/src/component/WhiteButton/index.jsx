import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const WhiteButton = (props) =>{
  return (
    <>
      <Link className="white_button" to={props.link}>{props.name}</Link>
    </>
  )
}

export default WhiteButton;