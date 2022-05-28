import styled from "@emotion/styled";
import CreateChattingRoom from "components/units/createChattingRoom/createChattingRoom.container";
import {  useState } from "react";

const ModalButton=styled.button`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: lightgray;
    font-size: 1.5rem;
    :hover{
        background-color: skyblue;
    }
`

export default function CreateChattingRoomPage(){
    const [openModal, setOpenModal]=useState(false)
    const onClickOpenModal=()=>{
        setOpenModal((prev)=> !prev)
    }
    return (
        <>
            <ModalButton onClick={onClickOpenModal}>
                +
            </ModalButton>
            {openModal && <CreateChattingRoom onClickOpenModal={onClickOpenModal}/>}
        </>
    )
}