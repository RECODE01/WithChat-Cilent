import styled from "@emotion/styled";

interface IPropsLogo{
    width:number
}

const LogoContainer = styled.div`
    width:${(props:IPropsLogo) => `${props.width}px`};
    & > img{
        width: 100%;
    }
`

export default function Logo(props:IPropsLogo) {
    return (
        <LogoContainer width={props.width}>
           <img src="/img/withchat/withchat_logo.png" alt="With Chat Logo"/>
        </LogoContainer>
    );
}