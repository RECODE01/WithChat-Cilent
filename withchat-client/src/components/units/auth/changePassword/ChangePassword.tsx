import axios from "axios";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import * as S from "../Auth.Styles";
import { ILoginFormData } from "../Auth.Types";


export default function ChangePassword() {
    const location = useLocation()
    const navigate = useNavigate()
    const token = location?.search.split("=")[2]
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmitChangePassword = (data : ILoginFormData) => {
        const variables = {
            email: data.email,
            newPassword: data.newPassword,
            token
        } 
        axios.patch("https://backend.withchat.site/users/resetPassword/updatePassword", {}, {params: variables, headers: {
            "Content-Type": "application/json",
        }            
        }).then((res) => {
            alert(res.data.message)
            navigate('/auth')
        }).catch((reason: any) => {
            alert(reason.response.data.message)
        });
    };


    return (
        <S.AuthContentsWrapper>
            <S.AuthContentsTitle>
                If you enter your <span>email</span> and <span>name</span>, <br/>
                you can change your <span>password</span> by sending <br/>
                an email to the appropriate email.
            </S.AuthContentsTitle>
            <S.AuthContentsSubTitle>Change your password via email and name.</S.AuthContentsSubTitle>
            <form onSubmit={
                handleSubmit && 
                onSubmitChangePassword && 
                handleSubmit(onSubmitChangePassword)
            }>
                <S.InputBox>
                    <S.AuthInput 
                            errorStatus={errors.email}
                            autoComplete='off' 
                            type="text" 
                            placeholder={errors.email ? "🚫  한 글자 이상 입력해주세요." : "비밀번호를 변경할 이메일을 입력하세요."} 
                            {...register("email",{ required: true })} 
                    />
                </S.InputBox>
                <S.InputBox>
                    <S.AuthInput 
                            errorStatus={errors.newPassword}
                            autoComplete='off' 
                            type="password" 
                            placeholder={errors.newPassword ? "🚫  한 글자 이상 입력해주세요." : "변경하여 사용할 비밀번호를 입력하세요."} 
                            {...register("newPassword",{ required: true })} 
                    />
                </S.InputBox>
                <S.AuthButton type='submit'>비밀번호 변경하기</S.AuthButton>
            </form>
        </S.AuthContentsWrapper>
    );
}
