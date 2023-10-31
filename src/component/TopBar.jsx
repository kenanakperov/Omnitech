import React from "react";
import { ArrowDown, ArrowUp, Chime, LogOutI, MoonI } from "../svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TopBar = ({setUser}) => {
  const navigate = useNavigate();
  const [hideDrop, setHideDrop] = useState("false");
  const [logOutBtn, setLogOutBtn] = useState("true");
  const [logout, setLogOut] = useState("false");
  const [lang, setLang] = useState("AZ");
  const [langBtn, setLangBtn] = useState("false");
  const langFunc = () => {
    lang === "AZ" ? setLang("RU") : setLang("AZ");
    setHideDrop("false");
    setLangBtn("false");
  };
  const langBtnChange = () => {
    if (langBtn === "true") {
      setLangBtn("false");
      setHideDrop("false");
    } else {
      setLangBtn("true");
      setHideDrop("showDrop");
    }
  };
  const arrowDownUp = () => {
    if (logOutBtn === "true") {
      setLogOutBtn("false");
      setLogOut("profileDrop");
    } else {
      setLogOutBtn("true");
      setLogOut("false");
    }
  };
  return (
    <>
      <div className="topBar">
        <div className="moonIcon">
          <MoonI />
        </div>
        <div className="languageChanger">
          <span>{lang}</span>
          <div onClick={langBtnChange}>
            {langBtn === "false" ? <ArrowDown /> : <ArrowUp />}
          </div>
          <p className={hideDrop} onClick={langFunc}>
            <span>{lang === "AZ" ? "RU" : "AZ"}</span>
          </p>
        </div>
        <div className="notification">
          <Chime />
        </div>
        <div className="userProfile">
          <img src={require("../images/Avatar.png")} alt="" />
          <span>Diana</span>
          <div className="cursor-pointer" onClick={arrowDownUp}>
            {logOutBtn === "false" ? <ArrowUp /> : <ArrowDown />}
          </div>
          <div
            className={logout}
            onClick={() => {
              localStorage.removeItem("access");
              setUser(false)
              navigate("/");
            }}
          >
            <div>
              <h6>Çıxış</h6>
              <LogOutI />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
