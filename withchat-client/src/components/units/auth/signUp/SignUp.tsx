import * as S from '../Auth.Styles';
import axios from 'axios';
import { ErrorFont } from 'styles/FormsStyles';
import { useForm } from 'react-hook-form';
import { ISignUpFormData } from '../Auth.Types';

export default function SignUp() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmitSignUp = (data : ISignUpFormData) => {
        const variables = {
                email: data.email,
                name: data.name,
                password: data.password,
                nickName: data.nickName
            } 
        axios.post("http://34.120.70.64/users", variables, {
            headers: {
             "Content-Type": "application/json",
            },
        }).then((res) => {
            if(res.status === 201)
            console.log(res)
            alert("회원가입 완료")
        }).catch((reason: any) => {
            alert(reason.response.message)
        });
    };

    return (
        <S.AuthContentsWrapper>
            <S.AuthContentsTitle>
                <span>With Chat</span> SignUp
             </S.AuthContentsTitle>
             <S.AuthContentsSubTitle>
                Please register as a member to log in <span>with chat.</span>
             </S.AuthContentsSubTitle>
            <form onSubmit={
                handleSubmit && 
                onSubmitSignUp && 
                handleSubmit(onSubmitSignUp)
            }>
                <S.InputBox>
                    <input autoComplete='off' type="text" placeholder="사용할 이메일을 입력해주세요." {...register("email",{ required: true })} />
                    {errors.email && <ErrorFont>사용할 이메일을 한 글자 이상입력해주세요.</ErrorFont>}
                </S.InputBox>
                <S.InputBox>
                    <input autoComplete='off' type="text" placeholder="사용할 비밀번호를 입력해주세요." {...register("password",{ required: true })} />
                    {errors.password && <ErrorFont>사용할 비밀번호를 한 글자 이상 입력해 주세요.</ErrorFont>}
                </S.InputBox>
                <S.InputBox>
                    <input autoComplete='off' type="text" placeholder="비밀번호를 확인해주세요." {...register("passwordCheck",{ required: true })} />
                    {errors.passwordCheck && <ErrorFont>사용할 비밀번호 확인을 한 글자 이상 입력해 주세요.</ErrorFont>}
                </S.InputBox>
                <S.InputBox>
                    <input autoComplete='off' type="text" placeholder="이름을 입력해주세요." {...register("name",{ required: true })} />
                    {errors.name && <ErrorFont>이름을 한 글자 이상 입력해 주세요.</ErrorFont>}
                </S.InputBox>
                <S.InputBox>
                    <input autoComplete='off' type="text" placeholder="사용할 닉네임을 입력해주세요." {...register("nickName",{ required: true })} />
                    {errors.nickName && <ErrorFont>사용할 닉네임을 한 글자 이상 입력해 주세요.</ErrorFont>}
                </S.InputBox>
                <S.AuthButton type='submit'>회원 가입</S.AuthButton>
            </form>
        </S.AuthContentsWrapper>
    );
}
