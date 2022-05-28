import axios from "axios";
import { useEffect, useState } from "react";
import * as S from "./directMessageList.Styles";

export default function DirectMessageList() {
  const [friendsList, setFriendsList] = useState<any>([]);

  useEffect(() => {
    axios
      .get("https://backend.withchat.site/friend", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        console.log(res);
        setFriendsList(res.data.friendList);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <S.DmWrapper>
        <S.FindChat placeholder="대화 찾기 또는 시작하기" />
        <S.DmBox>
          <S.AddDmBox>
            <span>DIRECT MESSAGE</span>
            <S.AddDmButton> + </S.AddDmButton>
          </S.AddDmBox>
          {friendsList.map((el: any) => (
            <S.DmItem key={el.id}>
              <S.DmItemImg src="/LOGO_WC.png" alt="이미지" />
              <p>{el.user.nickName}</p>
            </S.DmItem>
          ))}
        </S.DmBox>
      </S.DmWrapper>
    </>
  );
}
