import styled from "@emotion/styled";
import SettingsIcon from '@mui/icons-material/Settings';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { keyframes } from "@emotion/react";
import AddIcon from '@mui/icons-material/Add';

const openAnimation = keyframes`
    0%{
        opacity: 0;
        transform: translateY(-10px);
    }
    100%{
        opacity: 1;
        transform: translateY(0px);
    }
`

export const Wrapper = styled.div`
    min-width: 240px;
    height: 100vh;
    background-color: #2f3136;
    overflow: scroll;
    background: ${(props: { openCreateChannelModal:boolean}) =>
        props.openCreateChannelModal&& 'rgba(0, 0, 0, 0.8)'};

    .ChannelHeader{
        width: 100%;
        margin: 0 auto;
        padding: 10px 5px;
        background-color: gray; 
        border-bottom: 1px solid black;

        display: flex;
        justify-content: space-between;
        align-items: center;

        cursor: pointer;
        color: #c4c4c2;
        p{
            font-size: 1.125rem;
            font-weight: 700;
            
        }
        :hover{
            color: white;
            background-color: #c4c4c2;
        }
        .HeaderLeft{
            display: flex;
            align-items: center;
            width: 100%;
        }
    }
    
`
export const CreateModal=styled.div`
    
            width: 400px;
            height: 150px;
            position: fixed;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            z-index: 999;
            background-color: gray;
            border: 1px solid black;
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            padding: 5px;
            border-radius: 10px;
            p{
                font-size: 1.25rem;
                font-weight: 700;
                padding: 10px 0;
                color: white;
            }
            input{
                width: 100%;
                height: 35px;
                padding-left: 10px;
                background-color: white;
                text-align: left;
            }
            .buttonWrapper{
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                justify-content: center;
                align-items: center;
                margin: 0 auto;
                .button{
                    padding: 5px;
                    border-radius: 8px;
                    cursor: pointer;
                    :hover{
                        color: gray;
                        background-color: white;
                        text-align: center
                    }
                }
            }
        
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

        animation: ${openAnimation} 0.8s  0s 1 ;
        :hover{
            color: white;
            background-color: #c4c4c2;
        }
        .ChannelName{
            width: 100%;
            font-size: 1.125rem;
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
export const OpenIcon=styled(KeyboardArrowDownIcon)`
    
`
export const ChannelAddIcon=styled(AddIcon)`
    
`