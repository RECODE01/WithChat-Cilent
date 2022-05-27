import * as S from "./chatters.Styles";

export default function Chatters() {
  const ChatterList = [
    { id: "1", name: "최건", master: true, Online: true },
    { id: "2", name: "김재민", master: false, Online: true },
    { id: "3", name: "석지웅", master: false, Online: true },
    { id: "4", name: "성기창", master: false, Online: true },
    { id: "5", name: "김정환", master: false, Online: true },
    { id: "6", name: "김재현", master: false, Online: true },
    { id: "7", name: "강주은", master: false, Online: true },
    { id: "8", name: "권지현", master: false, Online: false },
    { id: "9", name: "김태훈", master: false, Online: false },
    { id: "10", name: "김기범", master: false, Online: false },
    { id: "11", name: "김지혜", master: false, Online: false },
    { id: "12", name: "민경미", master: false, Online: false },
    { id: "13", name: "박주비", master: false, Online: false },
  ];
  return (
    <S.DmWrapper>
      <S.DmBox>
        <S.OnOffCategory>
          Online - {ChatterList.filter((el) => el.Online === true).length}명
        </S.OnOffCategory>
        {ChatterList.filter((el) => el.Online === true).map((el) => (
          <S.DmItem key={el.id}>
            <S.DmItemImg src="/LOGO_WC.png" alt="이미지" />
            <p>
              {el.name} {el.master && "👑"}
            </p>
          </S.DmItem>
        ))}
        <S.OnOffCategory>
          Offline - {ChatterList.filter((el) => el.Online === false).length}명
        </S.OnOffCategory>
        {ChatterList.filter((el) => el.Online === false).map((el) => (
          <S.DmItemOff key={el.id}>
            <S.DmItemImg src="/LOGO_WC.png" alt="이미지" />
            <p>
              {el.name} {el.master && "👑"}
            </p>
          </S.DmItemOff>
        ))}
      </S.DmBox>
    </S.DmWrapper>
  );
}
