import { useCartContext } from '../contexts/CartContext';

const useCart = () => {
  const { cartItems, cartQuantity, cartItemsTotal, addProductToCart, changeCartItemQuantity, removeCartItem, cleanCart,updateObservation } = useCartContext();
  
  return { 
    cartItems, 
    cartQuantity, 
    cartItemsTotal, 
    addProductToCart, 
    changeCartItemQuantity, 
    removeCartItem, 
    cleanCart,
    updateObservation 
  };
};

export default useCart;
