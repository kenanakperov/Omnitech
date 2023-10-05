import React from 'react'
import TopBar from '../component/TopBar'
import SideBar from "../component/SideBar";
import FaqCard from '../component/FaqCard';


const FAQ = () => {
  return (
    <div>
      <SideBar />
      <TopBar />
      <div className="faqTT">
        <div className="faq">
          <div className="faqTitle">
            <h2>FAQ</h2>
            <div className="searchInp">
              <input
                type="text"
                className="searchInp"
                name="search"
                placeholder="Saul axtar"
              />
            </div>
          </div>
          <FaqCard
            num="1"
            title="Hansı xidmətləri təklif edirik?"
            content="Lorem ipsum dolor sit amet consectetur. Ultrices suspendisse volutpat bibendum egestas viverra tincidunt dolor cursus. Nunc cras dignissim massa lacus nunc bibendum urna."
          />
          <FaqCard
            num="1"
            title="Hansı xidmətləri təklif edirik?"
            content="Lorem ipsum dolor sit amet consectetur. Ultrices suspendisse volutpat bibendum egestas viverra tincidunt dolor cursus. Nunc cras dignissim massa lacus nunc bibendum urna."
          />
          <FaqCard
            num="1"
            title="Hansı xidmətləri təklif edirik?"
            content="Lorem ipsum dolor sit amet consectetur. Ultrices suspendisse volutpat bibendum egestas viverra tincidunt dolor cursus. Nunc cras dignissim massa lacus nunc bibendum urna."
          />
          <FaqCard
            num="1"
            title="Hansı xidmətləri təklif edirik?"
            content="Lorem ipsum dolor sit amet consectetur. Ultrices suspendisse volutpat bibendum egestas viverra tincidunt dolor cursus. Nunc cras dignissim massa lacus nunc bibendum urna."
          />
          <FaqCard
            num="1"
            title="Hansı xidmətləri təklif edirik?"
            content="Lorem ipsum dolor sit amet consectetur. Ultrices suspendisse volutpat bibendum egestas viverra tincidunt dolor cursus. Nunc cras dignissim massa lacus nunc bibendum urna."
          />
          <FaqCard
            num="1"
            title="Hansı xidmətləri təklif edirik?"
            content="Lorem ipsum dolor sit amet consectetur. Ultrices suspendisse volutpat bibendum egestas viverra tincidunt dolor cursus. Nunc cras dignissim massa lacus nunc bibendum urna."
          />
        </div>
      </div>
    </div>
  );
}

export default FAQ