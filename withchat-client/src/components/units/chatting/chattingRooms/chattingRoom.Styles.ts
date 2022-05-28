import styled from "@emotion/styled";

interface IProps {
  currentTab: number;
  menuIndex: number;
}

export const ChattingRoomWrapper = styled.div`
  padding: 12px;
  width: 72px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #202225;
`;

export const ChattingRoomDmList = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
  background-color: white;
  border-radius: 10px;
  :hover {
    transform: scale(1.1);
    transition: 0.5s ease-in-out;
  }
`;

export const ChattingRoomLine = styled.div`
  width: 100%;
  border: 1px solid gray;
  margin: 10px 0px;
`;

export const ChattingRoomBox = styled.div`
  height: calc(100vh - 300px);
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const CurrentChattingRoom = styled.div`
  width: 50px;
  height: 50px;
  color: gray;
  background-color: #37393e;
  border-radius: 50%;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;

  border-left: ${(props: IProps) =>
    props.currentTab === props.menuIndex ? "5px solid #F2B64C" : "none"};
  transition: border-left 0.5s ease-in-out;

  :hover {
    color: white;
    background-color: #17a7f1;
    border-radius: 10px;
    cursor: pointer;
  }

  div {
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
  }
`;

export const FindChattingRoom = styled(CurrentChattingRoom)`
  
  margin: 10px 0 0;
`;
export const AddChattingRoom = styled(FindChattingRoom)`
  margin-top: 0;
`;
