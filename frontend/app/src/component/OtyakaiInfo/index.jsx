import React from "react";
import "./index.css";
import EngagementButtons from "../EngagementButtons";
import ReactHashtag from "@mdnm/react-hashtag";

const OtyakaiInfo = (props) =>{
  return (
    <>
        <div className="card-body">
          <h3>{props.title}</h3>
          <p>
          <ReactHashtag>
              {props.detail}
          </ReactHashtag>
          </p>
        </div>
        <div className="card-footer">
          <div className="left-info">
            <div className="date">開催日:{props.date.getFullYear()}/{props.date.getMonth()}/{props.date.getDate()}</div>
            <div className="place">開催場所:{props.place}</div>
          </div>
          <EngagementButtons/>
        </div>
    </>
  )
}

export default OtyakaiInfo;