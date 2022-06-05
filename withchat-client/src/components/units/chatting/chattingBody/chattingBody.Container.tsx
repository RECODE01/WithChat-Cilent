import styled from "@emotion/styled";
import { ChattingContext } from "pages/main";
import {useContext, useEffect, useRef} from "react";

const Message = styled.div`
    width:35%;
    background-color:#16a8f1;
    border-radius: 20px;
    margin:20px 0;
    padding:10px;
    & .nickName{
        font-size: 13px;
        opacity: 0.4;
        padding: 5px 0;
    }
    & .user__profile{
        width: 20px;
        height:20px;
        & > img{
            width: 100%;
        }
    }
`

const MessageList = styled.div`
    width:100%;
    height:30vh;
    overflow: auto;
    padding:20px;
`

const ChatImg = styled.img`
    width: 100%;
`

export default  function ChattingBody() {
    const {chatHistory} = useContext(ChattingContext)
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
        {
          chatHistory && chatHistory?.map((el:any,index:number) => {
              return <Message key={Date.now() + index}>
              <div className="user__profile">
                  <img src={el.writer.picture ? el.writer.picture : "/avatar.png"} alt="유저 프로필"/>
              </div>
              <h3 className="nickName">{el.writer.nickName}</h3>
              {
                  el.contents.includes("https://storage.googleapis.com") ? 
                  JSON.parse(el.contents).map((el:string) => {
                      return <ChatImg key={Date.now() + index} src={el} />
                  }) :
                    <div>{el.contents}</div>
              }
          </Message>
          })  
        }
      </MessageList>
    );
}
