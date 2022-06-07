import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MySettingUI from "./myPage.Presenter";

export default function MySetting() {
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
        .then((res: any) => {
          if (res.status === 201) setUserData(res.data.user);
        })
        .catch();
    };
    fetchUserLoggedIn();
  }, []);

  const memberSince = String(userData?.createdAt).slice(0, 10);
  const onClickHome = () => {
    navigate("/");
  };
  return (
    <MySettingUI
      userData={userData}
      memberSince={memberSince}
      onClickHome={onClickHome}
    />
  );
}
