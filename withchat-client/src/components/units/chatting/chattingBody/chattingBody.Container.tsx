import styled from "@emotion/styled";
import { ChattingContext } from "pages/main";
import { useContext, useEffect, useRef } from "react";
import { getShortDateString } from "utils/dateUtils";

const Message = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  border-bottom: 1px solid #999;
  & .user__profile__info {
    display: flex;
    align-items: center;
  }
  & .message__date {
    margin-left: 20px;
    opacity: 0.5;
    font-size: 13px;
  }
  & .contents__img__box {
    width: 100%;
    display: flex;
  }
  & .contents {
    text-align: left;
    margin-top: 10px;
  }
  & .nickName {
    font-size: 17px;
    opacity: 0.4;
    padding: 5px 0;
    text-align: left;
  }
  & .user__profile {
    width: 40px;
    height: 40px;
    margin-right: 10px;
    & > img {
      width: 100%;
      border-radius: 50%;
    }
  }
  & .chatting__img {
    width: 20%;
    margin-right: 20px;
  }
`;

const MessageList = styled.div`
  width: 100%;
  padding: 20px;
  min-height: 50vh;
  flex: 1;
  overflow: auto;
  &#message__list {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  &#message__list::-webkit-scrollbar {
    display: none;
  }
`;

const ChatImg = styled.img`
  width: 100%;
`;

export default function ChattingBody() {
  const { chatHistory } = useContext(ChattingContext);
  const messageBoxRef = useRef<any>();

  const scrollToBottom = () => {
    if (messageBoxRef.current) {
      messageBoxRef.current.scrollTop = messageBoxRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory]);

  return (
    <MessageList ref={messageBoxRef} id="message__list">
      {chatHistory &&
        chatHistory?.map((el: any, index: number) => {
          return (
            <Message key={Date.now() + index}>
              <div className="user__profile__info">
                <div className="user__profile">
                  <img
                    src={el.writer.picture ? el.writer.picture : "/avatar.png"}
                    alt="유저 프로필"
                  />
                </div>
                <div className="nickName">{el.writer.nickName}</div>
                <div className="message__date">
                  {getShortDateString(el.createdAt)}
                </div>
              </div>
              <div>
                {el.type === "image" ? (
                  <div className="contents__img__box">
                    {JSON.parse(el.contents).map((el: string) => {
                      return (
                        <ChatImg
                          key={Date.now() + index}
                          src={el}
                          className="chatting__img"
                        />
                      );
                    })}
                  </div>
                ) : (
                  <div className="contents">{el.contents}</div>
                )}
              </div>
            </Message>
          );
        })}
    </MessageList>
  );
}
