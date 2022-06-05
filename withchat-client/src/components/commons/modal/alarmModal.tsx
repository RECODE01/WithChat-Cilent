import { Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useState } from "react";
import * as S from "./alarmModal.Styles";
interface IPropsAlarmModal {
  openAlarm: boolean;
  inviteList: string[];
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
        <Typography id="modal-modal-title" variant="h6" component="h2">
          <button onClick={onClickMenu0}>받은 친구 신청</button>
          <button onClick={onClickMenu1}>받은 서버 초대</button>
        </Typography>
        {menu0 && (
          <S.ModalBackground>
            <div>친구 요청 리스트</div>
            {props.friendRequestList.length &&
              props.friendRequestList.map((el: any) => (
                <S.ModalContentBox key={el.id}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img src="/LOGO_WC.png" alt="사람" height={"30px"} />
                    {el.fromUser.nickName} ( {el.fromUser.email} ) 친구 요청
                    리스트
                  </div>
                  <S.ModalButton
                    id={el.id}
                    onClick={onClickFriendRequestAccept}
                  >
                    수락하기
                  </S.ModalButton>
                </S.ModalContentBox>
              ))}
          </S.ModalBackground>
        )}
        {menu1 && (
          <S.ModalBackground>
            <div>서버 초대 리스트</div>
            {props.inviteList.length &&
              props.inviteList.map((el: any) => (
                <S.ModalContentBox key={el.id}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img src="/LOGO_WC.png" alt="사람" height={"30px"} />
                    {el.chattingRoom.name}
                    <div style={{ color: "white" }}></div>
                  </div>
                  <S.ModalButton id={el.id}>수락하기</S.ModalButton>
                </S.ModalContentBox>
              ))}
          </S.ModalBackground>
        )}
      </Box>
    </Modal>
  );
}
