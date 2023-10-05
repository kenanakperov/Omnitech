import React from "react";
import { ArrowDown, Chime } from "../svg";
import { useState } from "react";

const TopBar = () => {
  const [hideDrop, setHideDrop] = useState("false");
  const langDrop = () => {
    hideDrop === "false" ? setHideDrop("showDrop") : setHideDrop("false");
  };
  const [lang, setLang] = useState("AZ");
  return (
    <>
      <div className="topBar">
        <div className="languageChanger">
          <span>{lang}</span>
          <div onClick={langDrop}>
            <ArrowDown />
          </div>
        </div>
        <div className="notification">
          <Chime />
        </div>
        <div className="userProfile">
          <img src={require("../images/Avatar.png")} alt=""/>
          <span>Diana</span>
          <ArrowDown />
        </div>
      </div>
      <p className={hideDrop}>
        <span
          onClick={() => {
            setLang("AZ");
            setHideDrop("false");
          }}
        >
          AZ
        </span>
        <span
          onClick={() => {
            setLang("RU");
            setHideDrop("false");
          }}
        >
          RU
        </span>
      </p>
    </>
  );
};

export default TopBar;
