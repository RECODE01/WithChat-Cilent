import styled from "@emotion/styled";

export const DmContainer = styled.div`
  width: 240px;
  height: 100vh;
  padding: 10px;
  background-color: #2f3136;
`;

export const DmBox = styled.div`
  width: 240px;
  height: calc(100vh - 10px);
  overflow: scroll;
`;

export const OnOffCategory = styled.div`
  color: white;
  font-size: small;
  margin-bottom: 10px;
`;

export const DmItem = styled.div`
  display: flex;
  align-items: center;
  color: lightgray;
  margin-bottom: 10px;
  font-weight: bold;
  cursor: pointer;
`;

export const DmItemImg = styled.img`
  width: 40px;
  height: 40px;
`;

export const DmItemOff = styled(DmItem)`
  color: gray;
`;

// .OffChatter {
//   color: gray;
// }

// .dmBox2 {
// width: 240px;
// height: calc(100vh - 10px);
// overflow: scroll;
// }
