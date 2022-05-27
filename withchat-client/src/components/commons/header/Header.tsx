import styled from "@emotion/styled";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HeaderContainer = styled.header`
    padding:10px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color:#222;
    color:#fff;
`

const HeaderSettings = styled.div`
   & > button{
       color:#fff;
       width:50px;
       height:50px;
       background-color: #555;
       border-radius: 50%;
       margin-left:10px;
       & > img{
           width: 50%;
       }
   }
`

const HeaderUserInfos = styled.div`
    display: flex;
    align-items: center;
`

const UserPicture = styled.div`
    width:50px;
    height:50px;
    background-color:#555;
    border-radius: 50%;
    position:relative;
    overflow: hidden;
    margin-right: 10px;
    & > img{
        width:100%;
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
        &.none__user__picture{
            width:50%
        }   
    }
`




const HeaderInfos = styled.div`
    display: flex;
`



export default function Header() {
    const [userData,setUserData] = useState<any>()
    const navigate = useNavigate()
    useEffect(()=>{
        const fetchUserLoggedIn=()=>{
            const newAccessToken=localStorage.getItem('accessToken')
            axios.get(`https://backend.withchat.site/users/loggedInUser`,{
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${newAccessToken}`,
                   },
            }).then((res)=>{
                if(res.status === 201) setUserData(res.data.user)
            }).catch((err)=>console.log(err))
        }
        fetchUserLoggedIn()
    },[])

    const onClickLogout = () => {
        localStorage.removeItem('accessToken')
        alert("로그아웃 되었습니다.")
        navigate('/auth')
    }

    const onClickMyPage = () => {
        navigate('/mySetting')
    }
    
    return (
        <HeaderContainer>
            <HeaderInfos>
                <HeaderUserInfos>
                    <UserPicture>
                        {userData?.picture ? userData.picture : 
                         <img className="none__user__picture" src="./img/header/user.png" alt="로그아웃"/>
                        }
                    </UserPicture>
                    <div>{userData ? userData.nickName : "loading.."}</div>
                </HeaderUserInfos>
            </HeaderInfos>
            <HeaderSettings>
                <button onClick={onClickMyPage}>
                    <img src="./img/header/settings.png" alt="마이 메뉴"/> 
                </button>
                <button onClick={onClickLogout}>
                    <img src="./img/header/logout.png" alt="로그아웃"/>
                </button>
            </HeaderSettings>
        </HeaderContainer>
    );
}

