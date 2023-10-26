import React from "react";

const Comment = (props) => {
  return (
    <div>
      <div className="detailsContentRWhoseDate">
        <div className="detailsContentRWhose">
          <img src={require("../images/Avatarmen.png")} alt="" />
          <span>{props.name}</span>
        </div>
        <span>01/09/23 - 12:45</span>
      </div>
      <div className="detailsContentRComment">
        <span>
          {props.text}
        </span>
      </div>
    </div>
  );
};

export default Comment;
