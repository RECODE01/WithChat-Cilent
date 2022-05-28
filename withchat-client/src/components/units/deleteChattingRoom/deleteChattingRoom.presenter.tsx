import * as JH from './deleteChattingRoom.styles'

export default function DeleteChattingRoomUI(props: any){

    return (
        <JH.DeleteButtonWrapper onContextMenu={props.onClickOpenDeleteModal}>
            user
            {props.openDeleteModal &&
            <div className='DeleteModal'>
                <button className='DeleteButton' onClick={props.onClickDeleteChattingRoom}>채팅방 삭제하기</button>
            </div>}
        </JH.DeleteButtonWrapper>
    )
}