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
  const {
    handleCollapseChatBox,
    message,
    conversations,
    handleInputMessageChange,
    isShowDetailMessage,
    handleClickConversation,
    handleClickSendMessage,
  } = props;
  const [isShowPopup, setIsShowPopup] = useState(false);
 
  const onClickSendMessage = () => {
    if(handleClickSendMessage) {
      handleClickSendMessage();
    }
  }
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

  const renderConversation = () => {
    return conversations.map((conversation, index) => {
      const { userInfo_2, message_text } = conversation;
      return (
        <li key={index} className="chatbox__conversation" onClick={onClickConversation}>
          <div className="chatbox__conversation-logo">
            <img
              src={
                userInfo_2?.ava ||
                'https://static.thenounproject.com/png/363640-200.png'
              }
              alt=""
            />
          </div>
          <div className="chatbox__conversation-content">
            <p className="chatbox__conversation-name">{userInfo_2?.name}</p>
            <p className="chatbox__conversation-lastest">{message_text}</p>
          </div>
        </li>
      );
    });
    // return (
    //   <li className="chatbox__conversation" onClick={onClickConversation}>
    //     <div className="chatbox__conversation-logo">
    //       <img
    //         src={
    //           'https://cf.shopee.vn/file/a0851f141ffc6a234a275925eb185266_tn' ||
    //           'https://static.thenounproject.com/png/363640-200.png'
    //         }
    //         alt=""
    //       />
    //     </div>
    //     <div className="chatbox__conversation-content">
    //       <p className="chatbox__conversation-name">unilevervn_beauty</p>
    //       <p className="chatbox__conversation-lastest">
    //         helloo mn toi ten la helloo mn toi ten la helloo mn toi ten la
    //       </p>
    //     </div>
    //   </li>
    // );
  };

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
            src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.15752-9/82554483_1511973895625772_4748584226926886912_n.jpg?stp=dst-jpg_p100x100&_nc_cat=109&ccb=1-5&_nc_sid=4de414&_nc_ohc=6KdPdlQ4RMYAX8oB-Q_&_nc_ht=scontent.fsgn2-4.fna&oh=03_AVIEg_nA_Ulo6CPGvsNxx-xRcjpwRj1xWml8MWzQZh1tRQ&oe=6281367A"
            alt=""
          />
        </div>
        <h3 className="chatbox__popup-name">dat</h3>
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
                dat <ExpandMoreIcon />
                </h5>
                {isShowPopup && renderPopup()}
              </div>
              <div className="chatbox__message-box">
                <div className="chatbox__messages">
                  <p className="message__suppiler">
                    Duy nhất 25.03 Voucher giảm 12%
                  </p>
                  <p className="message__current-user">Iphone nào đang hot</p>
                  <p className="message__suppiler">
                    Iphone 13 nha bạn
                  </p>
                  <p className="message__current-user">hiệu năng có ổn không bạn</p>
                  <p className="message__suppiler">
                    Dùng tác vụ bình thường rất sướng nha bạn
                  </p>
                  <p className="message__current-user">hello mn</p>
                  <p className="message__suppiler">
                   bạn muốn mình tư vấn thêm không ?
                  </p>
                  <p className="message__current-user">shop tư vấn nhiệt tình quá</p>
                  <p className="message__current-user">mình đặt 1 cái nhaaaa</p>
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
                <Button variant="outlined" size="small" endIcon={<SendIcon />} onClick={onClickSendMessage}>
                  Send
                </Button>
              </div>
            </>
          )}
          {!isShowDetailMessage && renderWelcome()}
        </div>
        <ul className="chatbox__conversations">
          {renderConversation()}
          <li className="chatbox__conversation" onClick={onClickConversation}>
        <div className="chatbox__conversation-logo">
          <img
            src={
              'https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.15752-9/82554483_1511973895625772_4748584226926886912_n.jpg?stp=dst-jpg_p100x100&_nc_cat=109&ccb=1-5&_nc_sid=4de414&_nc_ohc=6KdPdlQ4RMYAX8oB-Q_&_nc_ht=scontent.fsgn2-4.fna&oh=03_AVIEg_nA_Ulo6CPGvsNxx-xRcjpwRj1xWml8MWzQZh1tRQ&oe=6281367A' ||
              'https://static.thenounproject.com/png/363640-200.png'
            }
            alt=""
          />
        </div>
        <div className="chatbox__conversation-content">
          <p className="chatbox__conversation-name">dat</p>
          <p className="chatbox__conversation-lastest">
          mình đặt 1 cái nhaaaa
          </p>
        </div>
      </li>
        </ul>
      </div>
    </div>
  );
}

export default ChatBox;
