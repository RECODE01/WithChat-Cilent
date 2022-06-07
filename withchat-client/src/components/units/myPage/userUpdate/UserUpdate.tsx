import styled from "@emotion/styled";
import axios from "axios";
import { AuthInput, InputBox } from "components/units/auth/Auth.Styles";
import { ILoginFormData } from "components/units/auth/Auth.Types";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const UserUpdateContainer = styled.div`
  & > h2 {
    color: #fff;
    text-align: center;
    font-weight: 100;
    padding: 100px 0 50px;
  }
  & > h3 {
    color: #fff;
    font-size: 15px;
    font-weight: 100;
    text-align: center;
    padding: 20px 0;
  }
  & > form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  & #profile {
    display: none;
  }
`;

export const UserInfoButton = styled.button`
  background-color: #f2b64c;
  color: #fff;
  padding: 10px 23px;
  border-radius: 8px;
  margin-top: 100px;
`;

export const UserProfileUpdate = styled.div`
  display: flex;
  align-items: center;
  & > label {
    display: block;
    color: #fff;
    background-color: #f2b64c;
    padding: 10px 20px;
    margin-left: 20px;
    font-size: 13px;
    cursor: pointer;
  }
`;

export const UserInfoProfileImage = styled.div`
  background-color: #888;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  margin: 30px auto;
  & > img {
    &.none__user__picture {
      width: 50%;
      height: 100%;
    }
    &.user__picture {
      width: 100%;
      height: 100%;
    }
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default function UserUpdate(props: any) {
  const [picture, setPicture] = useState();

  const onClickFileUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const newAccessToken = localStorage.getItem("accessToken");
    if (e.target.files) {
      if (e.target.files && e.target.files[0]) {
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = (e: any) => {
          const previewImage: any = document.getElementById("image");
          previewImage.src = e.target.result;
          document.getElementById("image")?.classList.add("user__picture");
        };
      }
      const file: any = e.target.files[0];
      setPicture(file);
      const formData = new FormData();
      await formData.append("file", await file);

      await axios
        .post("https://backend.withchat.site/file/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${newAccessToken}`,
            accept: "application/json",
          },
        })
        .then((res) => {
          if (res.status === 201) setPicture(res?.data?.url);
        })
        .catch();
    }
  };

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmitUserUpdate = (data: ILoginFormData) => {
    const newAccessToken = localStorage.getItem("accessToken");
    const variables = {
      nickName: data.nickName,
      password: data.password,
      picture,
    };
    axios
      .patch("https://backend.withchat.site/users", variables, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${newAccessToken}`,
        },
      })
      .then((res) => {
        alert("수정되었습니다.");
        navigate("/");
      })
      .catch((reason: any) => {
        alert(reason.response.data.message);
      });
  };

  return (
    <UserUpdateContainer>
      <h2>회원 정보 수정</h2>
      <h3>
        {'변경하고 싶은 부분을 설정하고 "회원 정보 수정하기" 를 눌러주세요'}
      </h3>
      <form
        onSubmit={
          handleSubmit && onSubmitUserUpdate && handleSubmit(onSubmitUserUpdate)
        }
      >
        <div>
          <UserProfileUpdate>
            {props?.userDataProfile ? (
              props?.userDataProfile
            ) : (
              <UserInfoProfileImage>
                <img
                  id="image"
                  className={
                    props?.userData?.picture
                      ? "user__picture"
                      : "none__user__picture"
                  }
                  src={
                    props?.userData?.picture
                      ? props?.userData?.picture
                      : "../img/header/user.png"
                  }
                  alt="유저 이미지 없음"
                />
              </UserInfoProfileImage>
            )}
            <label htmlFor="profile">🖋 프로필 이미지 수정</label>
          </UserProfileUpdate>
          <input id="profile" type="file" onChange={onClickFileUpload} />
        </div>
        <InputBox>
          <AuthInput
            errorStatus={errors.password}
            autoComplete="off"
            type="password"
            placeholder={
              errors.password
                ? "🚫  한 글자 이상 입력해주세요."
                : "비밀번호 변경하기"
            }
            {...register("password", { required: true })}
          />
        </InputBox>
        <InputBox>
          <AuthInput
            errorStatus={errors.nickName}
            autoComplete="off"
            type="text"
            placeholder={
              errors.nickName
                ? "🚫  한 글자 이상 입력해주세요."
                : "닉네임 변경하기"
            }
            {...register("nickName", { required: true })}
          />
        </InputBox>
        <UserInfoButton>회원 정보 수정하기</UserInfoButton>
      </form>
    </UserUpdateContainer>
  );
}
