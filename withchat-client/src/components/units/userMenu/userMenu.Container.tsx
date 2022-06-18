import UserMenuUI from "./userMenu.Presenter";
import { IPropsUserMenu } from "./userMenu.Types";

export default function UserMenu(props: IPropsUserMenu) {
  return (
    <UserMenuUI
      openUserInfo={props.openUserInfo}
      name={props.name}
      id={props.id}
    />
  );
}
