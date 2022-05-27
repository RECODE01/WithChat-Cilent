// import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

// const introAnimation = `
//     from{
//         t
//     }
//     to{
//         opacity:0;
//         visibility: hidden;
//     }
// `

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
  color: gray;
  background-color: #37393e;
  border-radius: 50%;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  :hover {
    color: #18a8f1;
    background-color: skyblue;
    border-radius: 10px;
    cursor: pointer;
  }
`;

export const FindChattingRoom = styled(CurrentChattingRoom)`
  border-radius: 50%;
`;

export const AddChattingRoom = styled(FindChattingRoom)``;
