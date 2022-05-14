import styled from "@emotion/styled";

export const DmWrapper = styled.div`
  width: 240px;
  height: 100vh;
  padding: 10px;
  background-color: #2f3136;
`;

export const FindChat = styled.div`
  width: 100%;
  height: 28px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 10px;
  padding-left: 10px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const DmBox = styled.div`
  width: 240px;
  height: calc(100vh - 50px);
  overflow: scroll;
`;

export const AddDmBox = styled.div`
  font-size: small;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 0 10px;
  margin-bottom: 10px;
`;

export const AddDmButton = styled.button`
  border: none;
  background-color: transparent;
  color: white;
  font-size: large;
  margin: 0;
  cursor: pointer;
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
