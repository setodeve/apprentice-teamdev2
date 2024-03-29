import React from "react";
import "./textArea.css";

export default function TextArea({label="label Propsに値を与えてください", defaultValue="",func=()=>{}}) {

  return (
    <>
      <div className="input-area">
        <span className="input-label">{label}</span>
        <textarea className="shadow" defaultValue={defaultValue} onChange={func} />
      </div>
    </>
  );
}