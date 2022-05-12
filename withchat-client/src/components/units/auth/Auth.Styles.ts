import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

interface IPropsAuthInput {
    errorStatus:any
}

const AuthMountAnimation = keyframes`
    0%{
        opacity: 0;
        transform: translateX(-30px);
    }
    50%{
        opacity: 0.5;
        transform: translateX(30px);
    }
    100%{
        opacity: 1;
        transform: translateX(0px);
    }
`

export const AuthContainer = styled.div`
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
    position: relative;
    background: url('../img/background_img/login.jpg') no-repeat center/cover;
`

export const AuthInput = styled.input`
    @keyframes authInputAnimation {
        from,
        to {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
        10%,
        30%,
        50%,
        70%,
        90% {
            -webkit-transform: translate3d(-10px, 0, 0);
            transform: translate3d(-5px, 0, 0);
        }

        20%,
        40%,
        60%,
        80% {
            -webkit-transform: translate3d(10px, 0, 0);
            transform: translate3d(5px, 0, 0);
        }
    }
    width: 100%;
    border-radius: 12px;
    font-size: 15px;
    color:rgba(255,255,255,0.8);
    border:1px solid #ccc;
    transition:.4s ease-in-out;
    padding:10px 15px;
    animation: ${(props:IPropsAuthInput) => props.errorStatus && `authInputAnimation 1s ease-in-out 0s 1 forwards`};
    &:focus{
        border-color: #16a8f1;
    }
    &::placeholder{
        color:${(props:IPropsAuthInput) => props.errorStatus && "rgb(194, 41, 33)"};
    };
    
`
export const AuthWrapper = styled.div`
    width:100%;
    height:100%;
    padding: 0 100px;
    position: absolute;
    display: flex;
    justify-content: center;
    flex-direction: column;
    top:0;
    left:0;
    background: linear-gradient(60deg, rgba(1,21,33,0.9) 50%, rgba(255,255,255,0) 100%);
`

export const AuthController = styled.div`
    padding-top: 50px;
    & button{
            color: #fff;
            opacity: 0.7;
            font-size: 20px;
            transition: .4s;
            &:hover{
                color:#16a8f1;
            }
            &:after{
                content:  "|";
                display: inline-block;
                margin:0 30px;
            }
            &:last-of-type{
                &:after{
                    content:  "";
                } 
            }  
        }
`
export const AuthContentsTitle = styled.h2`
   color:#fff;
   font-size: 40px;
   padding: 30px 0;
   & >span{
       color:#16a8f1
   }
`


export const AuthContentsSubTitle = styled.h3`
   color:#fff;
   font-size: 20px;
   padding-bottom: 20px;
`

export const InputBox = styled.div`
    max-width: 400px;
    width: 100%;
    margin-bottom: 10px;
    &:last-of-type{
        margin-bottom: 0;
    }
    & input {
        
    }
    & label{
        display: block;
        font-size: 15px;
        color:rgba(255,255,255,0.8);
        padding-bottom: 7px;
    }
`
export const AuthLogo = styled.div`
    position: absolute;
    bottom:100px;
    right:100px;
`

export const AuthManagementBox = styled.div`
    padding-top: 20px;
    font-size: 14px;
    & > button{
        color:#fff;
        margin-right: 15px;
        transition: 0.4s;
        &:hover{
            color: #16a8f1;
        }
    }
`

export const AuthButton = styled.button`
    color:#fff;
    background-color: #16a8f1;
    padding: 10px 30px;
    border-radius: 30px;
    margin: 40px 10px 0 0;
    font-size: 18px;
`

export const AuthContentsWrapper = styled.div`
   width: 100%;
   height:100%;
   display:flex;
   flex-direction: column;
   justify-content: center;
   animation: ${AuthMountAnimation} 0.8s ease-in-out 0s 1 forwards;
`
