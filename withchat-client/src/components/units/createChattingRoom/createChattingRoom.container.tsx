import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import CreateChattingRoomUI from "./createChattingRoom.presenter";

interface IParam{
    name: string,
    image?: string
}

export default function CreateChattingRoom(props:any){
    const [roomName, setRoomName]=useState('')
    const [roomImage,setRoomImage]=useState('')
    const [accessToken, setAccessToken]=useState<string | null>('')
    const [image,setImage]=useState<File | null>()
    
    const onChangeRoomName=(e:ChangeEvent<HTMLInputElement>)=>{
        setRoomName(e.target.value)
    }
    const onChangeRoomImage=(e:ChangeEvent<HTMLInputElement>)=>{
        setRoomImage(e.target.value)
    }
    const onClickCreateChattingRoom=()=>{
        const param:IParam={
            name: roomName,
        }
        if(roomImage !== '') param.image = roomImage

        axios.post('https://backend.withchat.site/chatting-room',param,{
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
               },
        }).then((res)=>{
            if(res.status === 200) {
                console.log(res.data)
                console.log(image)
                alert(`${res.data.result.name} 채팅방이 개설되었어요!`)
            }
        }).catch((err)=> console.log(err))
    }

    const onClickFileUpload=async (e:ChangeEvent<HTMLInputElement>)=>{
        if(e.target.files) {
            const file= e.target.files[0]
            setImage(file)
            
            const formData = new FormData();
            await formData.append("file", await file);
            
            await axios.post('https://backend.withchat.site/file/upload', formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${accessToken}`,
                    accept: 'application/json'
                    },
            }).then((res)=> {
                if(res.status === 201) console.log(res)
            }).catch((err)=>console.log(err))
        }
    }

    useEffect(()=>{
        setAccessToken(localStorage.getItem('accessToken'))
    },[])
    return <CreateChattingRoomUI 
        onChangeRoomName={onChangeRoomName} 
        onChangeRoomImage={onChangeRoomImage}
        onClickCreateChattingRoom={onClickCreateChattingRoom}
        onClickOpenCreateModal={props.onClickOpenCreateModal}
        onClickFileUpload={onClickFileUpload}
        />
}