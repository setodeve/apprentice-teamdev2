import React from "react";
import "./myProfilePage.css"
import Frame from "../Frame/frame";
import MyProfile from "../MyProfile/myProfile";


export default function MyProfilePage() {

  return (
    <>
      <Frame component={<MyProfile/>}/>
    </>
  )
}