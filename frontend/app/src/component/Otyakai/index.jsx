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
          id={props.id}
          img={props.img}
          title={props.title}
          detail={props.detail}
          date={props.date}
          place={props.place}
          host={props.host.name}
          profile={props.host.profile}
          age={props.host.age}
          host_id={props.host_id}
          join={props.join}
        />
      </div>
    </>
  )
}

export default Otyakai;