import styled from "@emotion/styled";

export const ChattingRoomWrapper = styled.div`
  padding: 12px;
  width: 72px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #202225;
`;

export const ChattingRoomDmList = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
  background-color: skyblue;
  border-radius: 10px;
`;

export const ChattingRoomLine = styled.div`
  width: 100%;
  border: 1px solid gray;
  margin: 10px 0px;
`;

export const CurrentChattingRoom = styled.div`
  width: 50px;
  background-color: beige;
  border-radius: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  cursor: pointer;
`;

export const FindChattingRoom = styled(CurrentChattingRoom)`
  border-radius: 50%;
`;

export const AddChattingRoom = styled(FindChattingRoom)``;
