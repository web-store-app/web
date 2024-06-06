import { useEffect } from 'react';
import { useStoreContext } from '../contexts/StoreContext';

const useStore = () => {
  const { store, categories, searchTerm, updateSearchTerm } = useStoreContext();
  return {store, categories, searchTerm, updateSearchTerm};
};

export default useStore;
