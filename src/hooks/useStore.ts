import { useEffect } from 'react';
import { useStoreContext } from '../contexts/StoreContext';

const useStore = () => {
  const { store, categories } = useStoreContext();
  return {store, categories};
};

export default useStore;
