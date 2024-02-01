import React from "react";
import "./index.css";
import GreenButton from "../GreenButton";

export default function CreateOtyakai() {

  return (
    <>
      <div className="shadow create-otyakai">
        <div className="container">
          <div className="otyakai-info">
            <div className="input-area">
              <span className="input-label">お茶会名</span>
              <input className="shadow" type="text" />
            </div>
            <div className="input-area">
              <span className="input-label">詳細</span>
              <textarea className="shadow" defaultValue={""} />
            </div>
            <div className="input-area">
              <span className="input-label">参加数上限</span>
              <input className="shadow"type="text" />
            </div>
            <div className="input-area">
              <span className="input-label">開催日時</span>
              <input className="shadow" type="datetime-local" />
            </div>
            <div className="input-area">
              <span className="input-label">開催場所</span>
              <input className="shadow" type="text" />
            </div>
            <div className="input-area">
              <span className="input-label">トップ画像を選択</span>
              <input className="shadow" type="text" />
            </div>
          </div>
          <div className="button-area">
            <GreenButton className="green-btn" name="お茶会作成"></GreenButton>
          </div>
        </div>
      </div>
    </>
  );
}