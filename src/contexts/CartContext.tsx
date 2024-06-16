import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { produce } from "immer";
import { Product } from "../shared/types/types";
import useStore from "../hooks/useStore";

export interface CartItem extends Product {
  quantity: number;
  observation?: string;
}

interface CartContextType {
  cartItems: CartItem[];
  cartQuantity: number;
  cartItemsTotal: number;
  addProductToCart: (product: CartItem) => void;
  changeCartItemQuantity: (
    cartItemId: number,
    type: "increase" | "decrease"
  ) => void;
  removeCartItem: (cartItemId: number) => void;
  cleanCart: () => void;
  updateObservation: (cartItemId: number, observation: string) => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCartContext must be used within a CartContextProvider');
  }
  return context;
};

const CART_ITEMS_STORAGE_KEY = "delivery:cartItems";

export function CartContextProvider({ children }: CartContextProviderProps) {
  const { store } = useStore();
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = localStorage.getItem(CART_ITEMS_STORAGE_KEY);
    if (storedCartItems) {
      return JSON.parse(storedCartItems);
    }
    return [];
  });

  const cartQuantity = cartItems.length;

  const cartItemsTotal = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity;
  }, 0);

  function addProductToCart(product: CartItem) {
    const productAlreadyExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === product.id
    );

    const newCart = produce(cartItems, (draft) => {
      if (productAlreadyExistsInCart < 0) {
        draft.push(product);
      } else {
        draft[productAlreadyExistsInCart].quantity += product.quantity;
      }
    });

    setCartItems(newCart);
  }

  function changeCartItemQuantity(
    cartItemId: number,
    type: "increase" | "decrease"
  ) {
    const newCart = produce(cartItems, (draft) => {
      const productExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId
      );

      if (productExistsInCart >= 0) {
        const item = draft[productExistsInCart];
        draft[productExistsInCart].quantity =
          type === "increase" ? item.quantity + 1 : item.quantity - 1;

        // Remove o item se a quantidade for zero
        if (draft[productExistsInCart].quantity === 0) {
          draft.splice(productExistsInCart, 1);
        }
      }
    });

    setCartItems(newCart);
  }

  function removeCartItem(cartItemId: number) {
    const newCart = produce(cartItems, (draft) => {
      const productExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId
      );

      if (productExistsInCart >= 0) {
        draft.splice(productExistsInCart, 1);
      }
    });

    setCartItems(newCart);
  }

  function cleanCart() {
    setCartItems([]);
  }

  function updateObservation(cartItemId: number, observation: string) {
    const newCart = produce(cartItems, (draft) => {
      const productExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId
      );

      if (productExistsInCart >= 0) {
        draft[productExistsInCart].observation = observation;
      }
    });

    setCartItems(newCart);
  }

  useEffect(() => {
    localStorage.setItem(CART_ITEMS_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addProductToCart,
        cartQuantity,
        changeCartItemQuantity,
        removeCartItem,
        cartItemsTotal,
        cleanCart,
        updateObservation
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
