import type { ChangeEvent, FC } from "react";
import { useAuth } from "../store/AuthStore";
import { RegisterFn } from "../Services/Auth.service";
<<<<<<< HEAD

=======
>>>>>>> b38ee19ecaa7064023d53cffd21f3bb9a2c771b6

const Login: FC = () => {
    const login = useAuth(state => state.login);
    const password = useAuth(state => state.password);

    const setLogin = useAuth(state => state.setLogin);
    const setPassword = useAuth(state => state.setPassword);

    return (
        <div>
            <input
             type="text" 
             placeholder="Введите логин"
             required
             value={login}
             onChange={(e: ChangeEvent<HTMLInputElement>) => setLogin(e.target.value)}
            />
            <input
             type="text" 
             placeholder="Введите пароль"
             required
             value={password}
             onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            />
            <button onClick={() => RegisterFn(login, password)}>Регистрация</button>
        </div>
    );
};

export default Login;