import React, {useEffect, useState} from "react";
import axios from "axios";
import "./index.css";
import Otyakai from "../Otyakai";
import Frame from "../Frame/frame";


const OtyakaiList = () =>{
  const [otyakais, setOtyakais] = useState([])
  useEffect(() => {
    axios.get(`http://localhost:8080/api/otyakais`)
    .then(res => {
      setOtyakais(res.data)
    })
  },[])

  return (
    <Frame component={
      <div className="index-container">
      {otyakais.map((o) => (
          <Otyakai 
            img={o.img}
            title={o.name}
            detail={o.detail}
            date={new Date(o.date)}
            place={o.place}
            host={o.host}
          />
      ))}
    </div>
    }/>
  )
}

export default OtyakaiList;