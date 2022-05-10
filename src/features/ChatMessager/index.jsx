import React, { useState } from "react";
import ButtonChatBox from "./ButtonChatBox";
import ChatBox from "./ChatBox";

ChatMessager.propTypes = {};

function ChatMessager(props) {
  const [isShowChatBox, setIsShowChatBox] = useState(false);
  const [message, setMessage] = useState(undefined);
  const [isShowDetailMessage, setIsShowDetailMessage] = useState(false);

  const handleClickConversation = ()=>{
    setIsShowDetailMessage(true);
  }
  const handleInputMessageChange = (message) => {
    setMessage(message);
  };
  const handleCollapseChatBox = () => {
    setIsShowChatBox(false);
  };
  const handleClickChatButton = () => {
    setIsShowChatBox(true);
  };
  return (
    <>
      {!isShowChatBox && (
        <ButtonChatBox handleClickChatButton={handleClickChatButton} />
      )}
      {isShowChatBox && (
        <ChatBox
          handleCollapseChatBox={handleCollapseChatBox}
          message={message}
          isShowDetailMessage={isShowDetailMessage}
          handleInputMessageChange={handleInputMessageChange}
          handleClickConversation={handleClickConversation}
        />
      )}
    </>
  );
}

export default ChatMessager;
