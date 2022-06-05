import styled from "@emotion/styled";

export const Container = styled.div`
  /* width: 1176px; */
  width:100%;
  position: relative;
`;

export const Form = styled.form`
  /* width: 1176px; */
  width:100%;
  padding: 0px 16px;
  padding-bottom: 1px;
  margin-bottom: 27px;
`;

export const Wrapper = styled.div`
  overflow-x: hidden;
  margin-bottom: 28px;
  border-radius: 8px;
  background-color: #40444a;
`;

export const ImagesContainer = styled.ul`
  display: flex;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
  height: 280px;
  padding: 20px 10px 10px;
`;

export const ImageLI = styled.li`
  position: relative;
  margin-right: 20px;
  width: 216px;
  height: 216px;
  padding: 8px;
  border-radius: 10px;
  background-color: #32353a;
`;
export const OptionsContainer = styled.div`
  display: flex;
  position: absolute;
  top: -10px;
  right: -10px;
  border-radius: 10px;
  background-color: rgb(35, 35, 35);
`;

export const OptionBtn = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    cursor: pointer;
    background-color: rgb(60, 60, 60);
  }
`;

export const ImageItem = styled.div`
  padding: 10px 0px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    width: 200px;
    height: 137.32;
  }

  span {
    color: #dcddde;
  }
`;

export const EditerContainer = styled.div`
  position: relative;
  display: flex;
`;

export const FileUploadInput = styled.div`
  input {
    display: none;
  }
`;
interface IPropsTextInput {
  fileReaderArr: string[] | undefined;
}
export const TextInput = styled.div`
  max-height: ${(props: IPropsTextInput) =>
    props.fileReaderArr ? "18vh" : "47vh"};

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

export const ButtonTools = styled.div`
  position: relative;
`;
