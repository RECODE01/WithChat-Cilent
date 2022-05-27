import Intro from "components/commons/intro/Intro";
import Logo from "components/commons/logo/Logo";
import { Route, Routes, Link } from "react-router-dom";
import ChangePassword from "./changePassword/ChangePassword";
import FindEmail from "./findEmail/findEmail";
import FindPassword from "./forgetPassword/ForgetPassword";
import Login from "./login/Login";
import SignUp from "./signUp/SignUp";
import * as S from "./Auth.Styles";

export default function AuthUI() {
  return (
    <S.AuthContainer>
      <Intro />
      <S.AuthWrapper>
        <S.AuthController>
          <Link to="">
            <button>Login</button>
          </Link>
          <Link to="signUp">
            <button>Sign Up</button>
          </Link>
          <Link to="findEmail">
            <button>Find Email</button>
          </Link>
          <Link to="findPassWord">
            <button>비밀번호를 잊어버리셨나요?</button>
          </Link>
        </S.AuthController>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="findEmail" element={<FindEmail />} />
          <Route path="findPassWord" element={<FindPassword />} />
          <Route path="changePassword" element={<ChangePassword />} />
        </Routes>
      </S.AuthWrapper>
      <S.AuthLogo>
        <Logo />
      </S.AuthLogo>
    </S.AuthContainer>
  );
}
