import React from "react";
import "./index.css";
import EngagementButtons from "../EngagementButtons";
import ReactHashtag from "@mdnm/react-hashtag";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
const OtyakaiInfo = (props) =>{
  console.log(props)
  const randmnum = Math.floor(Math.random() * 100000)
  const tool_id = 'my-tooltip-'+props.host_id+randmnum
  return (
    <>
        <div className="card-body">
          <Link to={'/otyakais/' + props.id}>
            <h3>{props.title}</h3>
          </Link>
          <p>
            <ReactHashtag>
                {props.detail}
            </ReactHashtag>
          </p>
        </div>
        <div className="card-footer">
          <div className="left-info">
            <div className="date">開催日:{props.date.getFullYear()}/{props.date.getMonth()+1}/{props.date.getDate()}</div>
            <div className="place">開催場所:{props.place}</div>
            <d
            data-tooltip-id={tool_id}
            data-tooltip-variant="success"
            className="place"
            >主催者:{props.host}</d>
          </div>
          <Tooltip 
          id={tool_id}
          place='bottom'
          render={({ content, activeAnchor }) => (
            <span>
              名前 : {props.host}
              <br/>
              自己紹介 : {props.profile}
              <br/>
              年齢 : {props.age}
              <br/>
            </span>
          )}
          />
          <EngagementButtons id={props.id} join={props.join}/>
        </div>
    </>
  )
}

export default OtyakaiInfo;