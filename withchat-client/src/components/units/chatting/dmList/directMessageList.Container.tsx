import * as S from "./directMessageList.Styles";

export default function DirectMessageList() {
  const dmList = [
    { id: "1", name: "최건" },
    { id: "2", name: "김재민" },
    { id: "3", name: "석지웅" },
    { id: "4", name: "성기창" },
    { id: "5", name: "김정환" },
    { id: "6", name: "김재현" },
    { id: "7", name: "강주은" },
    { id: "8", name: "권지현" },
    { id: "9", name: "김태훈" },
    { id: "10", name: "김기범" },
    { id: "11", name: "김지혜" },
    { id: "12", name: "민경미" },
    { id: "13", name: "박주비" },
  ];

  return (
    <>
      <S.DmWrapper>
        <S.FindChat placeholder="대화 찾기 또는 시작하기" />
        <S.DmBox>
          <S.AddDmBox>
            <span>DIRECT MESSAGE</span>
            <S.AddDmButton> + </S.AddDmButton>
          </S.AddDmBox>
          {dmList.map((el) => (
            <S.DmItem key={el.id}>
              <S.DmItemImg src="/LOGO_WC.png" alt="이미지" />
              <p>{el.name}</p>
            </S.DmItem>
          ))}
        </S.DmBox>
      </S.DmWrapper>
    </>
  );
}
