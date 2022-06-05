import { elementFocus } from "asset/functions/elementFocus";
import axios from "axios";
import Giphy from "components/units/giphy/Giphy.Container";
import { ChattingContext } from "pages/main";

import {
  ChangeEvent,
  KeyboardEvent,
  MouseEvent,
  ReactElement,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { io } from "socket.io-client";
import * as S from "./chattingInput.Styles";
import ImagesLI from "./ImagesLI";

const socket = io('https://backend.withchat.site')

const ChattingInput = () => {
  const textInputRef = useRef<HTMLDivElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const elementKey = useRef<number>(1);
  const [isAppend, setIsAppend] = useState(false);
  const [isGiphyOpen, setIsGiphyOpen] = useState(false);
  const [fileArr, setFileArr] = useState<File[]>([]);
  const [fileReaderArr, setFileReaderArr] = useState<string[]>();

  const [elements, setElements] = useState<ReactElement<any, any>[]>([
    <div className="textbox" key={0}>
      <span
        className="text"
        contentEditable
        onKeyDown={onKeyDownSetValue}
        data-index={0}
      ></span>
    </div>,
  ]);

  // 석지웅 : 채팅 기능

const {setChatHistory} = useContext(ChattingContext)
const [userData,setUserData]= useState<any>()
useEffect(() => {
    const fetchUserLoggedIn = () => {
      const newAccessToken = localStorage.getItem("accessToken");
      axios
        .get(`https://backend.withchat.site/users/loggedInUser`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${newAccessToken}`,
          },
        })
        .then((res) => {
          if (res.status === 201) setUserData(res.data.user);
        })
        .catch((err) => console.log(err));
    };
    fetchUserLoggedIn();
}, []);

const user = userData?.nickName
const { channelId } = useContext(ChattingContext)
const [fileArrUrls,setFileArrUrls] = useState<any[]>([])
console.log(fileArrUrls)
console.log(channelId)

useEffect(()=>{
  socket.on("comeOn" + channelId, (data:any) => {
    console.log(data)
  })

  socket.on(channelId, (data:any) => {
    console.log(data[0], data[1])
    console.log('소켓 연결 성공')
  })
})

const chatting = async (e:any) => {
  const accessToken = localStorage.getItem('accessToken')
  e.preventDefault()


socket.emit('send',user,channelId,textInputRef.current?.querySelector('span')?.innerText) 

for(let i =0;i < fileArr.length;i++){
  const formData = new FormData();
  await formData.append("file", await fileArr[i]);
  await axios
  .post("https://backend.withchat.site/file/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${accessToken}`,
      accept: "application/json",
    },
  })
  .then((res:any) => {
    setFileArrUrls((prev) => [...prev, res.data.url]);
  })
  .catch((err) => console.log(err));
}

// - 석지웅 : 채팅

const variables = {
  channelId,
  messages: 
  fileArr.length > 0 ?
  [
    {
      contents: textInputRef.current?.querySelector('span')?.innerText,
      type: "text"
    },
    {
      contents: JSON.stringify(fileArrUrls),
      type: "image"
    }
  ] :
  [
    {
      contents: textInputRef.current?.querySelector('span')?.innerText,
      type: "text"
    }
  ]
}

const params = {
  channelId
}

  await axios.post('https://backend.withchat.site/channel-history',variables,{
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
    },
  })

  await axios.get('https://backend.withchat.site/channel-history/new',{
    params,
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
    },
  }).then((res) => {
    console.log(res)
    setChatHistory((prev:any) => prev.concat(res.data.message))
  })
}

