import LoginUI from './Login.Presenter';
import { useForm } from "react-hook-form";
import { ILoginFormData } from './Login.Types';

export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data : ILoginFormData) => {
        if(data.email && data.password){
            console.log(data)
        }
    };
    return (
        <LoginUI 
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            onSubmit={onSubmit}
        />
    )
}
