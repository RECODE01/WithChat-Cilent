import styled from "@emotion/styled";

interface IProps {
  selected: boolean;
}

export const ModalBackground = styled.div`
  width: 100%;
  height: 90%;
  overflow: hidden;
  overflow-y: scroll;
  border-radius: 10px;
  padding: 10px;
  margin-top: 10px;
  color: white;
  background-color: #202225;
  display: flex;
  flex-direction: column;
`;

export const AlarmMenu = styled.button`
  all: unset;
  color: ${(props: IProps) => (props.selected ? "#18A8F1" : "#fff")};
  font-size: large;
  cursor: pointer;
  padding: 0 20px;
`;

export const ModalButton = styled.button`
  border-radius: 10px;
  padding: 10px;
  color: white;
  background-color: #18a8f1;
`;

export const ModalContentBox = styled.div`
  width: 100%;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;
