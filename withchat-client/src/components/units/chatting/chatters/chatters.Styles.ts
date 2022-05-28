import styled from "@emotion/styled";

export const DmWrapper = styled.div`
  width: 240px;
  height: 100vh;
  background-color: #2f3136;
`;

export const DmBox = styled.div`
  width: 240px;
  padding: 10px;
  height: calc(100vh - 10px);
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
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
  font-weight: 400;
  border-radius: 5px;
  :hover {
    background-color: #42464d;
    cursor: pointer;
  }
`;

export const DmItemImg = styled.img`
  width: 40px;
  height: 40px;
`;

export const DmItemOff = styled(DmItem)`
  color: gray;
`;
