
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AuthUI from './Auth.Presenter';

const Auth = () => {
    const navigate = useNavigate();
    const location = useLocation()
    useEffect(() => {   
        if(location.pathname === '/auth')
        navigate('login')
    },[])
    
    return (
            <AuthUI />
    )
}

export default Auth