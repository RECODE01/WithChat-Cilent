import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-solid-svg-icons'
import styled from '@emotion/styled';

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    border-top:3px solid #fff;
    border-bottom:3px solid #fff;
    padding:5px 10px;
`

const LogoIcon = styled.span`
    font-size: 50px;
    color:#2fa0f7;
    display: block;
    margin-right: 10px;
`

const LogoTitle = styled.div`
    color:#fff;
    font-size: 30px;
    font-weight: 900;
`


export default function Logo() {
    return (
        <LogoContainer>
            <LogoIcon>
                <FontAwesomeIcon icon={faComments}/>
            </LogoIcon>
            <LogoTitle>With Chat</LogoTitle>
        </LogoContainer>
    );
}