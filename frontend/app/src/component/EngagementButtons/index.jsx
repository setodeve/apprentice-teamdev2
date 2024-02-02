import React,{useEffect, useState} from "react";
import "./index.css";
import WhiteButton from "../WhiteButton";
import GreenButton from "../GreenButton";
import Like from "../Like";

const EngagementButtons = (props) =>{
  const [joinState,setjoinState] = useState(false)
  function handleClick(e){
    e.preventDefault();
    setjoinState(!joinState)
  }

  useEffect(()=>{
    
  },[joinState])
  return (
    <>
      <div className="right-info">
        <Like />
        <span onClick={handleClick}>
        {
          !joinState ?
            <WhiteButton name="行く?"/>
          :
            <GreenButton name="行きます!!"/>
        }
        </span>

      </div>
    </>
  )
}

export default EngagementButtons;