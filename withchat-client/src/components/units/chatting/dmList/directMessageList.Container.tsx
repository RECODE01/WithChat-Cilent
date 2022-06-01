import axios from "axios";
import { useEffect, useState } from "react";
import * as S from "./directMessageList.Styles";
import PeopleIcon from "@mui/icons-material/People";
import AddFriendModal from "components/commons/modal/addFriendModal";

export default function DirectMessageList() {
  const [open, setOpen] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [userList, setUserList] = useState([]);
  const [friendsList, setFriendsList] = useState([]);

  useEffect(() => {
    axios
      .get("https://backend.withchat.site/friend", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        setFriendsList(res.data.friendList);
      })
      .catch((err) => console.log(err));
  }, []);

  const onClickModal = () => {
    setOpen((prev) => !prev);
    setUserList([]);
    setKeyword("");
  };

  return (
    <>
      <S.DmWrapper>
        <S.FindFriend placeholder="친구 찾기" />
        <S.AddDmBox>
          친구 ( {friendsList.length} 명 )
          <S.AddDmButton onClick={onClickModal}>
            친구 추가 <PeopleIcon />
          </S.AddDmButton>
        </S.AddDmBox>
        <S.DmBox>
          {friendsList.map((el: any) => (
            <S.DmItem key={el.id}>
              <S.DmItemImg src="/LOGO_WC.png" alt="이미지" />
              <p>{el.user.nickName}</p>
            </S.DmItem>
          ))}
        </S.DmBox>
      </S.DmWrapper>
      <AddFriendModal
        open={open}
        keyword={keyword}
        userList={userList}
        setKeyword={setKeyword}
        setUserList={setUserList}
        onClickModal={onClickModal}
      />
    </>
  );
}
