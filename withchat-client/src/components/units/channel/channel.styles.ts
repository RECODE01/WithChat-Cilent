import styled from "@emotion/styled";
import SettingsIcon from '@mui/icons-material/Settings';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

export const Wrapper = styled.div`
    width: 100%;
`
export const ChannelWrapper= styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        width: 100%;
        margin: 0 auto;
        padding: 20px;
        background-color: gray;
        
        color: ${(props: { channelClicked: string, roomId: string }) =>
        props.channelClicked=== props.roomId ? 'white' : '#c4c4c2'};
        cursor: pointer;
        :hover{
            color: white;
            background-color: #c4c4c2;
        }
        .ChannelName{
            width: 100%;
            font-size: 1.25rem;
            font-weight: 700;
            
        }
        .IconWrapper{
            display: flex;
        }

`
    

export const ChannelSetting=styled(SettingsIcon)`
    padding-left: 10px;
    cursor: pointer;
    :hover{
        color: gray;
    }
`

export const ChannelInvite=styled(PersonAddAlt1Icon)`
    cursor: pointer;
    :hover{
        color: gray;
    }
`