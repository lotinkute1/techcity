import React, { useState } from "react";
import PropTypes from "prop-types";
import "./chatBox.css";
import HeaderChatBox from "./headerChatBox";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";

ChatBox.propTypes = {
  handleCollapseChatBox: PropTypes.func,
};

function ChatBox(props) {
  const { handleCollapseChatBox, message, handleInputMessageChange, isShowDetailMessage,  handleClickConversation} = props;
  const [isShowPopup, setIsShowPopup] = useState(false);

  const handleShowPopUp = () => {
    setIsShowPopup((prevState) => !prevState);
  };
  const handleMessageChange = (e) => {
    if (handleInputMessageChange) {
      handleInputMessageChange(e.target.value);
    }
  };
  const onClickConversation = () => {
    if (handleClickConversation) {
      handleClickConversation();
    }
  };

  const renderConversation = () => (
    <li className="chatbox__conversation" onClick={onClickConversation}>
      <div className="chatbox__conversation-logo">
        <img
          src="https://cf.shopee.vn/file/a0851f141ffc6a234a275925eb185266_tn"
          alt=""
        />
      </div>
      <div className="chatbox__conversation-content">
        <p className="chatbox__conversation-name">unilevervn_beauty</p>
        <p className="chatbox__conversation-lastest">
          helloo mn toi ten la helloo mn toi ten la helloo mn toi ten la
        </p>
      </div>
    </li>
  );

  const renderWelcome = () => (
    <div className="chatbox__welcome">
      <img
        src="https://deo.shopeemobile.com/shopee/shopee-seller-live-vn/chateasy/6abdc0872a25853b36d17e7498335326.png"
        alt=""
      />
      <p>Xin chào!</p>
    </div>
  );

  const renderPopup = () => (
    <div className="chatbox__popup">
      <div className="chatbox__popup-header">
        <div className="chatbox__conversation-logo">
          <img
            src="https://cf.shopee.vn/file/a0851f141ffc6a234a275925eb185266_tn"
            alt=""
          />
        </div>
        <h3 className="chatbox__popup-name">unilevervn_beauty</h3>
      </div>
      <ul className="chatbox__choice-list">
        <li>Xem thông tin cá nhân</li>
      </ul>
    </div>
  );

  return (
    <div className="chatbox__view">
      <HeaderChatBox handleCollapseChatBox={handleCollapseChatBox} />
      <div className="chatbox__window">
        <div className="chatbox__left">
          {isShowDetailMessage && (
            <>
              <div className="chatbox__vendor-name-wrap">
                <h5 className="chatbox__vendor-name" onClick={handleShowPopUp}>
                  unilevervn_beauty <ExpandMoreIcon />
                </h5>
                {isShowPopup && renderPopup()}
              </div>
              <div className="chatbox__message-box">
                <div className="chatbox__messages">
                  <p className="message__suppiler">
                    Duy nhất 25.03 Voucher giảm 12%
                  </p>
                  <p className="message__current-user">hello mn</p>
                  <p className="message__suppiler">
                    Duy nhất 25.03 Voucher giảm 12%
                  </p>
                  <p className="message__current-user">hello mn</p>
                  <p className="message__suppiler">
                    Duy nhất 25.03 Voucher giảm 12%
                  </p>
                  <p className="message__current-user">hello mn</p>
                  <p className="message__suppiler">
                    Duy nhất 25.03 Voucher giảm 12%
                  </p>
                  <p className="message__current-user">hello mn</p>
                </div>
              </div>
              <div className="chatbox__form-control">
                <textarea
                  className="chatbox__input-message"
                  name="message"
                  placeholder="Gửi tin nhắn"
                  value={message}
                  onChange={handleMessageChange}
                ></textarea>
                <Button variant="outlined" size="small" endIcon={<SendIcon />}>
                  Send
                </Button>
              </div>
            </>
          )}
          {!isShowDetailMessage && renderWelcome()}
        </div>
        <ul className="chatbox__conversations">
          {renderConversation()}
        </ul>
      </div>
    </div>
  );
}

export default ChatBox;
