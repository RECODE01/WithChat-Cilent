import axios from "axios";
import { useForm } from "react-hook-form";
import { ErrorFont } from "styles/FormsStyles";
import * as S from "../Auth.Styles";
import { ILoginFormData } from "../Auth.Types";

export default function FindEmail() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmitFindEmail = (data : ILoginFormData) => {
        const params = { name:data.name };
            axios.get("http://34.120.70.64/users/findEmail", {params}).then((res:any) => {
                console.log(res.data.emails)
                alert("이메일을 조회했습니다.")
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
                    <input autoComplete='off' type="text" placeholder="찾고 싶은 이메일에서 사용중인 닉네임을 입력하세요" {...register("name",{ required: true })} />
                    {errors.name && <ErrorFont>닉네임을 한 글자 이상입력해주세요.</ErrorFont>}
                </S.InputBox>
                <S.AuthButton type='submit'>조회하기</S.AuthButton>
            </form>
            </S.AuthContentsWrapper>
    );
}
