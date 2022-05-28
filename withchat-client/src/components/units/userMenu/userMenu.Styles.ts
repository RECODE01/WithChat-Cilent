import styled from "@emotion/styled";

export const MenuWrapper=styled.div`
    width: 400px;
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin: 0 auto;
    background-color: #787474;
    .UserInfo{
        width: 80px;
        height: 80px;
        text-align: left;
        object-fit: cover;
        border-radius: 50%;
        border: 1px solid gray;
        .UserImg{
            width: 100%;
            text-align: center;
            margin: 0 auto;
            border-radius: 50%;
        }
    }
    .UserName{
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        height: auto;
        margin: 10px 0;
        font-size: 1.5rem;
        font-weight: 700;
        p{
            font-size: 1.25rem;
            padding-left: 5px;
            color: #c7c3c3;
        }
    }
    .UserRole{
        width: 100%;
        height: auto;
        margin-bottom: 10px;
    }
    .ButtonWrapper{
        width: 100%;
        display: flex;
        flex-direction: row;
        .MenuButton{
            width: 100%;
            height: 30px;
            border: 1px solid gray;
            border-radius: 10px;
            padding-left: 10px;
            margin: 0 5px;
            text-align: left;
            background-color: #c7c3c3;
            :hover{
                background-color: skyblue;
            }
        }
    }
`