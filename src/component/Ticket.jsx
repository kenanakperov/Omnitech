import React, { useState } from "react";
import LongLabel from "./LongLabel";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";
import {
  ArrowDown,
  Close,
  Pen,
  Verified,
  WhiteRightArrow,
  BlueCircle,
  RightArrow,
  GreenCircle,
  YellowCircle,
} from "../svg";

import TaskHistoryChanger from "./TaskHistoryChanger";

const Ticket = (circle) => {
  const [hideDetails, setHideDetails] = useState("false");
  const [rightArrowHide, setRightArrowHide] = useState("");
  const [textSender, setTextSender] = useState("false");
  const [textSenderTT, setTextSenderTT] = useState("false");
  const [whose, setWhose] = useState("");
  const [whoseTextLast, setWhoseTextLast] = useState("false");
  const [activeFirst, setActiveFirst] = useState("active");
  const [activeSecond, setActiveSecond] = useState("nonactive");
  const [historyCommentChanger, setHistoryCommentChanger] = useState("");
  const [changeTaskHistory, setChangeTaskHistory] = useState("false");

  const activeNonActive = () => {
    if (activeFirst === "active") {
      setActiveFirst("nonactive");
      setActiveSecond("active");
      setHistoryCommentChanger("false");
      setChangeTaskHistory("taskHistory");
    } else {
      setActiveFirst("active");
      setActiveSecond("nonactive");
      setHistoryCommentChanger("");
      setChangeTaskHistory("false");
    }
  };

  const rightArrowBtn = () => {
    if (rightArrowHide === "") {
      setRightArrowHide("false");
      setTextSender("whoseTextSender");
      setTextSenderTT("whoseTextSenderTT");
    } else {
      setRightArrowHide("");
    }
  };
  const details = () => {
    if (hideDetails === "false") {
      setHideDetails("ticketdetailsHomeTT");
    } else {
      setHideDetails("false");
    }
  };
  const hideTextSender = () => {
    if (textSender === "false") {
      setTextSender("whoseTextSender");
    }
  };

  const senderPerson1 = () => {
    setWhose("Dima");
    setTextSender("false");
    setTextSenderTT("false");
    setWhoseTextLast("whoseTextLast");
  };

  const senderPerson2 = () => {
    setWhose("Kenan");
    setTextSender("false");
    setTextSenderTT("false");
    setWhoseTextLast("whoseTextLast");
  };

  const hideTextSenderTT = () => {
    if (textSenderTT === "false") {
      setTextSenderTT("whoseTextSender");
    } else {
      setTextSenderTT("false");
    }
  };

  let circleColor;
  if (circle.circle === "blue") {
    circleColor = <BlueCircle />;
  }
  if (circle.circle === "green") {
    circleColor = <GreenCircle />;
  }
  if (circle.circle === "yellow") {
    circleColor = <YellowCircle />;
  }
  return (
    <>
      <div className="ticket">
        <div className="ticketTitle">
          <div className="ticketTitleL">
            {circleColor}
            <span>{circle.ticketNum}</span>
            <span>{circle.content}</span>
          </div>
          <div className="ticketTitleR">
            <span>{circle.date}</span>
          </div>
        </div>
        <div className="ticketContent">
          <div className="ticketContentTitle">
            <span>{circle.name}</span>
            <span>{circle.companyName}</span>
            <span>{circle.phoneNum}</span>
          </div>
          <div className="ticketContentComment">
            <span>{circle.comment}</span>
          </div>
          <hr />
          <div className="ticketWhoseTT">
            <div className="ticketWhose">
              <img
                className="ticketImg"
                src={require("../images/Avatar.png")}
                alt=""
              />
              <span>Vlad</span>
              <RightArrow />
              <h3>Satış</h3>
            </div>
            <h5 onClick={details}>Ətraflı bax</h5>
          </div>
        </div>
      </div>
      <div className={hideDetails}>
        <div>
          <div className="ticketDetailsHome">
            <div className="ticketDetails">
              <div className="detailsTitle">
                <div className="detailsTitleL">
                  <div className="detailsStatus">
                    <BlueCircle />
                    <span>Yeni</span>
                    <ArrowDown />
                  </div>
                  <span>Tiket# 5</span>
                  <span>Kassa</span>
                </div>
                <div className="detailsTitleR">
                  <span>Yaradıldı: 01/09/23 - 12:45</span>
                  <div className="closeIcon" onClick={details}>
                    <Close />
                  </div>
                </div>
              </div>
              <div className="detailsContent">
                <div className="detailsContentL">
                  <div className="contentLTitle">
                    <span>Orxan Qasımov</span>
                    <span>Mothercare</span>
                    <span>+994-XX-XXX-XX-XX</span>
                  </div>
                  <div className="contentCommentArea">
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.
                    </span>
                    <Pen />
                  </div>
                  <div className="contentKassaNum">
                    <span>Kassa nömrəsi: 0000000</span>
                    <hr />
                    <span>VÖEN: 0000000</span>
                  </div>
                  <hr />
                </div>
                <div className="detailsContentHR">
                  <hr />
                </div>
                <div className="detailsContentR">
                  <div className="detailsContentRTitle">
                    <span onClick={activeNonActive} className={activeFirst}>
                      Şərhlər
                    </span>
                    <span onClick={activeNonActive} className={activeSecond}>
                      Tarixçə
                    </span>
                  </div>
                  <div className={historyCommentChanger}>
                    <div className="detailsContentRWhoseDate">
                      <div className="detailsContentRWhose">
                        <img src={require("../images/People.png")} alt="" />
                        <span>Vlad</span>
                      </div>
                      <span>01/09/23 - 12:45</span>
                    </div>
                    <div className="detailsContentRComment">
                      <span>
                        Lorem ipsum dolor sit amet consectetur. Arcu nibh amet
                        sagittis magna risus egestas. Orci eget vulputate
                        aliquam in urna. Faucibus posuere leo ultricies lectus.
                        Neque in faucibus sit adipiscing.
                      </span>
                    </div>
                    <div className="detailsContentAddComment">
                      <LongLabel text="Şərh əlavə et" />
                      <input type="text" placeholder="Şərh yazın.." />
                    </div>
                  </div>
                  <div className={changeTaskHistory}>
                    <TaskHistoryChanger
                      name="Vlad"
                      status="Updated task status"
                      date="01/09/23 - 12:45"
                    />
                    <TaskHistoryChanger
                      name="Vlad"
                      status="Added a comment"
                      date="01/09/23 - 12:33"
                    />
                    <TaskHistoryChanger
                      name="Vlad"
                      status="Assign to Dima"
                      date="01/09/23 - 12:28"
                    />
                    <TaskHistoryChanger
                      name="Vlad"
                      status="Assign to Satış group"
                      date="01/09/23 - 12:24"
                    />
                  </div>
                </div>
              </div>
              <hr className="detailsContentEndHR" />
              <div className="detailsContentEnd">
                <div className="contentWhose">
                  <img src={require("../images/Avatar.png")} alt="" />
                  <span>Diana</span>
                  <RightArrow />
                  <Tabs defaultValue="account" className="ml-4 mr-4">
                    <TabsList>
                      <TabsTrigger value="account">Satış</TabsTrigger>
                    </TabsList>
                  </Tabs>{" "}
                  <img src={require("../images/Avatarmen.png")} alt="" />
                  <h4>Mənə təyin et</h4>
                  <div onClick={rightArrowBtn} className={rightArrowHide}>
                    <h5>
                      <RightArrow />
                    </h5>
                  </div>
                  <div onClick={hideTextSender} className={textSender}>
                    <span>Di</span>
                  </div>
                  <div className={whoseTextLast}>
                    <h6>
                      <RightArrow />
                    </h6>
                    <img src={require("../images/People.png")} alt="people" />
                    <span>{whose}</span>
                    <h2>
                      <WhiteRightArrow />
                    </h2>
                  </div>
                  <div className={textSenderTT}>
                    <div
                      onClick={hideTextSenderTT}
                      className="whoseTextSenderHead"
                    >
                      <span>Satış</span>
                      <Verified />
                    </div>
                    <div
                      onClick={senderPerson1}
                      className="whoseTextSenderPerson"
                    >
                      <img src={require("../images/People.png")} alt="" />
                      <span>Dima</span>
                    </div>
                    <div
                      onClick={senderPerson2}
                      className="whoseTextSenderPerson"
                    >
                      <img src={require("../images/People.png")} alt="" />
                      <span>Kenan</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ticket;
