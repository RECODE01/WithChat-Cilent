import styled from "@emotion/styled";

export const Background=styled.div`
    position: fixed;
  top:0; left: 0; bottom: 0; right: 0;
  background: rgba(0, 0, 0, 0.8);
`

export const Wrapper=styled.div`
    width: 400px;
    height: 250px;
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
    align-items: flex-start;
    p{
        font-size: 1.125rem;
        margin-bottom: 5px;
    }
    .Title{
        font-size: 1.5rem;
        font-weight: 700;
    }
    .InputWrapper{
        width: 100%;
        .InputTag{
            width: 100%;
            height: 30px;
            border-radius: 10px;
            padding-left: 5px;
            background-color: lightgray;
        }
    }
    .ButtonWrapper{
        width: auto;
        height: 30px;
        
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        margin: 0 auto;
        .Button{
            width: 100%;
            height: 100%;
            border-radius: 8px;
            margin: 5px;
            padding: 5px;
            background-color: lightgray;
            :hover{
                background-color: skyblue;
            }
        }
    }
`