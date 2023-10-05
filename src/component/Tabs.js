import React, { useState } from "react";
import Tab from "./Tab";
import { Category, Dollar, Texniki, Yigim } from "../svg";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs">
      <div className="tab-buttons">
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            title={tab.title}
            word={tab.word}
            isActive={index === activeTab}
            onClick={() => handleTabClick(index)}
          />
        ))}
      </div>
      <div className="tab-content">{tabs[activeTab].content}</div>
    </div>
  );
};

const tabs = [
  {
    title: <Category />,
    word: "Hamısı",
  },
  {
    title: <Dollar />,
    word: "Satış",
  },
  {
    title: <Yigim />,
    word: "Yığım",
  },
  {
    title: <Texniki />,
    word: "Texniki",
  },
];

export default Tabs;
