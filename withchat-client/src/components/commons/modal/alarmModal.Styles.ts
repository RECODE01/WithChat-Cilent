import styled from "@emotion/styled";

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
