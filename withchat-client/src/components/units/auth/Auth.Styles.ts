import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

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
    background: url('./img/background_img/login.jpg') no-repeat center/cover;
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
    & > button{
            color: #fff;
            opacity: 0.7;
            font-size: 20px;
            transition: .4s;
            &:hover{
                color:#2fa0f7;
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
       color:#2fa0f7
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
        width: 100%;
        border-radius: 12px;
        font-size: 15px;
        color:rgba(255,255,255,0.8);
        border:1px solid #ccc;
        transition:.4s ease-in-out;
        padding:10px 15px;
        &:focus{
            border-color: #2fa0f7;
        }
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
            color: #2fa0f7;
        }
    }
`

export const AuthButton = styled.button`
    color:#fff;
    background-color: #2fa0f7;
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
