import styled from "@emotion/styled";

export const DeleteButtonWrapper=styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: lightgray;
    font-size: 1.5rem;
    text-align: center;
    :hover{
        background-color: skyblue;
    }
    .DeleteModal{
        position: relative;
        top: 30%;
        left: 55%;
        border-radius: 8px;
        
        .DeleteButton{
            width: 95px;
            height: 25px;
            padding: 5px;
            border-radius: 8px;
            background-color: gray;
            :hover{
                background-color: skyblue;
            }
        }   
    }
`
