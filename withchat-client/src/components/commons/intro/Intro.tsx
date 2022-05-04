import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-solid-svg-icons'
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
    background-color: #2fa0f7;
    position: fixed;
    z-index:9999;
    animation: ${introAnimation} 1.5s ease-in-out 2s 1 forwards;
`

const IntroIcon = styled.div`
    font-size: 150px;
    color:#fff;
    animation: ${introIconAnimation} 2s ease-in-out 0s 1 forwards; 
`


export default function Intro() {
    return (
        <IntroContainer>
            <IntroIcon>
                <FontAwesomeIcon icon={faComments}/>
            </IntroIcon>
        </IntroContainer>
    );
}