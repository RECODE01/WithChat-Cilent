import styled from "@emotion/styled";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderButtons from "../button/AddFriend";
import AddFriendModal from "../modal/addFriendModal";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AlarmModal from "../modal/alarmModal";

const HeaderContainer = styled.header`
  padding: 10px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #222;
  color: #fff;
`;

const HeaderSettings = styled.div`
  & > button {
    color: #fff;
    width: 50px;
    height: 50px;
    background-color: #555;
    border-radius: 50%;
    margin-left: 10px;
    & > img {
      width: 50%;
    }
  }
`;

const HeaderUserInfos = styled.div`
  display: flex;
  align-items: center;
`;

const UserPicture = styled.div`
  width: 50px;
  height: 50px;
  background-color: #555;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  margin-right: 10px;
  & > img {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    &.none__user__picture {
      width: 50%;
    }
  }
`;

const HeaderInfos = styled.div`
  display: flex;
`;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openAlarm, setOpenAlarm] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [userList, setUserList] = useState([]);
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

  const onClickModal = () => {
    setOpen((prev) => !prev);
    setUserList([]);
    setKeyword("");
  };

  const onClickModalAlarm = () => {
    setOpenAlarm((prev) => !prev);
  };

  return (
    <HeaderContainer>
      <HeaderInfos>
        <HeaderUserInfos>
          <UserPicture>
            {userData?.picture ? (
              <img src={userData.picture} alt="유저 이미지" />
            ) : (
              <img
                className="none__user__picture"
                src="./img/header/user.png"
                alt="유저 이미지 없음"
              />
            )}
          </UserPicture>
          <div>{userData ? userData.nickName : "loading.."}</div>
        </HeaderUserInfos>
      </HeaderInfos>
      <HeaderButtons
        content={"친구 요청하기"}
        backgroundColor={"#F2B64C"}
        onClick={onClickModal}
      />
      <NotificationsIcon onClick={onClickModalAlarm} />
      <HeaderSettings>
        <button onClick={onClickMyPage}>
          <img src="./img/header/settings.png" alt="마이 메뉴" />
        </button>
        <button onClick={onClickLogout}>
          <img src="./img/header/logout.png" alt="로그아웃" />
        </button>
      </HeaderSettings>
      <AddFriendModal
        open={open}
        keyword={keyword}
        userList={userList}
        setKeyword={setKeyword}
        setUserList={setUserList}
        onClickModal={onClickModal}
      />
      <AlarmModal
        openAlarm={openAlarm}
        friendRequestList={friendRequestList}
        onClickModalAlarm={onClickModalAlarm}
      />
    </HeaderContainer>
  );
}
