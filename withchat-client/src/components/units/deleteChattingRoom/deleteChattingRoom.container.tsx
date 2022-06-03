import axios from "axios";
import { MouseEvent, useEffect, useState } from "react";
import DeleteChattingRoomUI from "./deleteChattingRoom.presenter";


export default function DeleteChattingRoom(props:any){
    const [accessToken, setAccessToken]=useState<string | null>('')
    const onClickDeleteChattingRoom=(e: MouseEvent<HTMLDivElement>)=>{
        axios.delete('https://backend.withchat.site/chatting-server', {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
               },
            data: {
                roomId: props.id
            }
        }).then((res)=>{
            if(res.status === 200){
                alert('채팅방을 삭제했어요!')
                props.fetchMyChattingRooms()
            }
        }).catch((err)=>{console.log(err)})
    }
    useEffect(()=>{
        setAccessToken(localStorage.getItem('accessToken'))
    },[])
    return <DeleteChattingRoomUI 
    onClickDeleteChattingRoom={onClickDeleteChattingRoom}
    id={props.id}
    name={props.name}
    onClickOpenDeleteModal={props.onClickOpenDeleteModal}
    />
}