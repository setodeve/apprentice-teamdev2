import React from "react";
import "./index.css";
import Otyakai from "../Otyakai";

const IndexOtyakai = (props) =>{
  return (
    <div className="index-container">
      <Otyakai 
        img="https://picsum.photos/id/1/1000/200"
        title="[第100回] プログラミング好きのミートアップ"
        detail="AtCoderに興味のある方々のためのカジュアルな集まりを開催します
          コーディングについて話し合いお互いのスキルを共有しましょう
          #プログラミング好き
          #プログラミング"
        date={new Date()}
        place="カフェ"
      />
      <Otyakai 
        img="https://picsum.photos/id/1/1000/200"
        title="[第100回] プログラミング好きのミートアップ"
        detail="AtCoderに興味のある方々のためのカジュアルな集まりを開催します
          コーディングについて話し合いお互いのスキルを共有しましょう
          #プログラミング好き
          #プログラミング"
        date={new Date()}
        place="カフェ"
      />
      <Otyakai 
        img="https://picsum.photos/id/1/1000/200"
        title="[第100回] プログラミング好きのミートアップ"
        detail="AtCoderに興味のある方々のためのカジュアルな集まりを開催します
          コーディングについて話し合いお互いのスキルを共有しましょう
          #プログラミング好き
          #プログラミング"
        date={new Date()}
        place="カフェ"
      />
    </div>
  )
}

export default IndexOtyakai;