import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import CreateChattingRoomUI from "./createChattingRoom.presenter";

interface IParam {
  name: string;
  image?: string;
}

export default function CreateChattingRoom(props: any) {
  const [roomName, setRoomName] = useState("");
  const [roomImage, setRoomImage] = useState("");
  const [accessToken, setAccessToken] = useState<string | null>("");

  const onChangeRoomName = (e: ChangeEvent<HTMLInputElement>) => {
    setRoomName(e.target.value);
  };
  const onChangeRoomImage = (e: ChangeEvent<HTMLInputElement>) => {
    setRoomImage(e.target.value);
  };
  const onClickCreateChattingRoom = () => {
    const param: IParam = {
      name: roomName,
    };
    if (roomImage !== "") param.image = roomImage;
    axios
      .post("https://backend.withchat.site/chatting-server", param, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          alert(`${res.data.result.name} 채팅방이 개설되었어요!`);
          props.fetchMyChattingRooms();
          props.setOpenCreate(false);
        }
      })
      .catch();
  };

  const onClickFileUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];

      const formData = new FormData();
      await formData.append("file", await file);

      await axios
        .post("https://backend.withchat.site/file/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${accessToken}`,
            accept: "application/json",
          },
        })
        .then((res) => {
          if (res.status === 201) setRoomImage(res.data.url);
        })
        .catch();
    }
  };

  useEffect(() => {
    setAccessToken(localStorage.getItem("accessToken"));
  }, []);

  return (
    <CreateChattingRoomUI
      onChangeRoomName={onChangeRoomName}
      onChangeRoomImage={onChangeRoomImage}
      onClickCreateChattingRoom={onClickCreateChattingRoom}
      onClickOpenCreateModal={props.onClickOpenCreateModal}
      onClickFileUpload={onClickFileUpload}
    />
  );
}
