import axios from "axios";
import { useForm } from "react-hook-form";
import * as S from "../Auth.Styles";
import { ILoginFormData } from "../Auth.Types";

export default function FotgetPassword() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmitForgetPassword = (data : ILoginFormData) => {
        const variables = {
            email: data.email,
            name: data.name,
        } 
        axios.post("https://backend.withchat.site/users/resetPassword/sendMail", {}, {params: variables, headers: {
            "Content-Type": "application/json",
        }            
        }).then((res) => {
            alert(res.data.message)
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
                onSubmitForgetPassword && 
                handleSubmit(onSubmitForgetPassword)
            }>
                <S.InputBox>
                    <S.AuthInput 
                        errorStatus={errors.email}
                        autoComplete='off' 
                        type="text" 
                        placeholder={errors.email ? "🚫  한 글자 이상 입력해주세요." : "비밀번호를 변경하려는 이메일을 입력하세요."} 
                        {...register("email",{ required: true })} 
                    />
                </S.InputBox>
                <S.InputBox>
                    <S.AuthInput 
                        errorStatus={errors.name}
                        autoComplete='off' 
                        type="text" 
                        placeholder={errors.name ? "🚫  한 글자 이상 입력해주세요." : "이메일에서 사용중인 이름을 입력하세요."} 
                        {...register("name",{ required: true })} 
                    />
                </S.InputBox>
                <S.AuthButton type='submit'>메일 보내기</S.AuthButton>
            </form>
            </S.AuthContentsWrapper>
    );
}
