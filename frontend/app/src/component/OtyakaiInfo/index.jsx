import React from "react";
import "./index.css";
import EngagementButtons from "../EngagementButtons";
import ReactHashtag from "@mdnm/react-hashtag";
import { Link } from "react-router-dom";
const OtyakaiInfo = (props) =>{
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
            <div className="place">主催者:{props.host}</div>
          </div>
          <EngagementButtons/>
        </div>
    </>
  )
}

export default OtyakaiInfo;