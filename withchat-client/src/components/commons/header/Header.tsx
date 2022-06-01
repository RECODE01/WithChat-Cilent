import styled from "@emotion/styled";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AlarmModal from "../modal/alarmModal";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import { Badge } from "@mui/material";

const HeaderContainer = styled.header`
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #222;
  color: #fff;
`;

const HeaderSettings = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  button {
    display: flex;
    text-align: center;
    align-items: center;
    color: #b9babf;
    padding: 10px 0px;
    margin-left: 10px;
    :hover {
      color: #fff;
    }
  }
`;

export default function Header() {
  const [openAlarm, setOpenAlarm] = useState(false);
  const [friendRequestList, setFriendRequestList] = useState<any>([]);
  const [userData, setUserData] = useState<any>();
  const navigate = useNavigate();

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
          setFriendRequestList(res.data.friendRequestList);
          if (res.status === 201) setUserData(res.data.user);
        })
        .catch((err) => console.log(err));
    };
    fetchUserLoggedIn();
  }, []);

  const onClickLogout = () => {
    localStorage.removeItem("accessToken");
    alert("로그아웃 되었습니다.");
    navigate("/auth");
  };

  const onClickMyPage = () => {
    navigate("/mySetting");
  };

  const onClickModalAlarm = () => {
    setOpenAlarm((prev) => !prev);
  };

  return (
    <HeaderContainer>
      <HeaderSettings>
        <button onClick={onClickMyPage}>
          {userData ? userData.nickName : "loading.."}
          <PersonIcon />
        </button>
        <button onClick={onClickModalAlarm} style={{ marginLeft: "5px" }}>
          <Badge
            badgeContent={friendRequestList.length}
            overlap="circular"
            color="info"
          >
            <NotificationsIcon />
          </Badge>
        </button>
        <button>
          <SettingsIcon />
        </button>
        <button onClick={onClickLogout}>
          <LogoutIcon />
        </button>
      </HeaderSettings>

      <AlarmModal
        openAlarm={openAlarm}
        friendRequestList={friendRequestList}
        onClickModalAlarm={onClickModalAlarm}
      />
    </HeaderContainer>
  );
}
