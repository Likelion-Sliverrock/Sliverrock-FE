import React, { useState } from "react";
import "../styles/friendList.css";
import friendListImg from "../styles/friendList.jpg";
import { BsTelephoneFill } from "react-icons/bs";

function FriendList(props) {
  const [showModal, setShowModal] = useState(false);

  const handleCallButtonClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div className="image-container">
        <img
          src={friendListImg}
          alt="friendListImg"
          className="friendListImg"
        />
        <div className="container">
          <h2>{props.friendList.nickname}</h2>
          <p>
            {props.friendList.birth}&nbsp; ({props.friendList.gender})
          </p>
          <button className="callButton" onClick={handleCallButtonClick}>
            <div className="iconImg">
              <BsTelephoneFill />
            </div>
          </button>
        </div>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <p>전화번호: {props.friendList.phoneNum}</p>
            <button onClick={closeModal}>닫기</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FriendList;
