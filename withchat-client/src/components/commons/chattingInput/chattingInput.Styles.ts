import styled from "@emotion/styled";

interface IPropsWrapper {
  height: number;
}

export const Form = styled.form`
  width: 1176px;
  height: ${(props: IPropsWrapper) => `${props.height + 28}px`};
  max-height: 50vh;
  padding: 0px 16px;
  background-color: #32353a;
`;

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  height: ${(props: IPropsWrapper) => `${props.height}px`};
  max-height: 50vh;
  overflow-x: hidden;
  /* overflow-y: hidden; */
  margin-bottom: 28px;
  border-radius: 8px;
  background-color: #40444a;
`;

export const FileUploadInput = styled.div`
  display: none;
`;

export const TextInput = styled.div`
  max-height: 50vh;
  padding: 11px 0px;
  width: calc(100% - 112px);

  .textbox {
    height: 1.375rem;
    :hover {
      cursor: text;
    }
  }

  .text {
    line-height: 1.375rem;
    color: #dcddde;

    :focus {
      outline-style: none;
    }
  }
`;

export const ButtonIcon = styled.button`
  height: 44px;
  padding: 10px 16px;
  position: sticky;
  top: 0;
`;

export const IconImage = styled.div`
  height: 24px;
  svg {
    width: 24px;
    height: 24px;

    path {
      fill: rgb(185, 187, 190);
    }

    :hover {
      path {
        fill: #dcddde;
      }
      cursor: pointer;
    }
  }
`;

export const ButtonTools = styled.div``;

export const GifButton = styled.button``;

export const GifButtonImage = styled.div`
  width: 24px;
  svg {
    width: 24px;
    height: 24px;

    path {
      fill: rgb(185, 187, 190);
    }

    :hover {
      path {
        fill: #dcddde;
      }
      cursor: pointer;
    }
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 30px;
  max-height: 15vh;
  padding-top: 7px;
  border: none;
  background: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  overflow: hidden;
`;
