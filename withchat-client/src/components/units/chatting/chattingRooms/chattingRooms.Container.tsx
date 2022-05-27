
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import * as S from "./ChattingRoom.Styles";


export default function ChattingRoomList() {
  const [currentTab, setCurrentTab] = useState(0);
  const chattingList = [
    { id: "1", name: "1번방" },
    { id: "2", name: "2번방" },
    { id: "3", name: "리코드레코드" },
  ];

  const onClickSelectTab = (index: number) => {
    setCurrentTab(index);
  };

  return (
    <>
      <S.ChattingRoomWrapper>
        <S.ChattingRoomDmList src="/LOGO_WC.png" alt="DM 리스트" title="DM" />
        <S.ChattingRoomLine />
        {chattingList.map((el, index) => (
          <S.CurrentChattingRoom
            className="transitionTap"
            menuIndex={index}
            key={el.id}
            title={el.name}
            currentTab={currentTab}
            onClick={() => onClickSelectTab(index)}
          >
            <div>{el.name}</div>
          </S.CurrentChattingRoom>
        ))}
        <S.FindChattingRoom
          menuIndex={-1}
          currentTab={chattingList.length}
          title="채팅방 추가"
          onClick={() => onClickSelectTab(chattingList.length)}
        >
          <AddIcon fontSize="large" />
        </S.FindChattingRoom>
        <S.AddChattingRoom
          menuIndex={-1}
          currentTab={chattingList.length + 1}
          title="채팅방 찾기"
          onClick={() => onClickSelectTab(chattingList.length + 1)}
        >
          <SearchIcon fontSize="large" />
        </S.AddChattingRoom>
      </S.ChattingRoomWrapper>
    </>
  );
}
