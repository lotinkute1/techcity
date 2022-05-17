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
  const [conversations, setConversations] = useState(null);
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
    let allMessagesOfCurrentUser = [];
    if (currentUser) {
      allMessagesOfCurrentUser = allMessage.filter(
        (element) => element.user_id === currentUser.id
      );
    }
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
    console.log(temp);
    return temp;
  };
  useEffect(() => {
    const latestMessage = filterConversationsOfUser(allMessage);
    const fakeData = [
      {
        id: 12,
        message_text: 'ban an com chua',
        conversation_id: 13,
        user_id: 11,
        userInfo_1: {
          id: 11,
          name: 'Nguyễn Hữu Minh Huy',
          phone_number: '0784508270',
          email: 'lotinkute1@gmail.com',
          address: '93/3 Nguyễn Tất Thành',
          ava: 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.18169-9/13533134_1819871714914612_3762039182450611525_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=a4a2d7&_nc_ohc=ZzbG9lbGQOcAX-tbDci&tn=kkOrLYcznpFAuopx&_nc_ht=scontent.fsgn2-4.fna&oh=00_AT-Q2zqcIiBZxdXpbh3xVeuMncpPZn-f-fMfADtGrHXixg&oe=6293C634',
          status: '1',
          role: 1,
          email_verified_at: null,
        },
        userInfo_2: {
          id: 1,
          name: 'Margaret Larkin',
          phone_number: '0353422895',
          email: 'sammy.beahan@example.net',
          address: '47418 Wiegand Point\nWest Jadonside, MI 67394-7749',
          ava: '09DMTWHozdumQc0o18gDcNtnhc5bfpoDgJD1Sxqu',
          status: '1',
          role: 2,
          email_verified_at: null,
        },
      },
      {
        id: 17,
        message_text: 'buoi trua an buoi chua',
        conversation_id: 15,
        user_id: 11,
        userInfo_1: {
          id: 9,
          name: 'Ms. Katrina Treutel Jr.',
          phone_number: '0193626695',
          email: 'schinner.nichole@example.com',
          address: '96203 Nat Creek\nDibbertchester, AK 06744',
          ava: 'mwcnjbdwtUwJGO74YS1jKFTZYTClTsSsthsLIRKZ',
          status: '0',
          role: 1,
          email_verified_at: null,
        },
        userInfo_2: {
          id: 12,
          name: 'dat',
          phone_number: '125126123123',
          email: 'lotinkute33@gmail.com',
          address: null,
          ava: 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.15752-9/82554483_1511973895625772_4748584226926886912_n.jpg?stp=dst-jpg_p100x100&_nc_cat=109&ccb=1-5&_nc_sid=4de414&_nc_ohc=6KdPdlQ4RMYAX8oB-Q_&_nc_ht=scontent.fsgn2-4.fna&oh=03_AVIEg_nA_Ulo6CPGvsNxx-xRcjpwRj1xWml8MWzQZh1tRQ&oe=6281367A',
          status: '1',
          role: 1,
          email_verified_at: null,
        },
      },
    ];
    setConversations(fakeData);
  }, [allMessages]);
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
          conversations={conversations}
        />
      )}
    </>
  );
}

export default ChatMessager;
