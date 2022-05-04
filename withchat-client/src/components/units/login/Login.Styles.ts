import styled from '@emotion/styled';

export const LoginContainer = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    background: url('./img/background_img/login.jpg') no-repeat center/cover;
`
export const LoginWrapper = styled.div`
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: linear-gradient(60deg, rgba(1,21,33,0.9) 50%, rgba(255,255,255,0) 100%);
    padding: 0 100px;
`

export const LoginTitle = styled.h2`
   color:#fff;
   font-size: 40px;
   padding: 30px 0;
   & >span{
       color:#2fa0f7
   }
`

export const LoginSubTitle = styled.h3`
   color:#fff;
   font-size: 20px;
   padding-bottom: 20px;
`

export const LoginForm = styled.form`
    & > button{
        color:#fff;
        background-color: #2fa0f7;
        padding: 10px 30px;
        border-radius: 30px;
        margin-top: 40px;
        font-size: 18px;
    }
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
export const LoginLogo = styled.div`
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

