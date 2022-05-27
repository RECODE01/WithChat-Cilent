import { Box, Modal, Typography } from "@mui/material";
import HeaderButtons from "components/commons/button/AddFriend";
import Chatters from "components/units/chatting/chatters/chatters.Container";
import ChattingRoomList from "components/units/chatting/chattingRooms/chattingRooms.Container";
import DirectMessageList from "components/units/chatting/dmList/directMessageList.Container";
import { ChangeEvent, useEffect, useState } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import axios from "axios";
import Header from "components/commons/header/Header";

export default function MainPage() {
  const [friendRequestList, setFriendRequestList] = useState([]);
  const [open, setOpen] = useState(false);
  const [openAlarm, setOpenAlarm] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const fetchUserLoggedIn = () => {
      axios
        .get("https://backend.withchat.site/users/loggedInUser", {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFmNWE4MmYzLTU4NjAtNGZmZi1iY2FhLWEwZmIzMTBiZmYwZCIsImVtYWlsIjoia2pta2ptODIyQG5hdmVyLmNvbSIsInBlcm1pc3Npb24iOjAsImlhdCI6MTY1MzY4Njk3OCwiZXhwIjoxNjUzNjk0MTc4LCJzdWIiOiJhY2Nlc3NUb2tlbiJ9.bbBSkn7kpzjV3-Gn9lJbb42_SUAeCJxDHJiVqD2WrXE",
          },
        })
        .then((res) => {
          setFriendRequestList(res.data.friendRequestList);
          if (res.status === 201) console.log(res.data);
        })
        .catch((err) => console.log(err));
    };
    fetchUserLoggedIn();
  }, []);

  console.log(friendRequestList);

  const onClickModal = () => {
    setOpen((prev) => !prev);
  };

  const onClickModalAlarm = () => {
    setOpenAlarm((prev) => !prev);
  };

  const onChangeSearchUser = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const onClickSearchUser = async () => {
    const fetchUserList = await axios
      .get("https://backend.withchat.site/users/search", {
        params: { keyword },
      })
      .then((res: any) => {
        return res.data.searchResult;
      })
      .catch((reason: any) => {
        alert(reason.response.message);
      });
    setUserList(fetchUserList);
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
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <ChattingRoomList />
        <DirectMessageList />
        <div
          style={{
            width: "100%",
            backgroundColor: "#36393F",
            color: "white",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          채팅방
          <HeaderButtons
            content={"친구 추가하기"}
            backgroundColor={"#F2B64C"}
            onClick={onClickModal}
          />
          <NotificationsIcon onClick={onClickModalAlarm} />
          <Modal
            open={open}
            onClose={onClickModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            style={{ alignItems: "center", justifyContent: "center" }}
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                친구 추가하기
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <div
                  style={{
                    width: "100%",
                    borderRadius: "10px",
                    padding: "10px 0 10px 10px",
                    color: "white",
                    backgroundColor: "#202225",
                    display: "flex",
                  }}
                >
                  <input
                    style={{
                      width: "80%",
                      padding: "10px",
                      color: "white",
                      backgroundColor: "#202225",
                    }}
                    placeholder="이름 혹은 닉네임, 이메일 주소로 친구를 검색해보세요!"
                    onChange={onChangeSearchUser}
                  />
                  <button
                    style={{
                      borderRadius: "10px",
                      padding: "10px",
                      color: "white",
                      backgroundColor: "#18A8F1",
                    }}
                    onClick={onClickSearchUser}
                  >
                    검색하기
                  </button>
                </div>
              </Typography>
              <Typography id="modal-modal-description2" sx={{ mt: 2 }}>
                검색 결과 ({userList.length})
              </Typography>
              <div
                style={{
                  width: "100%",
                  height: "70%",
                  overflow: "hidden",
                  overflowY: "scroll",
                  borderRadius: "10px",
                  padding: "10px",
                  marginTop: "10px",
                  color: "white",
                  backgroundColor: "#202225",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {userList.map((el: any) => (
                  <div
                    key={el.id}
                    style={{
                      width: "100%",
                      borderRadius: "10px",
                      padding: "10px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img src="/LOGO_WC.png" alt="사람" height={"30px"} />
                      {el.nickName} ( {el.email} )
                    </div>
                    <button
                      style={{
                        borderRadius: "10px",
                        padding: "10px",
                        color: "white",
                        backgroundColor: "#18A8F1",
                      }}
                    >
                      추가하기
                    </button>
                  </div>
                ))}
              </div>
            </Box>
          </Modal>
        </div>
        <Chatters />
        <Modal
          open={openAlarm}
          onClose={onClickModalAlarm}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              받은 친구 신청
            </Typography>
            <div
              style={{
                width: "100%",
                height: "90%",
                overflow: "hidden",
                overflowY: "scroll",
                borderRadius: "10px",
                padding: "10px",
                marginTop: "10px",
                color: "white",
                backgroundColor: "#202225",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {friendRequestList.map((el: any) => (
                <div
                  key={el.id}
                  style={{
                    width: "100%",
                    borderRadius: "10px",
                    padding: "10px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img src="/LOGO_WC.png" alt="사람" height={"30px"} />
                    {el.fromUser.nickName} ( {el.fromUser.email} )
                  </div>
                  <button
                    style={{
                      borderRadius: "10px",
                      padding: "10px",
                      color: "white",
                      backgroundColor: "#18A8F1",
                    }}
                  >
                    추가하기
                  </button>
                </div>
              ))}
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
}
