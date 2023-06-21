import React from "react";
import alarm from "../assets/alarm.jpg";
import "../Styles/Modal.css";

const Modal = ({ closeModal }) => {
  return (
    <div className="modal">
      <header className="alarm-cancel">
        <img src={alarm} alt="alarm" className="alarm" />
        <button className="cancelbtn" onClick={() => closeModal(false)}>
          x
        </button>
      </header>
      <p className="modal-title">Delete Selected Items?</p>
      <p>
        Are you sure you want to delete the selected item(s)?
        <p>
          The process is <span className="bold-q">irreversible</span>
        </p>
      </p>
      <footer>
        <button className="no" onClick={() => closeModal(false)}>
          No
        </button>
        <button className="yes">Yes</button>
      </footer>
    </div>
  );
};

export default Modal;