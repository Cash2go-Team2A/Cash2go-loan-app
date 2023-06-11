import React from "react";
import "../Styles/MessageContent.css";
import MessageContentInfo from "./MessageContentInfo";
import { Link } from "react-router-dom";

function MessageContent() {
  return (
    <div className=".messageContent">
      <div className="msg-top-bar">
        <div>
          <p className="msg-cnt-mb">
            Message <span>&gt;</span> Inbox
          </p>
          <h1>Messages</h1>
        </div>
        <div className="exit-new">
          <button className="markAll">Mark All</button>
          <button className="markRead">Mark All as Read</button>
        </div>
      </div>
      <div className="msg-nav">
        <div className="msg-section">
          <p>Inbox</p>
          <div className="msg-line selected"></div>
        </div>
        <Link to='/newmessage'>
          <div className="msg-section">
            <p>New</p>
            <div className="msg-line"></div>
          </div>
        </Link>
        <div className="msg-section">
          <p>Sent</p>
          <div className="msg-line"></div>
        </div>
        <div className="msg-section">
          <p>Thread</p>
          <div className="msg-line"></div>
        </div>
        <div className="msg-section">
          <p>Trash</p>
          <div className="msg-line"></div>
        </div>
      </div>
      <div className="Msg-inbox">
        <div className="msg-cnt-note">
          <div>
            <h4>Inbox</h4>
            <p> Sorted by Date</p>
          </div>
          <p className="msg-cnt-dot">...</p>
        </div>
        <div className="lineDivTop"></div>
        <MessageContentInfo />
      </div>
      <div className="goTo">
        <button className="prev">
          <span className="arrow-left">&larr;</span>Prev
        </button>
        <div className="numbers">
          <button>1</button>
          <button>2</button>
          <button>...</button>
          <button>5</button>
          <button>6</button>
        </div>
        <button className="next">
          Next<span className="arrow-right">&rarr;</span>
        </button>
      </div>
    </div>
  );
}

export default MessageContent;
