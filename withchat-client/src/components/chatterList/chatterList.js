import "./chatter.css";

export default function ChatterList() {
  let ChatterList = [
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
    <>
      <div className="DmWrapper">
        <div className="dmBox2">
          <div className="OnOffCategory">
            Online - {ChatterList.filter((el) => el.Online === true).length}명
          </div>
          {ChatterList.filter((el) => el.Online === true).map((el) => (
            <div className="dmItem">
              <img className="dmItemImg" src="/LOGO_WC.png" alt="이미지" />
              <p>
                {el.name} {el.master && "👑"}
              </p>
            </div>
          ))}
          <div className="OnOffCategory">
            Offline - {ChatterList.filter((el) => el.Online === false).length}명
          </div>
          {ChatterList.filter((el) => el.Online === false).map((el) => (
            <div className="dmItem OffChatter">
              <img className="dmItemImg" src="/LOGO_WC.png" alt="이미지" />
              <p className="OffChatter">
                {el.name} {el.master && "👑"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
