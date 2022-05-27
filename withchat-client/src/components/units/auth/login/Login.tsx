import * as S from "../Auth.Styles";
import { useForm } from "react-hook-form";
import { ILoginFormData } from '../Auth.Types';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const onSubmitLogin = (data : ILoginFormData) => {
            const variables = {
                    email: data.email,
                    password: data.password,
                } 
            axios.post("https://backend.withchat.site/auth/login", variables, {
                headers: {
                 "Content-Type": "application/json",
                },
            }).then((res) => {
                if(res.status === 201)
                console.log(res.data.accessToken)
                localStorage.setItem('accessToken', res.data.accessToken)
                alert("로그인 완료")
            }).catch((reason: any) => {
                alert(reason.response.data.message)
            });
    };


    
    return (
        <S.AuthContentsWrapper>
            <S.AuthContentsTitle>
                Welcome To <span>With Chat!!</span>
            </S.AuthContentsTitle>
            <S.AuthContentsSubTitle>Please log in to use with chat.</S.AuthContentsSubTitle>
            <form onSubmit={
                handleSubmit && 
                onSubmitLogin && 
                handleSubmit(onSubmitLogin)
            }>
                <S.InputBox>
                    <S.AuthInput 
                        errorStatus={errors.email}
                        autoComplete='off' 
                        type="text" 
                        placeholder={errors.email ? "🚫  한 글자 이상 입력해주세요." : "이메일을 입력하세요."} 
                        {...register("email",{ required: true })} 
                    />
                </S.InputBox>
                <S.InputBox>
                    <S.AuthInput 
                        errorStatus={errors.password} 
                        autoComplete='off' 
                        type="password" 
                        placeholder={errors.password ? "🚫  한 글자 이상 입력해주세요." : "비밀번호를 입력하세요."} 
                        {...register("password",{ required: true })}
                     />
                </S.InputBox>
                <S.AuthButton type='submit'>로그인</S.AuthButton>
            </form>
        </S.AuthContentsWrapper>
    )
}
