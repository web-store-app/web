import axios from "axios";
import { Product } from "../types/types";

const apiUrl: string = import.meta.env.BASE_URL;

const httpClient = axios.create({
    baseURL: apiUrl,
    headers: {
        'Content-Type': 'application/json'
    }
})

export const getProducts = async () : Promise<Product[] | null> => {
    try
    {
        const res = await httpClient.get<Product[]>('products')
        return res.data
    }
    catch(err)
    {
        console.log('Error fetching data:', err)
        throw err;
    }
}