import React, {useEffect, useState} from "react";
import axios from "axios";
import "./index.css";
import Otyakai from "../Otyakai";
import Frame from "../Frame/frame";

const OtyakaiList = () =>{
  const [otyakais, setOtyakais] = useState([])
  const [participants,setParticipants] = useState()

  const current_user_id = 1 /* TODO: 現在のユーザーを取得するようにする */

  useEffect(() => {
    axios.get(`http://localhost:8080/api/otyakais`)
    .then(res => {
      setOtyakais(res.data)
    })
    axios.get(`http://localhost:8080/api/participant`)
    .then(res => {
      setParticipants(res.data)
    })
  },[])

  // 参加者リストに現在のユーザーが含まれているか確認
  const checkParticipant = (otyakai_id) => {
    for (let i = 0; i < participants.length; i++){
      let j = participants[i]
      if( (current_user_id === j["user_id"]) && (otyakai_id === j["otyakai_id"])){
        return true
      } 
    };
    return false
  }

  return (
    <>
      {otyakais && participants &&
        <Frame component={
          <div className="index-container">
          {otyakais.map((o) => (
            <Otyakai 
              key={o.id}
              id={o.id}
              img={o.img}
              title={o.name}
              detail={o.detail}
              date={new Date(o.date)}
              place={o.place}
              host={o.host}
              join={checkParticipant(o.id)}
            />
          ))}
        </div>
        }/>
      }
    </>
  )
}

export default OtyakaiList;