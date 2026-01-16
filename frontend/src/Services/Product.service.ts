import axios, { type AxiosResponse } from "axios"
import type { IProduct } from "../types/product.type"


export const getProducts = async () => {
    return await axios.get<IProduct[]>("http://localhost:4200/api/products", {
        headers: {
            'Authorization': `Bearer `
        }
    });
}

export const createProduct = async (product: Omit<IProduct, 'id'>): Promise<AxiosResponse> => {
    return await axios.post<IProduct>("http://localhost:4200/api/products/create", {
        seller: product.seller,
        name: product.name,
        description: product.description,
        price: product.price
    }, {
        headers: {
            'Authorization': `Bearer `
        }
    })
}