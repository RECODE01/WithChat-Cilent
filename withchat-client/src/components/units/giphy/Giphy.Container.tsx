import axios from "axios";
import {
  ChangeEvent,
  KeyboardEvent,
  MouseEvent,
  useEffect,
  useState,
} from "react";

import GiphyUI from "./Giphy.Presenter";

function Giphy() {
  const giphy = require("giphy-api")("sZhrrSqHSIYtlmtdctwCmjdpGCxWyvyO");
  const [keyword, setKeyword] = useState("");
  const [gifResult, setGifResult] = useState([]);

  const onClickSearch = () => {
    giphy.search(
      {
        q: keyword,
        rating: "g",
      },
      function (err: any, res: any) {
        if (err) alert(err);
        setGifResult(res.data);
      }
    );
  };
  const onChangeKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };
  const onClickSendGif = (e: MouseEvent<HTMLImageElement>) => {
    console.log(e.currentTarget.src);
  };
  const onPressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") onClickSearch();
  };

  useEffect(() => {
    const randomGiphy = async () => {
      const result = await axios.get(
        `https://api.giphy.com/v1/gifs/trending?api_key=sZhrrSqHSIYtlmtdctwCmjdpGCxWyvyO`
      );
      setGifResult(result?.data.data);
    };


    randomGiphy();
  }, []);
  return (
    <GiphyUI
      gifResult={gifResult}
      onClickSearch={onClickSearch}
      onChangeKeyword={onChangeKeyword}
      onClickSendGif={onClickSendGif}
      onPressEnter={onPressEnter}
    />
  );
}
export default Giphy;
