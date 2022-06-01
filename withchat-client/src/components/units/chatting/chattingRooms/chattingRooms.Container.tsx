import { MouseEvent, useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import * as S from "./chattingRoom.Styles";
import axios from "axios";
import AddIcon from "@mui/icons-material/Add";
import CreateChattingRoom from "components/units/createChattingRoom/createChattingRoom.container";
import DeleteChattingRoom from "components/units/deleteChattingRoom/deleteChattingRoom.container";
import { io } from "socket.io-client";
import { Tooltip } from "@mui/material";

const socket = io("https://backend.withchat.site").connect();

export default function ChattingRoomList(props: any) {
  const [currentTab, setCurrentTab] = useState(-10);
  const [chattingList, setChattingList] = useState<any>([]);
  const [openCreate, setOpenCreate] = useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [userNickName, setUserNickName] = useState("");

  const onClickOpenDeleteModal = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setOpenDeleteModal((prev) => !prev);
  };

  useEffect(() => {
    const fetchMyChattingRooms = () => {
      axios
        .get("https://backend.withchat.site/chatting-server", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
        .then((res) => {
          setChattingList(res.data.result);
          if (res.status === 200) console.log(res.data.result);
        })
        .catch((err) => console.log(err));
    };
    fetchMyChattingRooms();
  }, []);

  const onClickSelectTab =
    (index: number) => (e: MouseEvent<HTMLDivElement>) => {
      setCurrentTab(index);
      props.setHome(false);
      props.setServerId(e.currentTarget.id)
      // socket.emit('join room', {
      //   roomNum: e.currentTarget.id,
      // })
      socket.emit("hihi", userNickName, e.currentTarget.id);
    };

  const onClickOpenCreateModal = () => {
    setOpenCreate((prev) => !prev);
  };
  useEffect(() => {
    const fetchUserLoggedIn = () => {
      const newAccessToken = localStorage.getItem("accessToken");
      axios
        .get(`https://backend.withchat.site/users/loggedInUser`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${newAccessToken}`,
          },
        })
        .then((res) => {
          if (res.status === 201) {
            setUserNickName(res.data.user.nickName);
          }
        })
        .catch((err) => console.log(err));
    };
    fetchUserLoggedIn();
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
              <S.CurrentChattingRoom
                className="transitionTap"
                menuIndex={index}
                id={el.id}
                currentTab={currentTab}
                onClick={onClickSelectTab(index)}
                onContextMenu={onClickOpenDeleteModal}
              >
                {el.image ? <img src={el.image} /> : <div>{el.name}</div>}

                {openDeleteModal && <DeleteChattingRoom />}
              </S.CurrentChattingRoom>
            </Tooltip>
          ))}
        </S.ChattingRoomBox>
      </S.ChattingRoomWrapper>
      {openCreate && (
        <CreateChattingRoom
          onClickOpenCreateModal={onClickOpenCreateModal}
          setOpenCreate={setOpenCreate}
        />
      )}
    </>
  );
}
