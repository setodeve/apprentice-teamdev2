import React from "react";
import "./index.css";
import OtyakaiImg from "../OtyakaiImg";
import OtyakaiInfo from "../OtyakaiInfo";

const Otyakai = (props) =>{
  return (
    <>
      <div className="card shadow">
        <OtyakaiImg img={props.img}/>
        <OtyakaiInfo 
        img={props.img}
        title={props.title}
        detail={props.detail}
        date={props.date}
        place={props.place}
        host={props.host}
      />
      </div>
    </>
  )
}

export default Otyakai;