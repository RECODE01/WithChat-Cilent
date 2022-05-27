import Chatters from "components/units/chatting/chatters/Chatters.Container";
import ChattingRoomList from "components/units/chatting/chattingRooms/ChattingRooms.Container";
import DirectMessageList from "components/units/chatting/dmList/DirectMessageList.Container";

export default function MainPage() {
  return (
    <div style={{ display: "flex" }}>
      <ChattingRoomList />
      <DirectMessageList />
      <div
        style={{
          width: "100%",
          backgroundColor: "#36393F",
          color: "white",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        채팅방
      </div>
      <Chatters />
    </div>
  );
}
