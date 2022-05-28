import UserMenuUI from "./userMenu.Presenter";

export default function UserMenu(props: any){
    
    return <UserMenuUI 
    openUserInfo={props.openUserInfo}
    name={props.name}
    id={props.id}
    />
}