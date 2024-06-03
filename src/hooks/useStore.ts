import { useEffect } from 'react';
import { useStoreContext } from '../contexts/StoreContext';

const useStore = () => {
  const { store } = useStoreContext();
  return {store};
};

export default useStore;
