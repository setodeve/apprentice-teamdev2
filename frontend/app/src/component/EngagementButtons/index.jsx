import React from "react";
import "./index.css";
import WhiteButton from "../WhiteButton";
import Like from "../Like";

const EngagementButtons = (props) =>{
  return (
    <>
      <div className="right-info">
        <Like />
        <WhiteButton name="行く"/>
      </div>
    </>
  )
}

export default EngagementButtons;