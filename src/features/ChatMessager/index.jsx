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
  const [message, setMessage] = useState(undefined); // input
  const [isShowDetailMessage, setIsShowDetailMessage] = useState(false);
  const [allMessages, setAllMessages] = useState([]);
  const [conversations, setConversations] = useState([]);
  const [allMessageByConversationId, setAllMessageByConversationId] = useState(
    []
  );
  const [infoByConversationId, setInfoByConversationId] = useState(null);
  const [receiver, setReceiver] = useState(null);
  const [latestMessage, setLatestMessage] = useState([]);
  const [messagesOfCurrentUser, setMessagesOfCurrentUser] = useState([]);

  const getAllMessages = async ()=>{
    const { data } = await chatBoxApi.getAllMessages();
    setAllMessages(data);
  }
  

  // const allMessage = [
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
  //   {
  //     id: 13,
  //     message_text: 'chua',
  //     conversation_id: 15,
  //     user_id: 11,
  //   },
  //   {
  //     id: 17,
  //     message_text: 'buoi trua an buoi chua',
  //     conversation_id: 15,
  //     user_id: 11,
  //   },
  //   {
  //     id: 14,
  //     message_text: 'toi dang doi ban 12',
  //     conversation_id: 15,
  //     user_id: 12,
  //   },
  //   {
  //     id: 15,
  //     message_text: 'toi dang doi ban 13',
  //     conversation_id: 15,
  //     user_id: 13,
  //   },
  //   {
  //     id: 16,
  //     message_text: 'toi dang doi ban 13',
  //     conversation_id: 15,
  //     user_id: 13,
  //   },
  // ];

  const handleClickConversation = async (conversation_id) => {
    const { data } = await chatBoxApi.getMessagesByConversationId(
      conversation_id
    );
    const conversationId = data[0].conversation_id;
    const receiver = conversations.find(
      (item) => item.conversation_id === conversationId
    );
    console.log('receiver',receiver)
    const { userInfo_1, userInfo_2 } = receiver;
    const ngnhan = currentUser.id === userInfo_1 ? userInfo_2 : userInfo_1;
    setInfoByConversationId(receiver);
    setReceiver(ngnhan);
    setAllMessageByConversationId(data);
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
    setAllMessages(allMessages);
    setIsShowChatBox(true);
  };
  const getMessageOfCurrentUser = (allMessage) => {
    if (allMessage && allMessage.length > 0 && currentUser) {
      // let messagesOfCurrentUser = [];
      // console.log('step 1');
      // find index
      allMessage.forEach((item) => {
        chatBoxApi
          .getConversationById(item.conversation_id)
          .then((res) => {
            const { data } = res;
            const temp1 = {
              userInfo_1: data.userone,
              userInfo_2: data.usertwo,
            };
            const conversation = { ...item, ...temp1 };
            const { userInfo_1, userInfo_2 } = conversation;
            // console.log('step 2', conversation);

            if (
              userInfo_1.id === currentUser.id ||
              userInfo_2.id === currentUser.id
            ) {
              // messagesOfCurrentUser.push(conversation);
              setMessagesOfCurrentUser((prev) => ([ ...prev, conversation]));
            }
          })
          .catch((err) =>
            console.log('fail to call api getConversationById', err)
          );
      });
    }
  };
  console.log('setMessagesOfCurrentUser', messagesOfCurrentUser)

  const filterConversationsOfUser = (messagesOfCurrentUser)=>{
    let temp = [];
    if(messagesOfCurrentUser && messagesOfCurrentUser.length > 0) {
      messagesOfCurrentUser.forEach((message, index) => {
        const currentMessageIndex = temp.findIndex(
          (item, index) => item.conversation_id === message.conversation_id
        );
        if (currentMessageIndex === -1) {
          temp.push(message);
        } else {
          temp[currentMessageIndex] = message;
        }
      })
    }
    return temp
  }

  const getDataByConversation = (arr) => {
    console.log('arr', arr);
    if (arr && arr.length > 0) {
      arr.forEach((item) => {
        chatBoxApi
          .getConversationById(item.conversation_id)
          .then((res) => {
            const { data } = res;
            const temp = {
              userInfo_1: data.userone,
              userInfo_2: data.usertwo,
            };
            const conversation = { ...item, ...temp };
            setConversations((prev) =>
              !prev
                .map((i) => i.conversation_id)
                .includes(conversation.conversation_id)
                ? [...prev, conversation]
                : prev
            );
          })
          .catch((err) => console.log('fail to call api getConversationById'));
      });
    }
  };
  useEffect(() => {
    getAllMessages();
  }, []);
  useEffect(() => {
    getMessageOfCurrentUser(allMessages);
  }, [allMessages]);

  console.log('messagesOfCurrentUser', messagesOfCurrentUser)
  useEffect(()=>{
    if (messagesOfCurrentUser) {
      const filterLatestMessage = filterConversationsOfUser(
        messagesOfCurrentUser
      );
      console.log('filterLatestMessage', filterLatestMessage);
      setLatestMessage(filterLatestMessage);
    }
  },[messagesOfCurrentUser])

  useEffect(() => {
    getDataByConversation(latestMessage);
  }, [latestMessage]);
  const handleClickSendMessage = async () => {
    if (message) {
      const formData = {
        message_text: message,
        user2_id: receiver.id,
        conversation_id: infoByConversationId.conversation_id,
      };
      try {
        const res = await chatBoxApi.addMessage(formData);
        const { data } = await chatBoxApi.getMessagesByConversationId(
          infoByConversationId.conversation_id
        );
        setMessage('');
        setAllMessageByConversationId(data);
        // window.scrollTo({top:0,behavior:'smooth'})
      } catch (error) {
        console.log('Fail to call createMessage api');
      }
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
          conversations={conversations}
          allMessageByConversationId={allMessageByConversationId}
          receiver={receiver}
        />
      )}
    </>
  );
}

export default ChatMessager;
