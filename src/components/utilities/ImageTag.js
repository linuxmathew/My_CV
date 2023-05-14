import React from "react";
import "./ImageTag.css";

function ImageTag(props) {
  return (
    <a href={props.link}>
      <div className="tagContainer">
        <img className="image" src={props.source} alt={props.alt} />
        <div className="tag">
          <h6>{props.tag}</h6>
          <p>Tech: {props.tech}</p>
        </div>
        <div className="description">
          <p>{props.description}</p>
          {/* <div
          className="row"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <a href={props.github} className="btn-small">
            <i className="material-icons left">github</i> Github
          </a>
          <a href={props.live} className="btn-small">
            <i className="material-icons left">cloud</i>live
          </a>
        </div> */}
        </div>
      </div>
    </a>
  );
}

export default ImageTag;
