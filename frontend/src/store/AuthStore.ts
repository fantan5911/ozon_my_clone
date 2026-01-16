import {create} from 'zustand';

interface Auth {
    jwt_token: any;
    set_token: (newToken: any) => void;

    login: string;
    password: string;

    setLogin: (newLogin: string) => void;
    setPassword: (newPassword: string) => void;
}

export const useAuth = create<Auth>(set => ({
    jwt_token: '',
    set_token: (newToken: any) => set({jwt_token: newToken}),

    login: '',
    password: '',

    setLogin: (newLogin: string) => set({login: newLogin}),
    setPassword: (newPassword: string) => set({password: newPassword})
}))