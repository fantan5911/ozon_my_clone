import type { ChangeEvent, FC } from "react";
import { useAuth } from "../store/AuthStore";
import { LoginFn } from "../Services/Auth.service";
import { useForm } from "react-hook-form";
import type { IUser } from "../types/user.type";

const Login: FC = () => {
    const login = useAuth(state => state.login);
    const password = useAuth(state => state.password);

    const setLogin = useAuth(state => state.setLogin);
    const setPassword = useAuth(state => state.setPassword);

    const {register, handleSubmit} = useForm<IUser>();

    const onSubmit = (data: any) => {
        console.log(data);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                {...register('login', {
                    required: 'Заполните это поле'
                })}
                type="text" 
                placeholder="Введите логин"
                required
                value={login}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setLogin(e.target.value)}
                />
                <input
                {...register('password', {
                    required: 'Заполните это поле'
                })}
                type="text" 
                placeholder="Введите пароль"
                required
                value={password}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                />
                <button type="submit" onClick={() => LoginFn(login, password)}>Вход</button>
            </form>
        </div>
    );
};

export default Login;