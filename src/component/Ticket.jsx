import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Textarea } from "../components/ui/textarea";
import {
  ArrowDown,
  Close,
  Pen,
  BlueCircle,
  RightArrow,
  GreenCircle,
  YellowCircle,
} from "../svg";

import TaskHistoryChanger from "./TaskHistoryChanger";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";

const Ticket = (circle) => {
  const [hideDetails, setHideDetails] = useState("false");
  const [activeFirst, setActiveFirst] = useState("active");
  const [activeSecond, setActiveSecond] = useState("nonactive");
  const [historyCommentChanger, setHistoryCommentChanger] = useState("");
  const [changeTaskHistory, setChangeTaskHistory] = useState("false");
  const [rightArrow, setRightArrow] = useState("false");
  const [arrowhide, setArrowHide] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [toMe, setToMe] = useState("Mənə təyin et");

  const inputHide = () => {
    if (rightArrow === "false") {
      setRightArrow("true");
      setArrowHide("false");
    } else {
      setRightArrow("false");
      setArrowHide("");
    }
  };
  const handleChange = (value) => {
    setSelectValue(value.charAt(0).toUpperCase() + value.slice(1));
    setRightArrow("false");
    setArrowHide("");
    setToMe("");
  };
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

  const details = () => {
    if (hideDetails === "false") {
      setHideDetails("ticketdetailsHomeTT");
    } else {
      setHideDetails("false");
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
              <span>Diana</span>
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
                        <img src={require("../images/Avatarmen.png")} alt="" />
                        <span>Diana</span>
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
                      <Label htmlFor="terms">Şərh əlavə et</Label>
                      <Textarea
                        className="resize-none mt-1"
                        placeholder="Şərh yazın.."
                      />
                    </div>
                  </div>
                  <div className={changeTaskHistory}>
                    <TaskHistoryChanger
                      name="Diana"
                      status="Updated task status"
                      date="01/09/23 - 12:45"
                    />
                    <TaskHistoryChanger
                      name="Diana"
                      status="Added a comment"
                      date="01/09/23 - 12:33"
                    />
                    <TaskHistoryChanger
                      name="Diana"
                      status="Assign to Dima"
                      date="01/09/23 - 12:28"
                    />
                    <TaskHistoryChanger
                      name="Diana"
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
                  <h4>{toMe}</h4>
                  <span>{selectValue}</span>
                  <div>
                    <h5 className={arrowhide} onClick={inputHide}>
                      <RightArrow />
                    </h5>
                  </div>
                  <div className={rightArrow}>
                    <Select onValueChange={(e) => handleChange(e)}>
                      <SelectTrigger className="w-[241px]">
                        <SelectValue placeholder="Yönləndirin" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Yönləndirin</SelectLabel>
                          <SelectItem value="texniki">Texniki</SelectItem>
                          <SelectItem value="yığım">Yığım</SelectItem>
                          <SelectItem value="satış">Satış</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div onClick={details}>
                  <Button>Yadda saxla</Button>
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
