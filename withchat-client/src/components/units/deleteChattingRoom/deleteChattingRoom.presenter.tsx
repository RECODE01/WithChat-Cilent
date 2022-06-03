import * as JH from './deleteChattingRoom.styles'

export default function DeleteChattingRoomUI(props: any){

    return (
        <JH.Background>
            <JH.DeleteButtonWrapper>
                <p>채널 삭제하기</p>
                <div className='DeleteModal'>
                    <div>
                        정말 `{props.name}` 채널을 삭제하시겠어요 ?
                    </div>
                </div>
                <div className='ButtonWrapper'>
                    <button className='DeleteButton' onClick={props.onClickDeleteChattingRoom}>채팅방 삭제하기</button>
                    <button className='CancelButton' onClick={props.onClickOpenDeleteModal}>취소하기</button>
                </div>
            </JH.DeleteButtonWrapper>
        </JH.Background>
    )
}