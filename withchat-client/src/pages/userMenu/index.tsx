import axios from "axios";
import UserMenu from "components/units/userMenu/userMenu.Container";
import { useEffect } from "react";

export default function UserMenuPage(props: any){
    // const [accessToken, setAccessToken]= useState<string| null>()
    
    useEffect(()=>{
        const fetchUserLoggedIn=()=>{
            const newAccessToken=localStorage.getItem('accessToken')
            axios.get(`https://backend.withchat.site/users/loggedInUser`,{
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${newAccessToken}`,
                    
                   },
            }).then((res)=>{
                if(res.status === 201) console.log(res.data)
            }).catch((err)=>console.log(err))
            
        }
        fetchUserLoggedIn()
    },[])
    return <UserMenu />
}