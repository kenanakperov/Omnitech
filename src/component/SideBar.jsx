import React from "react";
import { DocumentText, MessageQuestion,  TaskSquare } from "../svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="sideBar">
      <div className="sideBarLogo">
        <div className="sideBarLogoImg"></div>
      </div>
      <ul className="sideBarUl">
        <li>
          <Link to={"/home"}>
            <span>
              <TaskSquare />
            </span>
            Tiketlər
          </Link>
        </li>
        <li>
          <Link to={"/reports"}>
            <span>
              <DocumentText />
            </span>
            Reportlar
          </Link>
        </li>
        <li>
          <Link to={"/FAQ"}>
            <span>
              <MessageQuestion />
            </span>
            FAQ
          </Link>
        </li>

        {/* <li>
          <Link to={"/users"}>
            <span>
              <PeopleIcon />
            </span>
            İstifadəçilər
          </Link>
        </li> */}
      </ul>
    </div>
  );
};

export default Header;
