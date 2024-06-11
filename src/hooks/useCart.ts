import { useCartContext } from '../contexts/CartContext';

const useCart = () => {
  const { cartItems, cartQuantity, cartItemsTotal, addProductToCart, changeCartItemQuantity, removeCartItem, cleanCart } = useCartContext();
  
  return { 
    cartItems, 
    cartQuantity, 
    cartItemsTotal, 
    addProductToCart, 
    changeCartItemQuantity, 
    removeCartItem, 
    cleanCart 
  };
};

export default useCart;
