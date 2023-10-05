import React from "react";

const TaskHistoryChanger = (props) => {
  return (
    <div className="taskHistoryCard">
      <div className="taskHistoryCardL">
        <img src={require("../images/People.png")} alt="" />
        <span>{props.name}</span>
        <p>{props.status}</p>
      </div>
      <h4>{props.date}</h4>
    </div>
  );
};

export default TaskHistoryChanger;
