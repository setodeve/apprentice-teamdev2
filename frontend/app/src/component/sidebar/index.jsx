import React from "react";
import "./index.css";
import SidebarButton from "../SidebarButton";
import GreenButton from "../GreenButton";

export default function Sidebar() {

  return (
    <>
      <div className="sidebar">
        <div className="button-area">
          <SidebarButton link="/" text={"プロフィール"}/>
          <SidebarButton link="/" text={"お気に入り"}/>
          <SidebarButton link="/" text={"参加リスト"}/>
          <GreenButton link="/hoge" name={"お茶会作成"}/>
        </div>
      </div>
    </>
  );
}