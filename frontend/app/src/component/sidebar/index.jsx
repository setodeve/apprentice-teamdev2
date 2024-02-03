import React from "react";
import "./index.css";
import SidebarButton from "../SidebarButton";
import GreenButton from "../GreenButton";

export default function Sidebar() {

  return (
    <>
      <div className="sidebar weak-shadow">
        <div className="button-area">
          <SidebarButton text={"プロフィール"}/>
          <SidebarButton text={"お気に入り"}/>
          <SidebarButton text={"参加リスト"}/>
          <GreenButton name={"お茶会作成"}/>
        </div>
      </div>
    </>
  );
}