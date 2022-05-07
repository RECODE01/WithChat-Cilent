import { ErrorFont } from 'styles/FormsStyles';
import * as S from "../Auth.Styles";
import { useForm } from "react-hook-form";
import { ILoginFormData } from '../Auth.Types';
import axios from 'axios';

export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmitLogin = (data : ILoginFormData) => {
            const variables = {
                    email: data.email,
                    password: data.password,
                } 
            axios.post("http://34.120.70.64/auth/login", variables, {
                headers: {
                 "Content-Type": "application/json",
                },
            }).then((res) => {
                if(res.status === 201)
                console.log(res.data.accessToken)
                alert("로그인 완료")
            }).catch((reason: any) => {
                alert(reason.response.message)
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
                    <input autoComplete='off' type="text" placeholder="이메일을 입력하세요" {...register("email",{ required: true })} />
                    {errors.email && <ErrorFont>이메일을 한 글자 이상입력해주세요.</ErrorFont>}
                </S.InputBox>
                <S.InputBox>
                    <input autoComplete='off' type="password" placeholder="비밀번호를 입력하세요" {...register("password",{ required: true })} />
                    {errors.password && <ErrorFont>비밀번호를 한 글자 이상입력해주세요.</ErrorFont>}
                </S.InputBox>
                <S.AuthButton type='submit'>로그인</S.AuthButton>
            </form>
        </S.AuthContentsWrapper>
    )
}
