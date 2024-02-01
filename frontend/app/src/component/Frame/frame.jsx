import React, { Children } from "react";
import "./frame.css";
import Sidebar from "../Sidebar";
import ProfileInfo from "../ProfileInfo/profileInfo";

export default function Frame({component}) {

  return (
    <>
      <div className="header">
        {/* <Header></Header> */}
      </div>
      <div className="main-area">
        <div className="left-area">
          <Sidebar></Sidebar>
        </div>
        <div className="right-area">
          {component}
        </div>
      </div>
    </>
  );
}
