import * as S from "./ChattingRoom.Styles";

export default function ChattingRoomList() {
  const chattingList = [
    { id: "1", name: "1번방" },
    { id: "2", name: "2번방" },
    { id: "3", name: "3번방" },
  ];

  return (
    <>
      <S.ChattingRoomWrapper>
        <S.ChattingRoomDmList src="/LOGO_WC.png" alt="DM 리스트" title="DM" />
        <S.ChattingRoomLine />
        {chattingList.map((el) => (
          <S.CurrentChattingRoom key={el.id} title={el.name}>
            <div className="currentRoom" />
            <div>{el.name}</div>
          </S.CurrentChattingRoom>
        ))}
        <S.FindChattingRoom title="채팅방 추가">✚</S.FindChattingRoom>
        <S.AddChattingRoom title="채팅방 찾기">◉</S.AddChattingRoom>
      </S.ChattingRoomWrapper>
    </>
  );
}
