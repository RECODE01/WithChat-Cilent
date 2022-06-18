import axios from "axios";
import {
  ChangeEvent,
  MouseEvent,
  useContext,
  useEffect,
  useState,
} from "react";
import ChannelUI from "./channel.presenter";
import { ChattingContext } from "pages/main";

export default function Channel(props: any) {
  // const [roomId, setRoomId]=useState('')
  const [openChannelList, setOpenChannelList] = useState<boolean>(false);
  const { setChannelId, setChatHistory } = useContext(ChattingContext);
  const [channelClicked, setChannelClicked] = useState<string>("");
  const [accessToken, setAccessToken] = useState<string | null>("");
  const [channelName, setChannelName] = useState<string>("");
  const [openCreateChannelModal, setOpenCreateChannelModal] =
    useState<boolean>(false);
  const [openInviteFriendModal, setOpenInviteFriendModal] =
    useState<boolean>(false);
  const [channelList, setChannelList] = useState<{}[]>([]);

  const onClickOpenCreateModal = () => {
    setOpenCreateChannelModal((prev) => !prev);
  };

  const onClickInviteFriendModal = () => {
    setOpenInviteFriendModal((prev) => !prev);
  };

  const onClickOpenChannelList = () => {
    setOpenChannelList((prev) => !prev);
  };

  const onChangeChannelName = (e: ChangeEvent<HTMLInputElement>) => {
    setChannelName(e.currentTarget.value);
  };

  const onClickChannel = (e: MouseEvent<HTMLDivElement>) => {
    setChannelClicked(e.currentTarget.id);
    setChannelId(e.currentTarget.id);
    const newAccessToken = localStorage.getItem("accessToken");
    const params = {
      lastIdx: -1,
      channelId: e.currentTarget.id,
    };

    axios
      .get(`https://backend.withchat.site/channel-history`, {
        params,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${newAccessToken}`,
        },
      })
      .then((res) => {
        setChatHistory(res.data.message);
      })
      .catch();
  };

  const fetchChannel = () => {
    axios
      .get(`https://backend.withchat.site/chatting-server/${props.serverId}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setChannelList(res.data.channels);
      })
      .catch();
  };

  const onClickCreateChannel = () => {
    axios
      .post(
        "https://backend.withchat.site/chatting-channel",
        {
          serverId: `${props.serverId}`,
          name: channelName,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          alert(`${channelName} 채널을 개설했어요!`);
          fetchChannel();
          setOpenCreateChannelModal(false);
        }
      })
      .catch();
  };

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
          if (res.status === 201) setAccessToken(newAccessToken);
        })
        .catch();
    };
    fetchUserLoggedIn();
    fetchChannel();
  }, [props.serverId]);

  return (
    <ChannelUI
      channelClicked={channelClicked}
      onClickChannel={onClickChannel}
      openChannelList={openChannelList}
      openInviteFriendModal={openInviteFriendModal}
      onClickOpenChannelList={onClickOpenChannelList}
      onChangeChannelName={onChangeChannelName}
      onClickCreateChannel={onClickCreateChannel}
      openCreateChannelModal={openCreateChannelModal}
      onClickOpenCreateModal={onClickOpenCreateModal}
      onClickInviteFriendModal={onClickInviteFriendModal}
      channelList={channelList}
    />
  );
}
