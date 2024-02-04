import React from "react";
import "./profileInfo.css";
import InputArea from "../ImputArea/inputArea";
import TextArea from "../textArea/textArea";

export default function ProfileInfo() {

  return (
    <>
      <InputArea label="名前"></InputArea>
      <InputArea label="年齢"></InputArea>
      <InputArea label="ユーザー名"></InputArea>
      <TextArea label="自己紹介文"></TextArea>
    </>
  );
}