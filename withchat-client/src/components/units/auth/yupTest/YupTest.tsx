import { useForm } from "react-hook-form";
import * as S from "../Auth.Styles";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { ILoginFormData } from "../Auth.Types";

export default function YupTest() {
    const schema = yup.object({
        email: yup
          .string()
          .required('제목을 입력해주세요 😰')
          .min(2, '2자 이상 입력해주세요!'),
        name: yup.string().required('내용을 입력해주세요 😦'),
    }).required();
    
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    
    const onSubmitYupTest = (data : ILoginFormData) => {
        console.log(data)
        alert("비밀번호가 변경되었습니다.")
    };

    
    return (
        <S.AuthContentsWrapper>
            <S.AuthContentsTitle>
                YupTest
            </S.AuthContentsTitle>
            <S.AuthContentsSubTitle>Change your password via email and name.</S.AuthContentsSubTitle>
            <form onSubmit={
                onSubmitYupTest && 
                onSubmitYupTest && 
                handleSubmit(onSubmitYupTest)
            }>
                <S.InputBox>
                    <S.AuthInput 
                        errorStatus={errors.password}
                        autoComplete='off' 
                        type="text" 
                        placeholder={errors.password ? "🚫  한 글자 이상 입력해주세요." : "이메일을 입력하세요."} 
                        {...register("email",{ required: true })} 
                    />
                </S.InputBox>
                <S.InputBox>
                    <S.AuthInput 
                        errorStatus={errors.password}
                        autoComplete='off' 
                        type="text" 
                        placeholder={errors.password ? "🚫  한 글자 이상 입력해주세요." : "비밀번호를 입력하세요."} 
                        {...register("password",{ required: true })} 
                    />
                </S.InputBox>
                <S.AuthButton type='submit'>제출</S.AuthButton>
            </form>
        </S.AuthContentsWrapper>
    );
}
