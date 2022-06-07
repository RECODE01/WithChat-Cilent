import * as S from "../Auth.Styles";
import axios from "axios";
import { useForm } from "react-hook-form";
import { ISignUpFormData } from "../Auth.Types";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmitSignUp = (data: ISignUpFormData) => {
    const variables = {
      email: data.email,
      name: data.name,
      password: data.password,
      nickName: data.nickName,
    };
    axios
      .post("https://backend.withchat.site/users", variables, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if (res.status !== 201) alert(res.data.message);
        navigate("/");
        alert("메일이 발송되었습니다. 인증 후 로그인해주세요.");
      })
      .catch((reason: any) => {
        alert(reason.message);
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
      <form
        onSubmit={
          handleSubmit && onSubmitSignUp && handleSubmit(onSubmitSignUp)
        }
      >
        <S.InputBox>
          <S.AuthInput
            errorStatus={errors.email}
            autoComplete="off"
            type="text"
            placeholder={
              errors.email
                ? "🚫  한 글자 이상 입력해주세요."
                : "사용할 이메일을 입력하세요."
            }
            {...register("email", { required: true })}
          />
        </S.InputBox>
        <S.InputBox>
          <S.AuthInput
            errorStatus={errors.password}
            autoComplete="off"
            type="password"
            placeholder={
              errors.password
                ? "🚫  한 글자 이상 입력해주세요."
                : "사용할 비밀번호를 입력하세요."
            }
            {...register("password", { required: true })}
          />
        </S.InputBox>
        <S.InputBox>
          <S.AuthInput
            errorStatus={errors.passwordCheck}
            autoComplete="off"
            type="password"
            placeholder={
              errors.passwordCheck
                ? "🚫  한 글자 이상 입력해주세요."
                : "비밀번호 확인을 입력하세요."
            }
            {...register("passwordCheck", { required: true })}
          />
        </S.InputBox>
        <S.InputBox>
          <S.AuthInput
            errorStatus={errors.name}
            autoComplete="off"
            type="text"
            placeholder={
              errors.name
                ? "🚫  한 글자 이상 입력해주세요."
                : "본인의 이름을 입력하세요."
            }
            {...register("name", { required: true })}
          />
        </S.InputBox>
        <S.InputBox>
          <S.AuthInput
            errorStatus={errors.nickName}
            autoComplete="off"
            type="text"
            placeholder={
              errors.nickName
                ? "🚫  한 글자 이상 입력해주세요."
                : "사용할 유저 명을 입력하세요."
            }
            {...register("nickName", { required: true })}
          />
        </S.InputBox>
        <S.AuthButton type="submit">회원 가입</S.AuthButton>
      </form>
    </S.AuthContentsWrapper>
  );
}
