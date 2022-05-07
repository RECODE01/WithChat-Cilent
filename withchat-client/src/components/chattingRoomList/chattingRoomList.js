import "./chattingRoomList.css";

export default function ChattingRoomList() {
  const chattingList = [
    { id: "1", name: "1번방" },
    { id: "2", name: "2번방" },
    { id: "3", name: "3번방" },
  ];

  return (
    <>
      <div className="wrapper">
        <img className="DmList" src="/LOGO_WC.png" alt="DM 리스트" title="DM" />
        <div className="line"></div>
        {chattingList.map((el) => (
          <div className="chattingList" title={el.name}>
            {el.name}
          </div>
        ))}
        <div className="chattingList addFindChat" title="채팅방 추가">
          ✚
        </div>
        <div className="chattingList addFindChat" title="채팅방 찾기">
          ◉
        </div>
      </div>
    </>
  );
}
