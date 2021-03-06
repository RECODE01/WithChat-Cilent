import { MouseEvent, useContext, useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import * as S from "./chattingRoom.Styles";
import axios from "axios";
import AddIcon from "@mui/icons-material/Add";
import CreateChattingRoom from "components/units/createChattingRoom/createChattingRoom.container";
import DeleteChattingRoom from "components/units/deleteChattingRoom/deleteChattingRoom.container";
import { Tooltip } from "@mui/material";
import { ChattingContext } from "pages/main";

export default function ChattingRoomList(props: any) {
  const { setServerId } = useContext(ChattingContext);
  const [currentTab, setCurrentTab] = useState(-10);
  const [chattingList, setChattingList] = useState<any>([]);
  const [openCreate, setOpenCreate] = useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState("");

  const onClickOpenDeleteModal = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setOpenDeleteModal(e.currentTarget.id);

    if (e.currentTarget.id === null || undefined || "") setOpenDeleteModal("");
  };

  const onClickSelectTab =
    (index: number) => (e: MouseEvent<HTMLDivElement>) => {
      setCurrentTab(index);
      props.setHome(false);
      setServerId(e.currentTarget.id);
    };

  const onClickOpenCreateModal = () => {
    setOpenCreate((prev) => !prev);
  };
  const fetchMyChattingRooms = () => {
    axios
      .get("https://backend.withchat.site/chatting-server", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        setChattingList(res.data.result);
      })
      .catch();
  };

  useEffect(() => {
    fetchMyChattingRooms();
  }, []);
  return (
    <>
      <S.ChattingRoomWrapper>
        <Tooltip title="홈" placement="right" arrow>
          <S.ChattingRoomDmList
            src="/LOGO_WC.png"
            alt="홈"
            onClick={props.onClickMoveToHome}
          />
        </Tooltip>
        <S.ChattingRoomLine />
        <Tooltip title="서버 추가" placement="right" arrow>
          <S.AddChattingRoom
            menuIndex={-1}
            currentTab={chattingList.length}
            title="서버 추가"
            onClick={onClickOpenCreateModal}
          >
            <AddIcon fontSize="large" />
          </S.AddChattingRoom>
        </Tooltip>
        <Tooltip title="서버 찾기" placement="right" arrow>
          <S.FindChattingRoom
            menuIndex={-1}
            currentTab={chattingList.length + 1}
            title="서버 찾기"
          >
            <SearchIcon fontSize="large" />
          </S.FindChattingRoom>
        </Tooltip>
        <S.ChattingRoomLine />
        <S.ChattingRoomBox>
          {chattingList.map((el: any, index: number) => (
            <Tooltip key={el.id} title={el.name} placement="right" arrow>
              <div>
                <S.CurrentChattingRoom
                  menuIndex={index}
                  id={el.id}
                  currentTab={currentTab}
                  onClick={onClickSelectTab(index)}
                  onContextMenu={onClickOpenDeleteModal}
                  image={el.image}
                >
                  {el.image ? <img src={el.image} /> : <div>{el.name}</div>}
                </S.CurrentChattingRoom>
                {openDeleteModal === el.id && (
                  <DeleteChattingRoom
                    id={el.id}
                    name={el.name}
                    onClickOpenDeleteModal={onClickOpenDeleteModal}
                    fetchMyChattingRooms={fetchMyChattingRooms}
                  />
                )}
              </div>
            </Tooltip>
          ))}
        </S.ChattingRoomBox>
      </S.ChattingRoomWrapper>

      {openCreate && (
        <CreateChattingRoom
          onClickOpenCreateModal={onClickOpenCreateModal}
          setOpenCreate={setOpenCreate}
          fetchMyChattingRooms={fetchMyChattingRooms}
        />
      )}
    </>
  );
}
