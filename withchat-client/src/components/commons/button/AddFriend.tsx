import styled from "@emotion/styled";
import { Button } from "@mui/material";

interface IPropsHeaderButtons {
  content: string;
  backgroundColor: string;
  onClick: () => void;
}

interface IPropsHeaderButton {
  backgroundColor: string;
}

export const HeaderButton = styled(Button)`
  all: unset;
  padding: 10px;
  border-radius: 10px;
  background-color: ${(props: IPropsHeaderButton) => props.backgroundColor};
  cursor: pointer;
`;

export default function HeaderButtons(props: IPropsHeaderButtons) {
  return (
    <>
      <HeaderButton
        backgroundColor={props.backgroundColor}
        onClick={props.onClick}
      >
        {props.content}
      </HeaderButton>
    </>
  );
}
