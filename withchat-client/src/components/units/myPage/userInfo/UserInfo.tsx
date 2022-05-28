import styled from "@emotion/styled";

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
        width:80%;
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

export default function UserInfo(props:any) {
    return (
        <UserInfoContainer>
            <h2><span>{props?.userData?.nickName}</span> 님의 계정 정보</h2>
                <div>
                    <UserInfoProfileImage>
                    {
                        props?.userData?.picture ? props?.userData?.picture :
                        <img className="none__user__picture" src="../img/header/user.png" alt="유저 이미지 없음"/>
                    }
                    </UserInfoProfileImage>
                    <div className="email">{props?.userData?.email}</div>
                </div>
                <UserInfoMiniBox>
                    <div>이름 : {props?.userData?.name}</div>
                    <div>가입 날짜 : {props?.memberSince}</div>
                </UserInfoMiniBox>
                <UserInfoButton>회원 탈퇴</UserInfoButton>
        </UserInfoContainer>
    );
}
