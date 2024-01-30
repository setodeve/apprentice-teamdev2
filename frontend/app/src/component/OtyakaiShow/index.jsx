import React from "react";
import "./index.css";
import OtyakaiImg from "../OtyakaiImg";
import OtyakaiInfo from "../OtyakaiInfo";

const OtyakaiShow = (props) =>{
  return (
    <>
      <div className="card">
        <OtyakaiImg img={props.img}/>
        <OtyakaiInfo 
        img={props.img}
        title={props.title}
        detail={props.detail}
        date={props.date}
        place={props.place}
        host={props.host}
      />
       <img className="map" src={props.placeImg} alt="開催場所" />

       <div className="other-container">
        <div className="other-otyakai-title">他のお茶会を見てみる</div>
        <div className="other-otyakai">
          <div>[第100回] プログラミング好きのミートアップ</div>
        </div>
        <div className="other-otyakai">
          <div>[第100回] プログラミング好きのミートアップ</div>
        </div>
        <div className="other-otyakai">
          <div>[第100回] プログラミング好きのミートアップ</div>
        </div>
       </div>
      </div>

    </>
  )
}

export default OtyakaiShow;