import type { IProduct } from "./product.type";

export interface IUser {
    login: string;
    password: string;
    products: IProduct[];
}