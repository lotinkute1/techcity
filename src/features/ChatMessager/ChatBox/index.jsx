import React, { useState } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import './chatBox.css';
import HeaderChatBox from './headerChatBox';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import StorageKeys from '../../../constants';

ChatBox.propTypes = {
  handleCollapseChatBox: PropTypes.func,
};

function ChatBox(props) {
  const {
    handleCollapseChatBox,
    message,
    receiver,
    conversations,
    handleInputMessageChange,
    isShowDetailMessage,
    handleClickConversation,
    handleClickSendMessage,
    allMessageByConversationId,
  } = props;
  const [isShowPopup, setIsShowPopup] = useState(false);
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem(StorageKeys.USER))
  );

  const onClickSendMessage = () => {
    if (handleClickSendMessage) {
      handleClickSendMessage();
    }
  };
  const handleShowPopUp = () => {
    setIsShowPopup((prevState) => !prevState);
  };
  const handleMessageChange = (e) => {
    if (handleInputMessageChange) {
      handleInputMessageChange(e.target.value);
    }
  };
  const onClickConversation = (conversation_id) => {
    if (handleClickConversation) {
      handleClickConversation(conversation_id);
    }
  };

  const renderConversation = () => {
    console.log('conversations', conversations)
    if (conversations) {
      return conversations.map((conversation) => {
        const { userInfo_2, message_text, conversation_id } = conversation;
        return (
          <li
            key={conversation_id}
            className="chatbox__conversation"
            onClick={() => onClickConversation(conversation_id)}
          >
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
    }

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

  const renderPopup = (receiver) => {
    return (
      <div className="chatbox__popup">
        <div className="chatbox__popup-header">
          <div className="chatbox__conversation-logo">
            <img src={receiver.ava} alt="" />
          </div>
          <h3 className="chatbox__popup-name">{receiver.name}</h3>
        </div>
        <ul className="chatbox__choice-list">
          <Link to={`/supplier/${receiver.id}`}>Xem thông tin cá nhân</Link>
        </ul>
      </div>
    );
  };

  const renderMessages = () => {
    return allMessageByConversationId.map((item) => {
      if (item.user_id === currentUser.id) {
        return (
          <p key={item.id} className="message__current-user">
            {item.message_text}
          </p>
        );
      } else {
        return (
          <p key={item.id} className="message__suppiler">
            {item.message_text}
          </p>
        );
      }
    });
  };
  return (
    <div className="chatbox__view">
      <HeaderChatBox handleCollapseChatBox={handleCollapseChatBox} />
      <div className="chatbox__window">
        <div className="chatbox__left">
          {isShowDetailMessage && (
            <>
              <div className="chatbox__vendor-name-wrap">
                <h5 className="chatbox__vendor-name" onClick={handleShowPopUp}>
                  {receiver && receiver.name} <ExpandMoreIcon />
                </h5>
                {isShowPopup && receiver && renderPopup(receiver)}
              </div>
              <div className="chatbox__message-box">
                <div className="chatbox__messages">
                  {allMessageByConversationId &&
                    allMessageByConversationId.length > 0 &&
                    renderMessages()}
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
                <Button
                  variant="outlined"
                  size="small"
                  endIcon={<SendIcon />}
                  onClick={onClickSendMessage}
                >
                  Send
                </Button>
              </div>
            </>
          )}
          {!isShowDetailMessage && renderWelcome()}
        </div>
        <ul className="chatbox__conversations">{renderConversation()}</ul>
      </div>
    </div>
  );
}

export default ChatBox;
