export default function SidebarButton({ preLogoClass = "hoge", postLogoClass = "hoge", text = "hoge" }) {
  return (
    <>
      <button className="sidebar-button btn">
        {/* 余裕があればフォントを追加したい */}
        {text}
      </button>
    </>
  );
}
