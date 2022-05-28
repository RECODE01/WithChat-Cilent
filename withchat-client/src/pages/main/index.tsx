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
  const [friendRequestList, setFriendRequestList] = useState<any>([]);
  const [open, setOpen] = useState(false);
  const [openAlarm, setOpenAlarm] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const fetchUserLoggedIn = () => {
      axios
        .get("https://backend.withchat.site/users/loggedInUser", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
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

  const onClickModal = () => {
    setOpen((prev) => !prev);
    setUserList([]);
    setKeyword("");
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
                    {el.isFriend === "w" ? (
                      <button
                        style={{
                          borderRadius: "10px",
                          padding: "10px",
                          color: "white",
                          backgroundColor: "#2F3136",
                          cursor: "default",
                        }}
                      >
                        친구 요청
                      </button>
                    ) : (
                      <button
                        id={el.id}
                        style={{
                          borderRadius: "10px",
                          padding: "10px",
                          color: "white",
                          backgroundColor: "#18A8F1",
                        }}
                        onClick={onClickFriendRequest}
                      >
                        친구 요청
                      </button>
                    )}
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
              {friendRequestList.length &&
                friendRequestList.map((el: any) => (
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
                      id={el.id}
                      style={{
                        borderRadius: "10px",
                        padding: "10px",
                        color: "white",
                        backgroundColor: "#18A8F1",
                      }}
                      onClick={onClickFriendRequestAccept}
                    >
                      수락하기
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
