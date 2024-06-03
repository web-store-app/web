import axios from "axios";
import { Category, Product, Store } from "../types/types";

const apiUrl: string = import.meta.env.VITE_API_URL;

const httpClient = axios.create({
    baseURL: apiUrl,
    headers: {
        'Content-Type': 'application/json'
    }
})

export const getProducts = async () : Promise<Product[]> => {
    try
    {
        const res = await httpClient.get<Product[]>('product')
        return res.data
    }
    catch(err)
    {
        console.log('Error fetching data:', err)
        throw err;
    }
}

export const getProductByCategoryId = async (categoryId:number) : Promise<Product[]> => {
    try
    {
        const res = await httpClient.get<Product[]>(`product/${categoryId}`)
        return res.data
    }
    catch(err)
    {
        console.log('Error fetching data:', err)
        throw err;
    }
}

export const getStore = async (subdomain: string | null) : Promise<Store> => {
    try
    {
        if(subdomain == null){
            return {} as Store;
        }
        const res = await httpClient.get<Store>(`store?subdomain=${subdomain}`)
        return res.data
    }
    catch(err)
    {
        console.log('Error fetching data:', err)
        throw err;
    }
}

export const getCategories= async (storeId: number) : Promise<Category[]> => {
    try
    {
        const res = await httpClient.get<Category[]>(`category?storeId='${storeId}'`)
        return res.data
    }
    catch(err)
    {
        console.log('Error fetching data:', err)
        throw err;
    }
}