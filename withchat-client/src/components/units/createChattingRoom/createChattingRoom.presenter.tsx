import * as JH from './createChattingRoom.styles'
export default function CreateChattingRoomUI(props: any){

    return(
        <JH.Background>

        <JH.Wrapper>
            <div className='Title'>채팅방 개설</div>
            <div className='InputWrapper'>
                <p>채팅방 이름</p>
                <input className='InputTag' placeholder="채팅방 이름을 입력해보세요!" onChange={props.onChangeRoomName}/>
            </div>
            <form className='InputWrapper'>
                <p>채팅방 대표 사진</p>
                <input type='file' className='InputTag' placeholder="채팅방을 대표할 사진을 등록해보세요!" onChange={props.onClickFileUpload}/>
            </form>
            <div className='ButtonWrapper'>
                <button className='Button' onClick={props.onClickCreateChattingRoom}>개설하기</button>
                <button className='Button' onClick={props.onClickOpenCreateModal}>취소하기</button>
            </div>
        </JH.Wrapper>
        </JH.Background>
    )
}