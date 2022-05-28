import { Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";

interface IPropsAlarmModal {
  openAlarm: boolean;
  friendRequestList: string[];
  onClickModalAlarm: () => void;
}

export default function AlarmModal(props: IPropsAlarmModal) {
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
          {props.friendRequestList.length &&
            props.friendRequestList.map((el: any) => (
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
  );
}
