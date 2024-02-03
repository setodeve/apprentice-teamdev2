import React from "react";
import "./index.css";
import SidebarButton from "../SidebarButton";
import GreenButton from "../GreenButton";
import { Link } from 'react-router-dom'
import { GiTeapotLeaves } from "react-icons/gi";
import { FaList } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

export default function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="button-area">
          <SidebarButton text={<div><FaUser className="side-icon" />プロフィール</div>}/>
          <SidebarButton text={<div><FaRegHeart className="side-icon" />お気に入り</div>}/>
          <SidebarButton text={<div><FaList className="side-icon" />参加リスト</div>}/>
          <GreenButton name={<Link className="create-otyakai-button" to='/otyakais/new'><GiTeapotLeaves className="side-icon"/>お茶会作成</Link>} />
        </div>
      </div>
    </>
  );
}