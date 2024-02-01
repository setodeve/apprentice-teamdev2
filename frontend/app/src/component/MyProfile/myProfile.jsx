import React from "react";
import Sidebar from "../Sidebar";
import GreenButton from "../GreenButton";
import ProfileInfo from "../ProfileInfo/profileInfo";


export default function MyProfile() {

  return (
    <>
      <ProfileInfo></ProfileInfo>
      <div className="button-area">
        <GreenButton className="btn" name="編集する"></GreenButton>
      </div>
    </>
  );
}