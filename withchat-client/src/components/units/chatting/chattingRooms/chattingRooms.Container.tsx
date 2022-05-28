import { MouseEvent, useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import * as S from "./chattingRoom.Styles";
import axios from "axios";
import AddIcon from "@mui/icons-material/Add";
import CreateChattingRoom from "components/units/createChattingRoom/createChattingRoom.container";
import DeleteChattingRoom from "components/units/deleteChattingRoom/deleteChattingRoom.container";
import { io } from 'socket.io-client'

const socket = io('https://backend.withchat.site').connect()

export default function ChattingRoomList() {
  const [currentTab, setCurrentTab] = useState(0);
  const [chattingList, setChattingList] = useState<any>([]);
  const [openCreate,setOpenCreate]=useState<boolean>(false)
  const [openDeleteModal, setOpenDeleteModal]=useState(false)
  const [userNickName,setUserNickName]=useState('')

  const onClickOpenDeleteModal=(e: MouseEvent<HTMLDivElement>)=>{
    e.preventDefault();
    setOpenDeleteModal(prev => !prev)
  }

  useEffect(() => {
    const fetchMyChattingRooms = () => {
      axios
        .get("https://backend.withchat.site/chatting-room", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
        .then((res) => {
          setChattingList(res.data.result);
          if (res.status === 201) console.log(res.data);
        })
        .catch((err) => console.log(err));
    };
    fetchMyChattingRooms();
  }, []);

  const onClickSelectTab = (index: number)=>(e:MouseEvent<HTMLDivElement>) => {
    setCurrentTab(index);
    // socket.emit('join room', {
    //   roomNum: e.currentTarget.id,
    // })
    socket.emit('hihi', userNickName, e.currentTarget.id)
  };

  const onClickOpenCreateModal=()=>{
    setOpenCreate(prev => !prev)
  }
  useEffect(()=>{
    const fetchUserLoggedIn=()=>{
        const newAccessToken=localStorage.getItem('accessToken')
        axios.get(`https://backend.withchat.site/users/loggedInUser`,{
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${newAccessToken}`,
                
               },
        }).then((res)=>{
            if(res.status === 201) setUserNickName(res.data.user.nickName)
        }).catch((err)=>console.log(err))
        
    }
    fetchUserLoggedIn()
},[])
  return (
    <>
      <S.ChattingRoomWrapper>
        <S.ChattingRoomDmList src="/LOGO_WC.png" alt="DM 리스트" title="DM" />
        <S.ChattingRoomLine />
        <S.AddChattingRoom
          menuIndex={-1}
          currentTab={chattingList.length}
          title="채팅방 추가"
          onClick={onClickOpenCreateModal}
        >
          <AddIcon fontSize="large" />
        </S.AddChattingRoom>
        
        <S.FindChattingRoom
          menuIndex={-1}
          currentTab={chattingList.length + 1}
          title="채팅방 찾기"
        >
          <SearchIcon fontSize="large" />
        </S.FindChattingRoom>
        <S.ChattingRoomLine />
        <S.ChattingRoomBox>
          {chattingList.map((el: any, index: number) => (
            <S.CurrentChattingRoom
              className="transitionTap"
              menuIndex={index}
              key={el.id}
              id={el.id}
              title={el.name}
              currentTab={currentTab}
              onClick={onClickSelectTab(index)}
              onContextMenu={onClickOpenDeleteModal}
            >
              <div>{el.name}</div>
              {openDeleteModal&& <DeleteChattingRoom/>}
            </S.CurrentChattingRoom>
          ))}
        </S.ChattingRoomBox>
      </S.ChattingRoomWrapper>
      {openCreate && <CreateChattingRoom onClickOpenCreateModal={onClickOpenCreateModal}/>}
    </>
  );
}
