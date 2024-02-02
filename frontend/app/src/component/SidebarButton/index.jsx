import { Link } from "react-router-dom";

export default function SidebarButton({ link = "/",  preLogoClass = "hoge", postLogoClass = "hoge", text = "hoge" }) {
  return (
    <>
      <Link className="sidebar-button btn" to={link}>
        {/* 余裕があればフォントを追加したい */}
        {text}
      </Link>
    </>
  );
}
