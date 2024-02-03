import React,{useState} from "react";
import "./index.css";
import WhiteButton from "../WhiteButton";
import GreenButton from "../GreenButton";
import Like from "../Like";
import axios from "axios";

const EngagementButtons = (props) =>{
  const [joinState,setjoinState] = useState(props.join)
  async function handleClick(e){
    e.preventDefault();    
    if(joinState){
      setjoinState(false)
      await axios.delete(`http://localhost:8080/api/participant/${props.id}`, {
        params: {
          "user_id":1, /* TODO: 現在のユーザーを取得するようにする */
          "otyakai_id":props.id
        }
      });
    }else{
      setjoinState(true)
      await axios.post(`http://localhost:8080/api/participant/`, {
          "user_id":1, /* TODO: 現在のユーザーを取得するようにする */
          "otyakai_id":props.id
      });

    }
  }

  return (
    <>
      <div className="right-info">
        <Like />
        <span onClick={handleClick}>
        {
          joinState ?
            <GreenButton name="キャンセル"/>
          :
            <WhiteButton name="参加する"/>
        }
        </span>

      </div>
    </>
  )
}

export default EngagementButtons;