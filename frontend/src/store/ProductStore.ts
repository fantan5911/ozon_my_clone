import {create} from 'zustand';
import type { IProduct } from '../types/product.type';
import type { IUser } from '../types/user.type';

interface Product {
    id: string;
    seller: IUser;
    name: string;
    description: string;
    price: number;

    products: IProduct[];
    setProducts: (products: IProduct[]) => void;

    setSeller: (newSeller: IUser) => void;
    setName: (newName: string) => void;
    setDescription: (newDescription: string) => void;
    setPrice: (newPrice: number) => void;
}

export const useProduct = create<Product>(set => ({
    id: '',

    seller: {
        login: '',
        password: '',
        products: []
    },
    name: '',
    description: '',
    price: 0,

    products: [],
    setProducts: (products: IProduct[]) => set({products: products}),

    setSeller: (newSeller: IUser) => set({seller: newSeller}),
    setName: (newName: string) => set({name: newName}),
    setDescription: (newDescription: string) => set({description: newDescription}),
    setPrice: (newPrice: number) => set({price: newPrice}),
}))