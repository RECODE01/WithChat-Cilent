import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as S from "../myPage.Styles";

export default function UserInfo(props:any) {
    const navigate = useNavigate()
    const onClickUserDelete = () => {
        const newAccessToken=localStorage.getItem('accessToken')
        axios.delete("https://backend.withchat.site/users", { headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${newAccessToken}`,
           }            
        }).then((res) => {
            alert(res.data.message)
            navigate("/auth")
        }).catch((reason: any) => {
            alert(reason.response.data.message)
        });
    }
    return (
        <S.UserInfoContainer>
            <h2><span>{props?.userData?.nickName}</span> 님의 계정 정보</h2>
                <div>
                    <S.UserInfoProfileImage>
                    {
                        props?.userData?.picture ? 
                        <img src={props?.userData?.picture} alt="유저 이미지" /> :
                        <img className="none__user__picture" src="../img/header/user.png" alt="유저 이미지 없음"/>
                    }
                    </S.UserInfoProfileImage>
                    <div className="email">{props?.userData?.email}</div>
                </div>
                <S.UserInfoMiniBox>
                    <div>이름 : {props?.userData?.name}</div>
                    <div>가입 날짜 : {props?.memberSince}</div>
                </S.UserInfoMiniBox>
                <S.UserInfoButton onClick={onClickUserDelete}>회원 탈퇴</S.UserInfoButton>
        </S.UserInfoContainer>
    );
}
