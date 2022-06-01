import Chatters from "components/units/chatting/chatters/chatters.Container";
import ChattingRoomList from "components/units/chatting/chattingRooms/chattingRooms.Container";
import DirectMessageList from "components/units/chatting/dmList/directMessageList.Container";
import Header from "components/commons/header/Header";
import CurrentChattingRoom from "components/units/chatting/currentChattingRoom/currentChattingRoom.Container";
import { useState } from "react";
import Channel from "../../components/units/channel/channel.container";

export default function MainPage() {
  const [home, setHome] = useState(true);

  const onClickMoveToHome = () => {
    setHome(true);
  };

  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <ChattingRoomList
          onClickMoveToHome={onClickMoveToHome}
          setHome={setHome}
        />
        {home ? <DirectMessageList /> : <Channel />}
        <CurrentChattingRoom />
        <Chatters />
      </div>
    </>
  );
}
