import styled from "@emotion/styled";

export const MySettingContainer = styled.div`
    background-color: #222;
    width:100%;
    height:100vh;
    position: relative;
`
export const MySettingWrapper = styled.div`
    width:800px;
    height:100%;
    margin:0 auto;
    background-color: #444;
    display: flex;
`
export const MySettingLogo = styled.div`
    position: absolute;
    top:30px;
    left:30px;
    cursor: pointer;
`

export const SettingContents = styled.div`
    width: 80%;
`

export const MySettingNavTitle = styled.div`
    color:#fff;
    padding-left: 20px;
    padding-bottom: 30px;
    font-weight: 100;
    font-size: 13px;
`

export const MySettingNav = styled.div`
    display: flex;
    width:20%;
    padding-top: 20px;
    flex-direction: column;
    background-color: #16a8f1;
    & > a {
        width:100%;
    }
    & > a > button{
        width:100%;
        color:#fff;
        font-size: 17px;
        transition:.4s;
        text-align: left;
        padding:10px 0 10px 20px;
        &:hover{
            background-color: #444;
        }
    }
`

export const UserInfoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    & > h2{
        color:#fff;
        text-align: center;
        font-weight: 100;
        padding:100px 0 50px;
        & > span{
            color:#16a8f1
        }
    }
    & .email{
        color:#fff;
        text-align: center;
        font-weight: 100;
        padding:30px 0;
    }
`

export const UserInfoProfileImage = styled.div`
    background-color: #888;
    width: 100px;
    height:100px;
    border-radius: 50%;
    position: relative;
    overflow: hidden;
    margin:0 auto;
    & > img{
        width:50%;
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
    }
`

export const UserInfoMiniBox = styled.div`
    width:100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    & > div{
        color:#fff;
        padding:5px 0;
    }
`

export const UserInfoButton = styled.button`
    background-color: #F2B64C;
    color:#fff;
    padding:10px 23px;
    border-radius: 8px;
    margin-top: 100px;
`