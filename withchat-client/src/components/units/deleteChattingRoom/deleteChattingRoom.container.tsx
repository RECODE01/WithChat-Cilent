import axios from "axios";
import { MouseEvent, useEffect, useState } from "react";
import DeleteChattingRoomUI from "./deleteChattingRoom.presenter";


export default function DeleteChattingRoom(){
    const [openDeleteModal, setOpenDeleteModal]=useState(false)
    const [accessToken, setAccessToken]=useState<string | null>('')

    const onClickOpenDeleteModal=(e: MouseEvent<HTMLDivElement>)=>{
        e.preventDefault();
        setOpenDeleteModal(prev => !prev)
    }
    const onClickDeleteChattingRoom=(e: MouseEvent<HTMLDivElement>)=>{
        axios.delete('https://backend.withchat.site/', {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
               },
            data: {
                roomId: e.currentTarget.id
            }
        }).then((res)=>{
            if(res.status === 200){
                alert('채팅방을 삭제했어요!')
            }
        }).catch((err)=>{console.log(err)})
    }
    useEffect(()=>{
        setAccessToken(localStorage.getItem('accessToken'))
    },[])
    return <DeleteChattingRoomUI 
    onClickDeleteChattingRoom={onClickDeleteChattingRoom}
    onClickOpenDeleteModal={onClickOpenDeleteModal}
    openDeleteModal={openDeleteModal}
    />
}