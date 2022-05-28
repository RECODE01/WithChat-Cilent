import Logo from "components/commons/logo/Logo";
import { Link, Route, Routes } from "react-router-dom";
import * as S from "./myPage.Styles";
import UserInfo from "./userInfo/UserInfo";
import UserUpdate from "./userUpdate/UserUpdate";


export default function MySettingUI(props:any) {
    return (
        <S.MySettingContainer> 
            <S.MySettingLogo onClick={props.onClickHome}>
                <Logo width={100}/>
            </S.MySettingLogo>
            <S.MySettingWrapper>
                <S.MySettingNav>
                    <S.MySettingNavTitle>My 메뉴</S.MySettingNavTitle>
                    <Link to="">
                        <button>회원 정보 / 탈퇴</button>
                    </Link>
                    <Link to="userUpdate">
                        <button>회원 수정</button>
                    </Link>
                </S.MySettingNav>
                <S.SettingContents>
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
                </S.SettingContents>
            </S.MySettingWrapper>
        </S.MySettingContainer>
    );
}

