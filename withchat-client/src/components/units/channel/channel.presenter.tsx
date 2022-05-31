import * as JH from './channel.styles'

const channel = [
    {
        key: '1',
        roomName: 'FE05',
        roomId: '1',
        master: '김재민'
    },
    {
        key: '2',
        roomName: 'JS100',
        roomId: '2',
        master: '최건'
    },
    {
        key: '3',
        roomName: '1일 1커밋',
        roomId: '3',
        master: '성기창'
    },
    {
        key: '4',
        roomName: '공지방',
        roomId: '4',
        master: '석지웅'
    },
    {
        key: '5',
        roomName: 'front-end',
        roomId: '5',
        master: '김재현'
    },
    {
        key: '6',
        roomName: 'back-end',
        roomId: '6',
        master: '김정환'
    },
]

export default function ChannelUI(props:any){

    return (
        <JH.Wrapper >
            {channel.map((el)=>(
                <JH.ChannelWrapper key={el.key} channelClicked={props.channelClicked} roomId={el.roomId}>
                    <div className='ChannelName' id={el.roomId} onClick={props.onClickChannel}>
                        # {el.roomName}
                    </div>
                    {props.channelClicked===el.roomId ?<div className='IconWrapper'>
                        <div>
                            <JH.ChannelInvite />
                        </div>
                        <div>
                            <JH.ChannelSetting />
                        </div>
                    </div>
                    :
                    <div className='IconWrapper'></div>
                    }
                </JH.ChannelWrapper>
            ))}
        </JH.Wrapper>
    )
}