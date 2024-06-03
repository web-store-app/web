export interface Product {
    id: number,
    CategoryId: number,
    name: string,
    quantityAvailable: number | null,
    price: number,
    description: string,
    image: string
}

export interface Category {
  id: number;
  name: string;
  products: Product[];
}

export interface Store {
  id: number;
  name: string;
  logo: string;
  subdomain: string;
 // categories: Category[];
}