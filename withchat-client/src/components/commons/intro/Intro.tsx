import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const introAnimation = keyframes`
    from{
        opacity:1;
        visibility: visible;
    }
    to{
        opacity:0;
        visibility: hidden;
    }
`

const introIconAnimation = keyframes`
    from{
        transform: rotateY(0);
    }
    to{
        transform: rotateY(360deg); 
    }
`

const IntroContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    position: fixed;
    z-index:9999;
    animation: ${introAnimation} 1.5s ease-in-out 2s 1 forwards;
`

const IntroIcon = styled.img`
    width: 200px;
    animation: ${introIconAnimation} 2s ease-in-out 0s 1 forwards; 
`


export default function Intro() {
    return (
        <IntroContainer>
            <IntroIcon src="../img/withchat/withchat_logo.png" alt="With Chat Intro Logo"/>
        </IntroContainer>
    );
}