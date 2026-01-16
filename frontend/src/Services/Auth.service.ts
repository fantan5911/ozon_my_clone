import axios, { type AxiosResponse } from "axios"
import type { IUser } from "../types/user.type"
// import { useAuth } from "../store/AuthStore"
<<<<<<< HEAD

// const setToken = useAuth(state => state.set_token);
=======
>>>>>>> b38ee19ecaa7064023d53cffd21f3bb9a2c771b6

// const setToken = useAuth(state => state.set_token);

export const LoginFn = async (login: string, password: string): Promise<AxiosResponse> => {
    const response = await axios.post<IUser>("http://localhost:4200/api/users/login", {
        login: login,
        password: password
    })
    return response;
}


export const RegisterFn = async (login: string, password: string): Promise<AxiosResponse> => {
    return await axios.post<IUser>("http://localhost:4200/api/users/register", {
        login: login,
        password: password
    })
}
