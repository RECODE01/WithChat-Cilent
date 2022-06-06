import { Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useState } from "react";
import * as S from "./alarmModal.Styles";
interface IPropsAlarmModal {
  openAlarm: boolean;
  inviteList: {}[];
  friendRequestList: string[];
  onClickModalAlarm: () => void;
}

export default function AlarmModal(props: IPropsAlarmModal) {
  const [menu0, setMenu0] = useState(true);
  const [menu1, setMenu1] = useState(false);

  const onClickMenu0 = () => {
    setMenu0(true);
    setMenu1(false);
  };

  const onClickMenu1 = () => {
    setMenu0(false);
    setMenu1(true);
  };

  const onClickFriendRequestAccept = async (e: any) => {
    const requestId = e.target.id;
    await axios
      .post(
        `https://backend.withchat.site/friend-request/accept/${requestId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
      .then(() => {
        alert("친구 요청을 수락했습니다.");
      })
      .catch((reason: any) => {
        alert(reason.response.data.message);
      });
  };

  const onClickEnterServer = async (e: any) => {
    const inviteId = e.target.id;
    await axios
      .post(
        `https://backend.withchat.site/chatting-server-invite/accept`,
        {},
        {
          params: {
            inviteId: inviteId,
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
      .then(() => {
        alert("서버 초대을 수락했습니다.");
      })
      .catch((reason: any) => {
        alert(reason.response.data.message);
      });
  };

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    height: 500,
    bgcolor: "#2F3136",
    color: "white",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  return (
    <Modal
      open={props.openAlarm}
      onClose={props.onClickModalAlarm}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={{ alignItems: "center", justifyContent: "center" }}
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <S.AlarmMenu onClick={onClickMenu0} selected={menu0}>
            받은 친구 신청 ({props.friendRequestList.length})
          </S.AlarmMenu>
          <S.AlarmMenu onClick={onClickMenu1} selected={menu1}>
            받은 서버 초대 ({props.inviteList.length})
          </S.AlarmMenu>
        </Typography>
        {menu0 && (
          <S.ModalBackground>
            {props.friendRequestList.map((el: any) => (
              <S.ModalContentBox key={el.id}>
                <S.Content>
                  <img src="/LOGO_WC.png" alt="사람" />
                  {el.fromUser.nickName} ( {el.fromUser.email} )
                </S.Content>
                <S.ModalButton id={el.id} onClick={onClickFriendRequestAccept}>
                  친구 수락하기
                </S.ModalButton>
              </S.ModalContentBox>
            ))}
          </S.ModalBackground>
        )}
        {menu1 && (
          <S.ModalBackground>
            {props.inviteList.map((el: any) => (
              <S.ModalContentBox key={el.id}>
                <S.Content>
                  <img src={el.chattingServer.image} alt="채팅 서버 이미지" />
                  {el.chattingServer.name}
                  <div style={{ color: "white" }}></div>
                </S.Content>
                <S.ModalButton id={el.id} onClick={onClickEnterServer}>
                  서버 입장하기
                </S.ModalButton>
              </S.ModalContentBox>
            ))}
          </S.ModalBackground>
        )}
      </Box>
    </Modal>
  );
}
