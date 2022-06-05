import Chatters from "components/units/chatting/chatters/chatters.Container";
import ChattingRoomList from "components/units/chatting/chattingRooms/chattingRooms.Container";
import DirectMessageList from "components/units/chatting/dmList/directMessageList.Container";
import Header from "components/commons/header/Header";
import CurrentChattingRoom from "components/units/chatting/currentChattingRoom/currentChattingRoom.Container";
import { createContext, useState } from "react";
import Channel from "../../components/units/channel/channel.container";



export const ChattingContext:any = createContext({});

export default function MainPage() {
  const [home, setHome] = useState(true);
  const [serverId, setServerId]=useState('')
  const [chatHistory,setChatHistory] = useState([])

  const onClickMoveToHome = () => {
    setHome(true);
  };
  const [channelId,setChannelId] = useState("id")
  const [chattings,setChattings] = useState([])

  const value = {
    channelId,
    chattings,
    setChannelId,
    setChattings,
    chatHistory,
    setChatHistory
  };

  return (
    <>
      <ChattingContext.Provider value={value}>
      <Header />
      <div style={{ display: "flex" }}>
        <ChattingRoomList
          onClickMoveToHome={onClickMoveToHome}
          setHome={setHome}
          setServerId={setServerId}
        />
        {home ? <DirectMessageList /> : <Channel serverId={serverId}/>}
        <CurrentChattingRoom />
        <Chatters />
      </div>
      </ChattingContext.Provider>
    </>
  );
}
