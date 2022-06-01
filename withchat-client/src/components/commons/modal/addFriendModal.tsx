import { Box, Modal, Typography } from "@mui/material";
import axios from "axios";
import { ChangeEvent } from "react";
import * as S from "./addFriendModal.Styles";

interface IPropsAddFriendModal {
  open: boolean;
  keyword: string;
  userList: string[];
  setKeyword: any;
  setUserList: any;
  onClickModal: () => void;
}

export default function AddFriendModal(props: IPropsAddFriendModal) {
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
    props.setKeyword(e.target.value);
  };

  const onClickSearchUser = async () => {
    const keyword = props.keyword;
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
    props.setUserList(fetchUserList);
  };

  const onClickFriendRequest = async (e: any) => {
    const targetId = e.target.id;
    await axios
      .post(
        `https://backend.withchat.site/friend-request/${targetId}`,
        {},
        {
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
          친구 요청하기
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
          검색 결과 ({props.userList.length})
        </Typography>
        <S.ModalContentBox>
          {props.userList.map((el: any) => (
            <S.ModalContent key={el.id}>
              <S.FriendList style={{ display: "flex", alignItems: "center" }}>
                <img src="/LOGO_WC.png" alt="사람" height={"30px"} />
                {el.nickName} ( {el.email} )
              </S.FriendList>

              <S.AddFriendModalButton
                id={el.id}
                isFriend={el.isFriend}
                onClick={onClickFriendRequest}
              >
                친구 요청
              </S.AddFriendModalButton>
            </S.ModalContent>
          ))}
        </S.ModalContentBox>
      </Box>
    </Modal>
  );
}
