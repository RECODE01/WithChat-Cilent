import styled from "@emotion/styled";

interface IProps {
  isFriend: string;
}

export const ModalBackground = styled.div`
  width: 100%;
  border-radius: 10px;
  padding: 10px 0 10px 10px;
  color: white;
  background-color: #202225;
  display: flex;
`;

export const ModalInput = styled.input`
  width: 80%;
  padding: 10px;
  color: white;
  background-color: #202225;
`;

export const ModalButton = styled.button`
  border-radius: 10px;
  padding: 10px;
  color: white;
  background-color: #18a8f1;
`;

export const ModalContentBox = styled.div`
  width: 100%;
  height: 65%;
  display: flex;
  flex-direction: column;

  border-radius: 10px;
  padding: 10px;
  margin-top: 10px;
  color: white;
  background-color: #202225;

  overflow: hidden;
  overflow-y: scroll;
`;

export const ModalContent = styled.div`
  width: 100%;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

export const FriendList = styled.div`
  width: calc(100% - 70px);
`;

export const AddFriendModalButton = styled.button`
  border-radius: 10px;
  padding: 10px;
  color: white;
  background-color: ${(props: IProps) =>
    props.isFriend === "w" ? "#2F3136" : "#18A8F1"};
`;
