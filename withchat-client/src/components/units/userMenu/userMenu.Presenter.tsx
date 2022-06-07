import Popover from "@mui/material/Popover";
import { useState } from "react";
// import Button from '@mui/material/Button';
import * as JH from "./userMenu.Styles";

export default function UserMenuUI(props: any) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  // const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
  //   setAnchorEl(event.currentTarget);
  // };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // const open = Boolean(anchorEl);
  // const id = open ? 'simple-popover' : undefined;
  return (
    <div>
      {/* <Button aria-describedby={id} variant="contained" onClick={handleClick}>
                🥇 고라니
            </Button> */}
      <Popover
        id={props.id}
        open={props.openUserInfo}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <JH.MenuWrapper>
          <div className="UserInfo">
            <img className="UserImg" src="/avatar.png" />
          </div>
          <div className="UserName">
            {props.name}
            <p>#{props.id}</p>
          </div>
          <div className="UserRole">Admin</div>
          <div className="ButtonWrapper">
            <button className="MenuButton" id="0">
              Admin
            </button>
            <button className="MenuButton" id="1">
              Sub Admin
            </button>
            <button className="MenuButton" id="2">
              User
            </button>
          </div>
        </JH.MenuWrapper>
      </Popover>
    </div>
  );
}
