import styled from "@emotion/styled";

export const DeleteButtonWrapper=styled.div`
    position: absolute;
    overflow: visible;
    top: -10%;
    left: -10%;
    z-index: 99999;
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
