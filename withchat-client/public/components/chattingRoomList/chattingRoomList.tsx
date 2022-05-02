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
        <div className="me"> </div>
        {chattingList.map((el) => (
          <div className="chattingList">{el.name}</div>
        ))}
      </div>
    </>
  );
}
