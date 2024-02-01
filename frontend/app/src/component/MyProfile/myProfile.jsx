import React from "react";
import InputArea from "../ImputArea/inputArea";
import TextArea from "../TextArea/textArea";

export default function MyProfile() {

  return (
    <>
      <InputArea label="名前"></InputArea>
      <InputArea label="年齢"></InputArea>
      <InputArea label="ユーザー名"></InputArea>
      <TextArea label="自己紹介文"></TextArea>
    </>
  );
}