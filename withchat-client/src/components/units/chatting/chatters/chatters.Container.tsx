import * as S from "./chatters.Styles";
import { MouseEvent, useContext, useEffect, useState } from "react";
import UserMenu from "../../userMenu/userMenu.Container";
import axios from "axios";
import { ChattingContext } from "pages/main";
export default function Chatters() {
  const { serverId } = useContext(ChattingContext);
  const [chatterList, setChatterList] = useState<{}[]>([]);
  const [openUserInfo, setOpenUserInfo] = useState<string>("");

  const onClickOpenInfo = () => (e: MouseEvent<HTMLDivElement>) => {
    setOpenUserInfo(e.currentTarget.id);
    if (openUserInfo) setOpenUserInfo("");
  };

  useEffect(() => {
    axios
      .get(`https://backend.withchat.site/chatting-server/${serverId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        console.log(res.data.users);
        setChatterList(res.data.users);
      })
      .catch();
  }, [serverId]);

  return (
    <S.DmWrapper>
      <S.DmBox>
        <S.OnOffCategory>대화 상대</S.OnOffCategory>
        {chatterList?.map((el: any) => (
          <S.DmItem key={el?.id} onClick={onClickOpenInfo()} id={el?.id}>
            <S.DmItemImg
              src={el.picture ? el.picture : `/LOGO_WC.png`}
              alt="이미지"
              onError={(e) => {
                e.currentTarget.src = "/LOGO_WC.png";
              }}
            />
            <p>
              {el?.name}
              {openUserInfo === el?.id && (
                <UserMenu
                  id={el?.id}
                  openUserInfo={openUserInfo}
                  name={el?.name}
                />
              )}
            </p>
          </S.DmItem>
        ))}
        {/* <S.OnOffCategory>
          Offline - {ChatterList.filter((el) => el.Online === false).length}명
        </S.OnOffCategory>
        {ChatterList.filter((el) => el.Online === false).map((el) => (
          <S.DmItemOff key={el.id}>
            <S.DmItemImg src="/LOGO_WC.png" alt="이미지" />
            <p>
              {el.name} {el.master && "👑"}
            </p>
          </S.DmItemOff>
        ))} */}
      </S.DmBox>
    </S.DmWrapper>
  );
}
