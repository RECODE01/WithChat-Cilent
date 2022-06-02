import { io } from 'socket.io-client'
import axios from "axios";
import { ChangeEvent, MouseEvent, useEffect,useState } from "react";
import ChannelUI from "./channel.presenter";

const socket = io('https://backend.withchat.site').connect()

export default function Channel(props:any){
    // const [roomId, setRoomId]=useState('')
    const [openChannelList, setOpenChannelList]=useState<boolean>(false)
    const [channelClicked,setChannelClicked]=useState<string>('')   
    const [accessToken, setAccessToken]=useState<string | null>('') 
    const [channelName,setChannelName]=useState('')
    const [openCreateChannelModal,setOpenCreateChannelModal]=useState<boolean>(false)
    const [channelList, setChannelList]=useState([])
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
        socket.emit('join', {
          roomId: e.currentTarget.id,
        })
        socket.emit('comeOn', {
            roomId: e.currentTarget.id,
        })
    }
    const fetchChannel=()=>{
        axios.get(`https://backend.withchat.site/chatting-server/${props.serverId}`,{
            headers: {
                "Content-Type": "application/json",
               },
        }).then((res)=>{
            console.log(res.data.channels)
            setChannelList(res.data.channels)
            // console.log(channelList.length, 'channelList')
            // console.log(res.data.channels.length, 'res.data')
            
        }).catch((err)=> console.log(err))
    }
    const onClickCreateChannel=()=>{
        axios.post('https://backend.withchat.site/chatting-channel',{
            serverId:`${props.serverId}`,
            name:channelName
        },{
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
                
               },
        }).then((res)=>{
            if(res.status===200) {
                alert(`${channelName} 채널을 개설했어요!`)
                fetchChannel()
                setOpenCreateChannelModal(false)
            }
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
        fetchChannel()
    },[props.serverId])
    
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
        channelList={channelList}
        />
    )
}