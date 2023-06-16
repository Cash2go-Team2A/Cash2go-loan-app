import React from "react";
import "../Styles/MsgForm.css";

const MsgForm = () => {
  return (
    <form className="newMessage">
      <div className="msg-heading">
        <div className="new-msg">
          <h2>New Message</h2>
          <p>sender@workermail.com</p>
        </div>
        <div className="email-div">
          <label htmlFor="email" className="email-label">
            To
          </label>
          <input type="email" placeholder="email@work.com" className="email" />
          <div className="ellipses1">...</div>
        </div>
      </div>
      <div className="linediv"></div>
      <div className="msg-main">
        <div className="msg-title">
          <label htmlFor="message-title" className="msg-label">Message Title Here</label>
          <input
            type="text"
            placeholder="Title"
            className="msg-title-input"
          />
          <div className="ellipses2">...</div>
        </div>
        <label htmlFor="body" className="body">
          Body
        </label>
        <textarea cols="120" rows="8" placeholder="Image asset list variant image. Mask layout underline invite mask effect shadow. Star bullet shadow overflow shadow. Content device rectangle project link create invite star group.

        Image asset list variant image. Mask layout underline invite mask effect shadow. Star bullet shadow overflow shadow. Content device rectangle project link create invite star group. Image asset list variant image. Mask layout underline invite mask effect shadow. Star bullet shadow overflow shadow. Content device rectangle project link create invite star group."></textarea>
        <div className="linediv"></div>
        <button className="send">Send</button>
      </div>
    </form>
  );
};

export default MsgForm;
