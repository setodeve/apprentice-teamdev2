import React from "react";
import "./frame.css";
import Sidebar from "../sidebar/";

export default function Frame({component}) {

  return (
    <>
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
