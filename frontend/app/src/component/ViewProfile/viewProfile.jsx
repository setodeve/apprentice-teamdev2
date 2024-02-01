import React from "react";
import ProfileInfo from "../ProfileInfo/profileInfo";
import GreenButton from "../GreenButton";

export default function ViewProfile() {

  return (
    <> 
      <ProfileInfo></ProfileInfo>
      <div className="button-area">
        <GreenButton className="btn" name="follow"></GreenButton>
      </div>
    </>
  )
}