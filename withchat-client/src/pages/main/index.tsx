import Chatters from "components/units/chatting/chatters/chatters.Container";

export default function MainPage() {
  return (
    <div style={{ display: "flex" }}>
      {/* <ChattingRoomList />
        <DirectMessageList /> */}
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
