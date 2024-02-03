import React,{useState,useEffect} from "react";
import axios from "axios";
import "./index.css";
import OtyakaiImg from "../OtyakaiImg";
import OtyakaiInfo from "../OtyakaiInfo";
import Frame from "../Frame/frame";
import { useParams } from "react-router-dom";
import map from "../../asset/map.png"

const OtyakaiShow = () =>{
  const params = useParams();
  const [otyakai, setOtyakai] = useState()
  
  useEffect(() => {
    async function getOtyakai(){
      const res = await axios.get(`http://localhost:8080/api/otyakais/${params.id}`)
      setOtyakai(res.data)
    }
    getOtyakai()
  },[params]);

  async function checkParticipant(){
    const res = await axios.get(`http://localhost:8080/api/participant/${otyakai.id}`, {
      params: {
        "user_id":1, /* TODO: 現在のユーザーを取得するようにする */
        "otyakai_id":otyakai.id
      }
    });
    return res ? true : false
  }

  return (
    <>
      {
        otyakai &&
        <Frame component={
          <div className="show-container">
            <div className="card">
              <OtyakaiImg img={otyakai.img}/>
              <OtyakaiInfo
              id = {otyakai.id}
              title={otyakai.name}
              detail={otyakai.detail}
              date={new Date(otyakai.date)}
              place={otyakai.place}
              host={otyakai.host}
              join={checkParticipant}
            />
            <img className="map" src={map} alt="開催場所" />
      
            <div className="other-container">
              <div className="other-otyakai-title">他のお茶会を見てみる</div>
              <div className="other-otyakai">
                <div>[第100回] プログラミング好きのミートアップ</div>
              </div>
              <div className="other-otyakai">
                <div>[第10回] Ruby好きのミートアップ</div>
              </div>
              <div className="other-otyakai">
                <div>[第20回] Python好きのミートアップ</div>
              </div>
              <div className="other-otyakai">
                <div>[第1回] Rails好きのミートアップ</div>
              </div>
            </div>
            </div>
          </div>
        }/>
      }    
    </>

  )
}

export default OtyakaiShow;