import styled from "@emotion/styled";
import Logo from "components/commons/logo/Logo";
import { Link, Route, Routes } from "react-router-dom";
import UserInfo from "./userInfo/UserInfo";
import UserUpdate from "./userUpdate/UserUpdate";

const MySettingContainer = styled.div`
    background-color: #222;
    width:100%;
    height:100vh;
    position: relative;
`
const MySettingWrapper = styled.div`
    width:800px;
    height:100%;
    margin:0 auto;
    background-color: #444;
    display: flex;
`
const MySettingLogo = styled.div`
    position: absolute;
    top:30px;
    left:30px;
`

const SettingContents = styled.div`
    width: 80%;
`

const MySettingNav = styled.div`
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

export default function MySettingUI(props:any) {
    return (
        <MySettingContainer> 
            <MySettingLogo>
                <Logo width={100}/>
            </MySettingLogo>
            <MySettingWrapper>
                <MySettingNav>
                    <Link to="">
                        <button>회원 정보 / 탈퇴</button>
                    </Link>
                    <Link to="userUpdate">
                        <button>회원 수정</button>
                    </Link>
                </MySettingNav>
                <SettingContents>
                    <Routes>
                        <Route path="/" element={
                        <UserInfo 
                            userData={props?.userData}
                            memberSince={props?.memberSince}
                        />} />
                        <Route path="userUpdate" element={
                        <UserUpdate 
                            userDataProfile={props?.userData?.profile}                        
                        />} />
                    </Routes>
                </SettingContents>
            </MySettingWrapper>
        </MySettingContainer>
    );
}

