import styled from "@emotion/styled";

const LogoContainer = styled.div`
    width: 300px;
    height: 300px;
    & > img{
        width: 100%;
    }
`

export default function Logo() {
    return (
        <LogoContainer>
           <img src="/img/withchat/withchat_logo.png" alt="With Chat Logo"/>
        </LogoContainer>
    );
}