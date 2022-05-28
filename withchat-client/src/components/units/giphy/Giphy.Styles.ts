import styled from "@emotion/styled";
import SearchIcon from "@mui/icons-material/Search";

export const GiphyWrapper = styled.div`
  width: 350px;
  height: 50vh;

  z-index: 999999;
  position: absolute;
  top: 0;
  /* bottom: 73px; */

  right: 0;
  max-height: 600px;
  padding: 15px;
  background-color: gray;
  overflow: scroll;
  border-radius: 12px;
`;

export const GiphySearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  border-bottom: 1px solid gray;
  margin: 5px;
  background-color: white;

  .SearchInput {
    width: 100%;
    height: auto;
    border-radius: 10px;
    padding-left: 10px;
  }
  .SearchButton {
    width: auto;
    height: 100%;
    border-radius: 10px;
    align-items: center;
    cursor: pointer;
    color: gray;
    :hover {
      color: #c4c1c0;
    }
  }
`;
export const SearchedIcon = styled(SearchIcon)`
  font-size: 1.5rem;
`;
