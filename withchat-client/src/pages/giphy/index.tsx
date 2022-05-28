import styled from "@emotion/styled";
// import Giphy from "components/units/giphy/giphy.container";
// import { useState } from "react";

export const GifButtonWrapper = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 8px;
  background-color: #95989e;
  font-weight: 700;
  :hover {
    background-color: #c4c1c0;
  }
`;
export default function GiphyPage() {
  //   const [openGif, setOpenGif] = useState(false);
  //   const onClickGif = (e: any) => {
  //     setOpenGif((prev) => !prev);
  //   };
  return (
    <div>
      {/* <GifButtonWrapper onClick={onClickGif}>GIF</GifButtonWrapper>
            {openGif && <Giphy />} */}
    </div>
  );
}
