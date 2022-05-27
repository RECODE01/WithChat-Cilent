import styled from "@emotion/styled";
import PersonIcon from '@mui/icons-material/Person';

export const MenuWrapper=styled.div`
    width: 400px;
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin: 0 auto;
    .UserInfo{
        width: 60px;
        height: 60px;
        text-align: left;
        object-fit: cover;
        border-radius: 50%;
        border: 1px solid gray;
    }
    .ButtonWrapper{
        width: 100%;
        display: flex;
        flex-direction: row;
        .MenuButton{
            width: 100%;
            height: 30px;
            border: 1px solid gray;
            padding-left: 10px;
            text-align: left;
        }
    }
`
export const DefaultUserImg=styled(PersonIcon)`
    width: 100%;
    text-align: center;
    margin: 0 auto;
`