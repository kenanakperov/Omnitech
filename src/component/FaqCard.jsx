import React, { useState } from "react";
import { BlackPlus, WhiteClose } from "../svg";

const FaqCard = (props) => {
  const [faqDetailsHide, setFaqDetailsHide] = useState("faqCardBtn");
  const [faqDetailsHideSecond, setFaqDetailsHideSecond] =
        useState("false");
  const [hideContent, setHideContent] = useState("false");
    

  const faqDetails = () => {
    if (faqDetailsHide === "false") {
      setFaqDetailsHide("faqCardBtn");
        setFaqDetailsHideSecond("false");
        setHideContent("false")
    } else {
      setFaqDetailsHide("false");
        setFaqDetailsHideSecond("faqCardBtnSecond");
        setHideContent("")
    }
  };
  return (
    <div className="faqCard">
      <div className="faqCardNum">
        <span>{props.num}</span>
      </div>
      <div className="faqCardContent">
        <h2>{props.title}</h2>
        <span className={hideContent}>{props.content}</span>
      </div>
      <div onClick={faqDetails} className={faqDetailsHide}>
        <BlackPlus />
      </div>
      <div onClick={faqDetails} className={faqDetailsHideSecond}>
        <WhiteClose />
      </div>
    </div>
  );
};

export default FaqCard;
