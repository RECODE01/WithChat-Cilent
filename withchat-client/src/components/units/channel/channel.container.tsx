// import { io } from 'socket.io-client'
import axios from "axios";
import { ChangeEvent, MouseEvent, useEffect,useState } from "react";
import ChannelUI from "./channel.presenter";

// const socket = io('https://backend.withchat.site').connect()

export default function Channel(){
    // const [roomId, setRoomId]=useState('')
    const [openChannelList, setOpenChannelList]=useState<boolean>(false)
    const [channelClicked,setChannelClicked]=useState<string>('')   
    const [accessToken, setAccessToken]=useState<string | null>('') 
    const [channelName,setChannelName]=useState('')
    const [openCreateChannelModal,setOpenCreateChannelModal]=useState<boolean>(false)

    const onClickOpenCreateModal=()=>{
        setOpenCreateChannelModal(prev=>!prev)
    }
    const onClickOpenChannelList=()=>{
        setOpenChannelList(prev=>!prev)
    }
    const onChangeChannelName=(e:ChangeEvent<HTMLInputElement>)=>{
        setChannelName(e.currentTarget.value)
    }

    const onClickChannel=(e: MouseEvent<HTMLDivElement>)=>{
        setChannelClicked(e.currentTarget.id)
            // emit 명령어를 통해 채널에 입장
    //     // 앞의 문자열은 백엔드에서 지정한 채널 입장 명령어를 넣어주면 됩니다
    //     // 뒤 객체에는 채널에 입장하기 위해 필요한 id값을 넣어주는데 변수명은 백엔드에서 설정한 값에 따라 
    //     // 이름만 바꿔주면 됩니다.
    //     // 연결 확인은 socket.connected 명령어를 사용해 확인할 수 있고 리턴값은 불린으로 들어와요
    //     socket.emit('join room', {
    //       roomId: e.currentTarget.id,
    //     })
    }
    const onClickCreateChannel=()=>{
        axios.post('https://backend.withchat.site/chatting-channel',{
            serverId:'47e5c683-e4fe-47d3-a513-969925ac7ff7',
            name:channelName
        },{
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
                
               },
        }).then((res)=>{
            if(res.status===200) console.log(res.data)
        }).catch((err)=>{ console.log(err)})
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
                if(res.status === 201) setAccessToken(newAccessToken)
            }).catch((err)=>console.log(err))
            
        }
        fetchUserLoggedIn()
    },[])
    return(
        <ChannelUI 
        channelClicked={channelClicked}
        onClickChannel={onClickChannel}
        openChannelList={openChannelList}
        onClickOpenChannelList={onClickOpenChannelList}
        onChangeChannelName={onChangeChannelName}
        onClickCreateChannel={onClickCreateChannel}
        openCreateChannelModal={openCreateChannelModal}
        onClickOpenCreateModal={onClickOpenCreateModal}
        />
    )
}