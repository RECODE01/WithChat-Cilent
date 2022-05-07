// import axios from "axios";
import { useForm } from "react-hook-form";
import { ErrorFont } from "styles/FormsStyles";
import * as S from "../Auth.Styles";
import { ILoginFormData } from "../Auth.Types";

export default function ChangePassword() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmitChangePassword = (data : ILoginFormData) => {
        console.log(data)
        alert("비밀번호가 변경되었습니다.")
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
                    <input autoComplete='off' type="text" placeholder="변경할 비밀번호를 입력해주세요." {...register("password",{ required: true })} />
                    {errors.password && <ErrorFont>비밀번호를 한 글자 이상입력해주세요.</ErrorFont>}
                </S.InputBox>
                <S.AuthButton type='submit'>비밀번호 변경하기</S.AuthButton>
            </form>
            </S.AuthContentsWrapper>
    );
}
