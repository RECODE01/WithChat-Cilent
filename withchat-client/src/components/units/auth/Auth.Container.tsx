
import { useState } from 'react';
import AuthUI from './Auth.Presenter';

export default function Auth() {
    const [isAuthComponents, setIsAuthComponents] = useState("login")

    const onClickAuthChange = (state:string) => () => {
        setIsAuthComponents(state)
    }

    return (
            <AuthUI 
                isAuthComponents={isAuthComponents}
                onClickAuthChange={onClickAuthChange}
            />
    )
}
