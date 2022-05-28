import styled from "@emotion/styled";
import { AuthInput, InputBox } from "components/units/auth/Auth.Styles";
import { useForm } from "react-hook-form";



const UserUpdateContainer=styled.div`
 & > h2{
        color:#fff;
        text-align: center;
        font-weight: 100;
        padding:100px 0 50px;
    };
    & > h3{
        color:#fff;
        font-size: 15px;
        font-weight: 100;
        text-align: center;
        padding: 20px 0;
    }
    & > form{
        width:100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    & #profile{
        display: none;
    }
`

export const UserInfoButton = styled.button`
    background-color: #F2B64C;
    color:#fff;
    padding:10px 23px;
    border-radius: 8px;
    margin-top: 100px;
`


export const UserProfileUpdate = styled.div`
    display: flex;
    align-items: center;
    & > label{
        display: block;
        color:#fff;
        background-color: #F2B64C;
        padding:10px 20px;
        margin-left: 20px;
        font-size: 13px;
        cursor: pointer;
    }
`

export const UserInfoProfileImage = styled.div`
    background-color: #888;
    width: 50px;
    height:50px;
    border-radius: 50%;
    position: relative;
    overflow: hidden;
    margin:30px auto;
    & > img{
        width:80%;
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
    }
`



export default function UserUpdate(props:any) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmitUserUpdate = () =>{
        console.log("유저 정보 수정")
    }
    return (
        <UserUpdateContainer>
            <h2>회원 정보 수정</h2>
            <h3>{'변경하고 싶은 부분을 설정하고 "회원 정보 수정하기" 를 눌러주세요'}</h3>
            <form onSubmit={
                handleSubmit && 
                onSubmitUserUpdate && 
                handleSubmit(onSubmitUserUpdate)
            }>  
                <div>
                    <UserProfileUpdate>
                        {
                            props?.userDataProfile ? props?.userDataProfile :
                            <UserInfoProfileImage>
                                    {
                                        props?.userData?.picture ? props?.userData?.picture :
                                        <img className="none__user__picture" src="../img/header/user.png" alt="유저 이미지 없음"/>
                                    }
                            </UserInfoProfileImage>
                        }
                        <label htmlFor="profile">🖋  프로필 이미지 수정</label>
                    </UserProfileUpdate>
                    <input id="profile" type="file" />
                </div>
                <InputBox>
                    <AuthInput 
                        errorStatus={errors.password}
                        autoComplete='off' 
                        type="password" 
                        placeholder={errors.password ? "🚫  한 글자 이상 입력해주세요." : "비밀번호 변경하기"} 
                        {...register("password",{ required: true })} 
                    />
                </InputBox>
                <InputBox> 
                    <AuthInput 
                        errorStatus={errors.nickName}
                        autoComplete='off' 
                        type="text" 
                        placeholder={errors.nickName ? "🚫  한 글자 이상 입력해주세요." : "닉네임 변경하기"} 
                        {...register("nickName",{ required: true })} 
                    />
                </InputBox>
                <UserInfoButton>회원 정보 수정하기</UserInfoButton>
            </form>
        </UserUpdateContainer>
    );
}
