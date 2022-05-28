import Chatters from "components/units/chatting/chatters/chatters.Container";
import ChattingRoomList from "components/units/chatting/chattingRooms/chattingRooms.Container";
import DirectMessageList from "components/units/chatting/dmList/directMessageList.Container";
import Header from "components/commons/header/Header";
import CurrentChattingRoom from "components/units/chatting/currentChattingRoom/currentChattingRoom.Container";

export default function MainPage() {
  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <ChattingRoomList />
        <DirectMessageList />
        <CurrentChattingRoom />
        <Chatters />
      </div>
    </>
  );
}
