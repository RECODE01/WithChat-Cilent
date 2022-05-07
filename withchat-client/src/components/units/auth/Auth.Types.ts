export interface ILoginFormData{
    email?:string,
    name?:string,
    password?:string,
    nickName?:string
}

export interface ISignUpFormData{
    email?:string,
    name?:string,
    password?:string,
    nickName?:string
}

export interface IPropsAuthUI{
    isAuthComponents:string
    onClickAuthChange:(state:string) => () => void
}
