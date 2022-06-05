import ChattingInput from "components/commons/chattingInput/chattingInput";
import ChattingBody from "../chattingBody/chattingBody.Container";
import * as S from "./currentChattingRoom.Styles";

export default function CurrentChattingRoom() {
  return (
    <>
      <S.CurrentChattingRoomWrapper>
        <ChattingBody />
        <ChattingInput />
      </S.CurrentChattingRoomWrapper>
    </>
  );
}
