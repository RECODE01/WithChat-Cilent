import axios from "axios";
import { useEffect, useState } from "react";
import MySettingUI from "./myPage.Presenter";

export default function MySetting() {
    const [userData,setUserData] = useState<any>()
    useEffect(()=>{
        const fetchUserLoggedIn=()=>{
            const newAccessToken=localStorage.getItem('accessToken')
            axios.get(`https://backend.withchat.site/users/loggedInUser`,{
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${newAccessToken}`,
                   },
            }).then((res:any)=>{
                if(res.status === 201) setUserData(res.data.user)
            }).catch((err:any)=>console.log(err))
        }
        fetchUserLoggedIn()
    },[])

    const memberSince = String(userData?.createdAt).slice(0,10)
    return (
        <MySettingUI 
            userData={userData}
            memberSince={memberSince}
        />
    );
}