// 석지웅 : 채팅

  useEffect(() => {
    if (!elementKey.current) return;
    const $parent = textInputRef.current?.children[elementKey.current - 1]
      .children[0] as HTMLSpanElement;
    if ($parent) elementFocus($parent);
  }, [isAppend]);

  const appendText = () => {
    setElements((prev) => [
      ...prev,
      <div className="textbox" key={prev.length}>
        <span
          className="text"
          contentEditable
          onKeyDown={onKeyDownSetValue}
          data-index={prev.length}
        ></span>
      </div>,
    ]);
  };

  const removeText = (index: number) => {
    setElements((prev) => [...prev.filter((_, idx) => index !== idx)]);
  };

  function onClickFocusTextarea(e: any) {
    const $target = e.target.children[0];
    if ($target) elementFocus($target);
  }

  const deleteText = (index: number) => {
    removeText(index);
  };

  function onKeyDownSetValue(e: KeyboardEvent<HTMLSpanElement>) {
    const selection = window.getSelection();
    if (!selection || !textInputRef.current) return;
    console.log("selection", selection);
    const { focusOffset, isCollapsed } = selection;

    const $target = e.target as HTMLSpanElement;
    const $nextTarget = $target.parentNode?.nextSibling
      ?.childNodes[0] as HTMLSpanElement;
    const $prevTarget = $target.parentNode?.previousSibling
      ?.childNodes[0] as HTMLSpanElement;

    if (e.key === "Enter") {
      e.preventDefault();
      if (e.shiftKey) {
        appendText();
        elementKey.current += 1;
        setIsAppend((prev) => !prev);
      }
    }
    if (e.key === "ArrowUp") {
      if ($prevTarget) elementFocus($prevTarget);
    }
    if (e.key === "ArrowDown") {
      if ($nextTarget) elementFocus($nextTarget);
    }
    if (e.key === "Backspace") {
      if (!$prevTarget || !$target.dataset.index) return;
      if (focusOffset === 0 && isCollapsed) {
        const text = $target.innerText;
        elementKey.current -= 1;
        deleteText(parseInt($target.dataset.index));
        $prevTarget.innerText += text;
        e.preventDefault();
        console.log($prevTarget);
        elementFocus($prevTarget);
      }
    }
  }

  const onClickOpenGiphy = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log("onClickOpenGiphy");
    setIsGiphyOpen((prev) => !prev);
  };

  const onClickInput = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    imageInputRef.current?.click();
  };

  const settingImageUrl = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    for (let i = 0; i < files.length; i++) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(files[i]);
      fileReader.onload = (data) => {
        console.log(data);
        let readerUrl = "";
        if (typeof data.target?.result === "string") {
          readerUrl = data.target?.result;
        }
        if (
          !fileArr.includes(files[i]) &&
          !fileReaderArr?.includes(readerUrl)
        ) {
          setFileReaderArr((prev) => [...(prev || []), readerUrl]);
          setFileArr((prev) => [...prev, files[i]]);
        }
      };
    }
  };

  useEffect(() => {
    console.log(elements);
  }, [elements]);

  return (
    <S.Container>
      <div
        style={{ height: "50vh", backgroundColor: "rgb(200,200,200)" }}
      ></div>
      {isGiphyOpen && <Giphy />}
      <S.Form onSubmit={chatting}>
        <S.Wrapper>
          {fileReaderArr && (
            <S.ImagesContainer>
              {fileReaderArr?.map((url, idx) => (
                <ImagesLI url={url} file={fileArr[idx]} key={idx} />
              ))}
            </S.ImagesContainer>
          )}
          <S.EditerContainer>
            <S.FileUploadInput>
              <input
                type="file"
                ref={imageInputRef}
                multiple={true}
                onChange={settingImageUrl}
              />
            </S.FileUploadInput>
            <div onClick={onClickInput}>
              <S.ButtonIcon>
                <S.IconImage>
                  <svg>
                    <path d="M12 2.00098C6.486 2.00098 2 6.48698 2 12.001C2 17.515 6.486 22.001 12 22.001C17.514 22.001 22 17.515 22 12.001C22 6.48698 17.514 2.00098 12 2.00098ZM17 13.001H13V17.001H11V13.001H7V11.001H11V7.00098H13V11.001H17V13.001Z"></path>
                  </svg>
                </S.IconImage>
              </S.ButtonIcon>
            </div>
            <S.TextInput
              ref={textInputRef}
              onClick={onClickFocusTextarea}
              fileReaderArr={fileReaderArr}
            >
              {elements.map((data) => data)}
            </S.TextInput>
            <S.ButtonTools>
              <div onClick={onClickOpenGiphy}>
                <S.ButtonIcon>
                  <S.IconImage>
                    <svg>
                      <path
                        fill="currentColor"
                        d="M2 2C0.895431 2 0 2.89543 0 4V20C0 21.1046 0.89543 22 2 22H22C23.1046 22 24 21.1046 24 20V4C24 2.89543 23.1046 2 22 2H2ZM9.76445 11.448V15.48C8.90045 16.044 7.88045 16.356 6.74045 16.356C4.11245 16.356 2.66045 14.628 2.66045 12.072C2.66045 9.504 4.23245 7.764 6.78845 7.764C7.80845 7.764 8.66045 8.004 9.32045 8.376L9.04445 10.164C8.42045 9.768 7.68845 9.456 6.83645 9.456C5.40845 9.456 4.71245 10.512 4.71245 12.06C4.71245 13.62 5.43245 14.712 6.86045 14.712C7.31645 14.712 7.64045 14.616 7.97645 14.448V12.972H6.42845V11.448H9.76445ZM11.5481 7.92H13.6001V16.2H11.5481V7.92ZM20.4724 7.92V9.636H17.5564V11.328H19.8604V13.044H17.5564V16.2H15.5164V7.92H20.4724Z"
                      ></path>
                    </svg>
                  </S.IconImage>
                </S.ButtonIcon>
              </div>
            </S.ButtonTools>
          </S.EditerContainer>
        </S.Wrapper>
        <button>제출</button>
      </S.Form>
    </S.Container>
  );
};

export default ChattingInput;
