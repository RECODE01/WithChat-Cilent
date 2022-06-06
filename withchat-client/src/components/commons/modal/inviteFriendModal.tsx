import { Box, Modal, Typography } from "@mui/material";
import axios from "axios";
import { ChangeEvent, useState } from "react";
import * as S from "./inviteFriendModal.Styles";

export default function InviteFriendModal(props: any) {
  const [keyword, setKeyword] = useState("");
  const [userList, setUserList] = useState([]);

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

  const onChangeSearchUser = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const onClickSearchUser = async () => {
    const fetchUserList = await axios
      .get("https://backend.withchat.site/users/search", {
        params: { keyword },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res: any) => {
        return res.data.searchResult;
      })
      .catch((reason: any) => {
        alert(reason.response.message);
      });
    setUserList(fetchUserList);
  };

  const onClickInviteFriend = async (e: any) => {
    const targetId = e.target.id;

    await axios
      .post(
        `https://backend.withchat.site/chatting-server-invite/`,
        {},
        {
          params: {
            targetId: targetId,
            chattingServerId: "5a360b2a-289e-40ae-a99d-3be8830b6ba2",
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
      .then((res) => {
        alert(res.data.message);
      })
      .catch((reason: any) => {
        alert(reason.response.data.message);
      });
  };

  return (
    <Modal
      open={props.open}
      onClose={props.onClickModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={{ alignItems: "center", justifyContent: "center" }}
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          서버 초대하기
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <S.ModalBackground>
            <S.ModalInput
              placeholder="이름 혹은 닉네임, 이메일 주소로 친구를 검색해보세요!"
              onChange={onChangeSearchUser}
            />
            <S.ModalButton onClick={onClickSearchUser}>검색하기</S.ModalButton>
          </S.ModalBackground>
        </Typography>
        <Typography id="modal-modal-description2" sx={{ mt: 2 }}>
          검색 결과 ({userList.length})
        </Typography>
        <S.ModalContentBox>
          {userList.map((el: any) => (
            <S.ModalContent key={el.id}>
              <S.FriendList style={{ display: "flex", alignItems: "center" }}>
                <img src="/LOGO_WC.png" alt="사람" height={"30px"} />
                {el.nickName} ( {el.email} )
              </S.FriendList>

              <S.AddFriendModalButton id={el.id} onClick={onClickInviteFriend}>
                서버 초대
              </S.AddFriendModalButton>
            </S.ModalContent>
          ))}
        </S.ModalContentBox>
      </Box>
    </Modal>
  );
}
