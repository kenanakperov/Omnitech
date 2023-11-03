import React, { useEffect, useState } from "react";

// ? UI Components

import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

// ? SVG'S

import {
  ArrowDown,
  Close,
  Pen,
  BlueCircle,
  RightArrow,
  GreenCircle,
  YellowCircle,
  ArrowUp,
} from "../svg";

// ? Components

import TaskHistoryChanger from "./TaskHistoryChanger";
import Comment from "./Comment";
import axios from "axios";

const Ticket = (circle) => {
  const [hideDetails, setHideDetails] = useState("false");
  const [activeFirst, setActiveFirst] = useState("active");
  const [activeSecond, setActiveSecond] = useState("nonactive");
  const [historyCommentChanger, setHistoryCommentChanger] = useState("");
  const [changeTaskHistory, setChangeTaskHistory] = useState("false");
  const [rightArrow, setRightArrow] = useState("false");
  const [arrowhide, setArrowHide] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [selectValueStatus, setSelectValueStatus] = useState("");
  const [toMe, setToMe] = useState("Mənə təyin et");
  const [taskStatusDrop, setTaskStatusDrop] = useState("false");
  const [histories, setHistories] = useState([]);
  // const [comments, setComments] = useState([]);
  const [refresh, setRefresh] = useState(true);

  let [ticketData, setTicketData] = useState({
    ticket: circle.id,
    text: "",
  });
  const getHistories = () => {
    axios
      .get(`http://165.22.81.197:8000/api/tickets/${circle.id}/history/`)
      .then((res) => {
        setHistories(res.data);
      });
  };
  const getComments = () => {
    // axios
    //   .get(`http://165.22.81.197:8000/api/comments/${circle.id}`)
    //   .then((res) => {
    //     setComments(res.data);
    //   });
  };
  useEffect(() => {
    getHistories();
    getComments();
  }, [circle.id]);

  useEffect(() => {
    getComments();
  }, [refresh]);

  useEffect(() => {
    setHistories(histories);
  }, [histories]);

  const handlechange = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    setTicketData((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  };
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
  const handleChangeStatus = (value) => {
    setSelectValueStatus(value);
    setTaskStatusDrop("false");
    let changeState = {
      id: circle.id,
      state: value,
    };
    axios
      .patch(
        `http://165.22.81.197:8000/api/tickets/${circle.id}/change_state/`,
        changeState
      );
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
  const setBtn = () => {
    if (ticketData.text.length !== 0) {
      axios
        .post("http://165.22.81.197:8000/api/comments/", ticketData)
        .then((res) => {
          setRefresh(!refresh);
          console.log(res);
        });
    }
    // setHideDetails("false");
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
                  <div
                    onClick={() => {
                      taskStatusDrop === "false"
                        ? setTaskStatusDrop("taskStatusDrop")
                        : setTaskStatusDrop("false");
                    }}
                    className="detailsStatus"
                  >
                    <BlueCircle />
                    <span className="menaxtaran">{circle.state.name}</span>
                    {taskStatusDrop === "false" ? <ArrowDown /> : <ArrowUp />}

                    <div className={taskStatusDrop}>
                      <Select onValueChange={(e) => handleChangeStatus(e)}>
                        <SelectTrigger className="w-[170px]">
                          <SelectValue placeholder="Statusu dəyişin" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Seçin</SelectLabel>
                            <SelectItem value="0">Unassigned</SelectItem>
                            <SelectItem value="1">Assigned</SelectItem>
                            <SelectItem value="2">In Progress</SelectItem>
                            <SelectItem value="3">Done</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <span>{circle.ticketNum}</span>
                  <span>{circle.content}</span>
                </div>
                <div className="detailsTitleR">
                  <span>{circle.date}</span>
                  <div className="closeIcon" onClick={details}>
                    <Close />
                  </div>
                </div>
              </div>
              <div className="detailsContent">
                <div className="detailsContentL">
                  <div className="contentLTitle">
                    <span>Kenan</span>
                    <span>Omnitech</span>
                    <span>+994559994142</span>
                  </div>
                  <div className="contentCommentArea">
                    <span>{circle.description}</span>
                    <Pen />
                  </div>
                  <div className="contentKassaNum">
                    <span>Kassa nömrəsi: {circle.kassaID}</span>
                    <hr />
                    <span>VÖEN: {circle.voen}</span>
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
                    <div className="ticketsOverflow">
                      {/* {comments.map((item, index) => {
                        return (
                          <Comment
                            key={item.id}
                            name={item.author.username}
                            text={item.text}
                          />
                        );
                      })} */}
                    </div>
                    <div className="detailsContentAddComment">
                      <Label>Şərh əlavə et</Label>
                      <Textarea
                        onChange={handlechange}
                        name="text"
                        className="resize-none mt-1"
                        placeholder="Şərh yazın.."
                      />
                    </div>
                  </div>
                  <div className={changeTaskHistory}>
                    {histories.map((item, index) => {
                      const date = new Date(
                        item.action_time
                      ).toLocaleDateString();
                      return (
                        <TaskHistoryChanger
                          key={index}
                          name={item.user.username}
                          status={item.object_repr}
                          date={date}
                        />
                      );
                    })}
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
                          <SelectItem value="IT">IT</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div onClick={setBtn}>
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
