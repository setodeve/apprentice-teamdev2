import React from "react";
import "./inputArea.css";

export default function InputArea({label="label Propsに値を与えてください", type="text", defaultValue="" ,func=""}) {

  return (
    <>
      <div className="input-area">
        <span className="input-label">{label}</span>
        <input className="shadow" type={type} defaultValue={defaultValue} onChange={func}/>
      </div>
    </>
  );
}