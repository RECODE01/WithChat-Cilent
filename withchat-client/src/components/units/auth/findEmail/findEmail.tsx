import axios from "axios";
import { useForm } from "react-hook-form";
import * as S from "../Auth.Styles";
import { ILoginFormData } from "../Auth.Types";

export default function FindEmail() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmitFindEmail = (data : ILoginFormData) => {
        const params = { nickName:data.nickName };
            axios.get("https://backend.withchat.site/users/findEmail", {params}).then((res:any) => {
                alert(`조회된 이메일은 ${res.data.email} 입니다.`)
            }).catch((reason: any) => {
                alert(reason.response.message)
            });
    };
    
    return (
        <S.AuthContentsWrapper>
            <S.AuthContentsTitle>
                Please enter a <span>nickname</span> for which 
                <br/> 
                you want to find <span>emails</span>.
            </S.AuthContentsTitle>
            <S.AuthContentsSubTitle>You can find your email by nickname.</S.AuthContentsSubTitle>
            <form onSubmit={
                handleSubmit && 
                onSubmitFindEmail && 
                handleSubmit(onSubmitFindEmail)
            }>
                <S.InputBox>
                    <S.AuthInput 
                        errorStatus={errors.nickName}
                        autoComplete='off' 
                        type="text" 
                        placeholder={errors.nickName ? "🚫  한 글자 이상 입력해주세요." : "이메일을 회원 가입할 때 사용했던 닉네임을 입력하세요."} 
                        {...register("nickName",{ required: true })} 
                    />
                </S.InputBox>
                <S.AuthButton type='submit'>조회하기</S.AuthButton>
            </form>
            </S.AuthContentsWrapper>
    );
}
