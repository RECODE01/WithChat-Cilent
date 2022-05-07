import Intro from "components/commons/intro/Intro";
import Logo from "components/commons/logo/Logo";
import * as S from "./Auth.Styles";
import { IPropsAuthUI } from "./Auth.Types";
import Login from "./login/Login";
import SignUp from "./signUp/SignUp";

export default function AuthUI(props:IPropsAuthUI) {
    return (
        <S.AuthContainer>
            <Intro />
            <S.AuthWrapper>
                <S.AuthController>
                    <button onClick={props.onClickAuthChange("login")}>Login</button>
                    <button onClick={props.onClickAuthChange("signUp")}>Sing Up</button>
                    <button>Email / Pw Find</button>
                </S.AuthController>
                {props.isAuthComponents === "login" &&  <Login/>}
                {props.isAuthComponents === "signUp" &&  <SignUp />}
            </S.AuthWrapper>
            <S.AuthLogo>
                <Logo />
            </S.AuthLogo>
        </S.AuthContainer>
    )
}
