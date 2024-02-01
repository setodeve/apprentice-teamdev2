import React from "react";
import "./textArea.css";

export default function TextArea({label="label Propsに値を与えてください", value=""}) {

  return (
    <>
      <div className="input-area">
        <span className="input-label">{label}</span>
        <textarea className="shadow" value={value} />
      </div>
    </>
  );
}