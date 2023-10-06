import React from "react";
import { DocumentText, MessageQuestion, TaskSquare } from "../svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="sideBar">
      <div className="sideBarLogo">
        <div className="sideBarLogoImg"></div>
      </div>
      <ul className="sideBarUl">
        <Link to={"/home"}>
          <li>
            <span>
              <TaskSquare />
            </span>
            Tiketlər
          </li>
        </Link>
        <Link to={"/reports"}>
          <li>
            <span>
              <DocumentText />
            </span>
            Reportlar
          </li>
        </Link>
        <Link to={"/FAQ"}>
          <li>
            <span>
              <MessageQuestion />
            </span>
            FAQ
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
