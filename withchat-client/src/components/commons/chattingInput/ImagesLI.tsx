import * as S from "./chattingInput.Styles";

interface IPropsImagesLI {
  url: string;
  file: File;
}

const ImagesLI = (props: IPropsImagesLI) => {
  return (
    <S.ImageLI>
      <S.OptionsContainer>
        <S.OptionBtn>
          <svg aria-hidden="false" width="20" height="20" viewBox="0 0 24 24">
            <path
              d="M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z"
              fill="#DADBDC"
            ></path>
          </svg>
        </S.OptionBtn>
        <S.OptionBtn>
          <svg aria-hidden="false" width="20" height="20" viewBox="0 0 24 24">
            <path
              fill="#ed4145"
              d="M15 3.999V2H9V3.999H3V5.999H21V3.999H15Z"
            ></path>
            <path
              fill="#ed4145"
              d="M5 6.99902V18.999C5 20.101 5.897 20.999 7 20.999H17C18.103 20.999 19 20.101 19 18.999V6.99902H5ZM11 17H9V11H11V17ZM15 17H13V11H15V17Z"
            ></path>
          </svg>
        </S.OptionBtn>
      </S.OptionsContainer>
      <S.ImageItem>
        <img src={props.url} />
        <div>
          <span>{props.file?.name}</span>
        </div>
      </S.ImageItem>
    </S.ImageLI>
  );
};

export default ImagesLI;
