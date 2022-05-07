import Intro from "components/commons/intro/Intro";
import Logo from "components/commons/logo/Logo";
import * as S from "./Auth.Styles";
import { IPropsAuthUI } from "./Auth.Types";
import FindEmail from "./findEmail/findEmail";
import Login from "./login/Login";
import SignUp from "./signUp/SignUp";

export default function AuthUI(props:IPropsAuthUI) {
    return (
        <S.AuthContainer>
            <Intro />
            <S.AuthWrapper>
                <S.AuthController>
                    <button onClick={props.onClickAuthChange("login")}>Login</button>
                    <button onClick={props.onClickAuthChange("signUp")}>Sign Up</button>
                    <button onClick={props.onClickAuthChange("findEmail")}>Email Find</button>
                    <button onClick={props.onClickAuthChange("findPassWord")}>Password Find</button>
                </S.AuthController>
                {props.isAuthComponents === "login" &&  <Login/>}
                {props.isAuthComponents === "signUp" &&  <SignUp />}
                {props.isAuthComponents === "findEmail" &&  <FindEmail />}
            </S.AuthWrapper>
            <S.AuthLogo>
                <Logo />
            </S.AuthLogo>
        </S.AuthContainer>
    )
}
