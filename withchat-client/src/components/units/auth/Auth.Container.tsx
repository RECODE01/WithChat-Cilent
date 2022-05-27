import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthUI from './Auth.Presenter';

const Auth = () => {  
    const navigate = useNavigate()
    useEffect(() => {
        if(localStorage.getItem('accessToken')){
            navigate('/')
        }
    },[])
    return (
        <AuthUI />
    )
}

export default Auth