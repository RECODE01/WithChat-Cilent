import axios from "axios";
import UserMenu from "components/units/userMenu/userMenu.Container";
import { useEffect, useState } from "react";

export default function UserMenuPage(){
    const [accessToken, setAccessToken]= useState<string| null>()
    useEffect(()=>{
        const getAccessToken=()=>{
            const newAccessToken=localStorage.getItem('accessToken')
            setAccessToken(newAccessToken)
        }
        getAccessToken()
        const fetchUserLoggedIn=()=>{
            axios.post(`https://backend.withchat.site/users/loggedInUser`,{
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`
                   },
            }).then((res)=>{
                if(res.status === 200) console.log(res)
            }).catch((err)=>console.log(err))
        }
        
        console.log(accessToken)
        fetchUserLoggedIn()
    },[])
    return <UserMenu />
}