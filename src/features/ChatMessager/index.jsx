import React, { useEffect, useState } from 'react';
import chatBoxApi from '../../api/chatBoxApi';
import StorageKeys from '../../constants';
import ButtonChatBox from './ButtonChatBox';
import ChatBox from './ChatBox';

ChatMessager.propTypes = {};

function ChatMessager(props) {
  const [isShowChatBox, setIsShowChatBox] = useState(false);
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem(StorageKeys.USER))
  );
  const [message, setMessage] = useState(undefined);
  const [isShowDetailMessage, setIsShowDetailMessage] = useState(false);
  const [allMessages, setAllMessages] = useState(null);
  const [latestMessageToConversation, setLatestMessageToConversation] =
    useState(false);
  const messageToConversationId = [
    {
      id: 11,
      message_text: 'day la hoang ne',
      conversation_id: 13,
      user_id: 11,
    },
    {
      id: 13,
      message_text: 'tin nhan 1, user 2',
      conversation_id: 13,
      user_id: 2,
    },
    {
      id: 14,
      message_text: 'tin nhan 2, user 2',
      conversation_id: 13,
      user_id: 2,
    },
    {
      id: 15,
      message_text: 'ban an com chua',
      conversation_id: 13,
      user_id: 11,
    },
  ];

  // const fakedata = [
  //   {
  //     id: 11,
  //     message_text: 'day la hoang ne',
  //     conversation_id: 13,
  //     user_id: 11,
  //   },
  //   {
  //     id: 12,
  //     message_text: 'ban an com chua',
  //     conversation_id: 13,
  //     user_id: 11,
  //   },
  // ];

  const allMessage = [
    {
      id: 11,
      message_text: 'day la hoang ne',
      conversation_id: 13,
      user_id: 11,
    },
    {
      id: 12,
      message_text: 'ban an com chua',
      conversation_id: 13,
      user_id: 11,
    },
    {
      id: 13,
      message_text: 'chua',
      conversation_id: 15,
      user_id: 11,
    },
    {
      id: 17,
      message_text: 'buoi trua an buoi chua',
      conversation_id: 15,
      user_id: 11,
    },
    {
      id: 14,
      message_text: 'toi dang doi ban 12',
      conversation_id: 15,
      user_id: 12,
    },
    {
      id: 15,
      message_text: 'toi dang doi ban 13',
      conversation_id: 15,
      user_id: 13,
    },
    {
      id: 16,
      message_text: 'toi dang doi ban 13',
      conversation_id: 15,
      user_id: 13,
    },
  ];
  const usersByConversationId = {
    sender_id: 11,
    receiver_id: 2,
  };

  const handleClickConversation = () => {
    setIsShowDetailMessage(true);
  };
  const handleInputMessageChange = (message) => {
    setMessage(message);
  };
  const handleCollapseChatBox = () => {
    setIsShowChatBox(false);
  };
  const handleClickChatButton = () => {
    //get api all message
    setAllMessages(allMessage);
    setIsShowChatBox(true);
  };
  const filterConversationsOfUser = (allMessage) => {
    if (!allMessage) return;
    const allMessagesOfCurrentUser = allMessage.filter(
      (element) => element.user_id === currentUser.id
    );
    let duplicate = false;
    let duplicateIndex;
    let temp = [];
    for (let i = 0; i < allMessagesOfCurrentUser.length; i++) {
      // eslint-disable-next-line no-loop-func
      temp.forEach((element, index) => {
        if (
          element.conversation_id ===
          allMessagesOfCurrentUser[i].conversation_id
        ) {
          duplicate = true;
          duplicateIndex = index;
        } else {
          duplicate = false;
          duplicateIndex = null;
        }
      });
      if (duplicate) {
        temp[duplicateIndex] = allMessagesOfCurrentUser[i];
      } else {
        temp.push(allMessagesOfCurrentUser[i]);
      }
    }
    return temp;
  };
  useEffect(() => {
    filterConversationsOfUser(allMessage);
  }, [allMessage])
  const handleClickSendMessage = async () => {
    if (message) {
      const formData = {
        message_text: message,
      };
      const res = await chatBoxApi.addMessage(message);
      console.log(res);
    }
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
          handleClickSendMessage={handleClickSendMessage}
        />
      )}
    </>
  );
}

export default ChatMessager;
