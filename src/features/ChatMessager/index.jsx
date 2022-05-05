import React, { useState } from "react";
import PropTypes from "prop-types";
import ButtonChatBox from "./ButtonChatBox";
import ChatBox from "./ChatBox";

ChatMessager.propTypes = {};

function ChatMessager(props) {
  const [isShowChatBox, setIsShowChatBox] = useState(false);
  const handleCollapseChatBox = () => {
    setIsShowChatBox(false);
  };
  const handleClickChatButton = ()=>{
    setIsShowChatBox(true);
  }
  return (
    <>
      {!isShowChatBox && <ButtonChatBox handleClickChatButton={handleClickChatButton}/>}
      {isShowChatBox && (
        <ChatBox handleCollapseChatBox={handleCollapseChatBox} />
      )}
    </>
  );
}

export default ChatMessager;
