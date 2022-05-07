// import axios from "axios";
import { useForm } from "react-hook-form";
import { ErrorFont } from "styles/FormsStyles";
import * as S from "../Auth.Styles";
import { ILoginFormData } from "../Auth.Types";

export default function FotgetPassword() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmitForgetPassword = (data : ILoginFormData) => {
        console.log(data)
        alert("관련 메일이 발송되었습니다.")
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
                    <input autoComplete='off' type="text" placeholder="비밀번호를 변경하려는 이메일을 입력하세요." {...register("email",{ required: true })} />
                    {errors.email && <ErrorFont>이메일을 한 글자 이상입력해주세요.</ErrorFont>}
                </S.InputBox>
                <S.InputBox>
                    <input autoComplete='off' type="text" placeholder="이메일에서 사용중인 이름을 입력하세요." {...register("name",{ required: true })} />
                    {errors.name && <ErrorFont>닉네임을 한 글자 이상입력해주세요.</ErrorFont>}
                </S.InputBox>
                <S.AuthButton type='submit'>메일 보내기</S.AuthButton>
            </form>
            </S.AuthContentsWrapper>
    );
}
