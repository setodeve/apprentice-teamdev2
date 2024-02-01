import React from "react";
import "./index.css";
import GreenButton from "../GreenButton";
import InputArea from "../input-area/inputArea";
import TextArea from "../textArea/textArea";

export default function CreateOtyakai() {

  return (
    <>
      <div className="shadow create-otyakai">
        <div className="container">
          <InputArea label="お茶会名" type="text"></InputArea>
          <TextArea label="詳細"/>
          <InputArea label="参加数上限" type="text"></InputArea>
          <InputArea label="開催日時" type="datetime-local"></InputArea>
          <InputArea label="開催場所" type="text"></InputArea>
          <InputArea label="トップ画像を選択" type="text"></InputArea>
          <div className="button-area">
            <GreenButton className="green-btn" name="お茶会作成"></GreenButton>
          </div>
        </div>
      </div>
    </>
  );
}