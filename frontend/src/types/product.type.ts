import type { IUser } from "./user.type";

export interface IProduct {
    id: string
    seller: IUser;
    name: string;
    description: string;
    price: number;
}