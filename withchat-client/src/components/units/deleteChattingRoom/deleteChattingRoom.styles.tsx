import styled from "@emotion/styled";

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
`;

export const DeleteButtonWrapper=styled.div`
    width: 400px;
    height: 150px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
    background-color: #9e9d9d;
    border-radius: 20px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    p{
        font-size: 1.375rem;
        font-weight: 700;
    }
    .DeleteModal{
        border-radius: 8px;
        
    }
    .ButtonWrapper{
        width: 100%;
        margin: 0 auto;
        text-align: center;
        .DeleteButton{
            width: 100px;
            height: 35px;
            padding: 5px;

            border-radius: 8px;
            background-color: gray;
            :hover{
                background-color: red;
                color: white;
            }
        }
        .CancelButton{
            width: 100px;
            height: 35px;
            padding: 5px;
            margin-left: 10px;
            border-radius: 8px;
            background-color: gray;
            :hover{
                background-color: #9e9d9d;
            }
        }
    }
`
