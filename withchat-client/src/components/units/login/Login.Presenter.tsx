import Intro from 'components/commons/intro/Intro';
import Logo from 'components/commons/logo/Logo';
import { FieldValues, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';
import { ErrorFont } from 'styles/FormsStyles';
import * as S from './Login.Styles';
import { ILoginFormData } from './Login.Types';


interface IPropsLoginUI{
    register:UseFormRegister<FieldValues>
    handleSubmit?:UseFormHandleSubmit<FieldValues>
    errors:any
    onSubmit?:(data: ILoginFormData) => void
}

export default function LoginUI(props:IPropsLoginUI) {
    return (
        <S.LoginContainer>
            <Intro />
            <S.LoginWrapper>
            <S.LoginLogo>
                <Logo />
            </S.LoginLogo>
            <S.LoginTitle>
                Welcome To <span>With Chat!!</span>
             </S.LoginTitle>
            <S.LoginSubTitle>Please log in to use with chat.</S.LoginSubTitle>
            <S.LoginForm onSubmit={
                props.handleSubmit && 
                props.onSubmit && 
                props.handleSubmit(props.onSubmit)
            }>
                <S.InputBox>
                    <input autoComplete='off' type="text" placeholder="이메일을 입력하세요" {...props.register("email",{ required: true })} />
                    {props.errors.email && <ErrorFont>이메일을 한 글자 이상입력해주세요.</ErrorFont>}
                </S.InputBox>
                <S.InputBox>
                    <input autoComplete='off' type="password" placeholder="비밀번호를 입력하세요" {...props.register("password",{ required: true })} />
                    {props.errors.password && <ErrorFont>비밀번호를 한 글자 이상입력해주세요.</ErrorFont>}
                </S.InputBox>
                <S.AuthManagementBox>
                    <button type='button'>이메일 / 비밀번호 찾기</button>
                    <button type='button'>회원가입</button>
                </S.AuthManagementBox>
                <button type='submit'>로그인</button>
            </S.LoginForm>
            </S.LoginWrapper> 
        </S.LoginContainer>
    );
}
