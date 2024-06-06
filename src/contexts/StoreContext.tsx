import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Category, Store } from '../shared/types/types';
import { getStore } from '../shared/api/api';
import { getSubdomain } from '../utils/getSubdomain';

interface StoreContextType {
  store: Store | null,
  categories: Category[],
  searchTerm: string,
  updateSearchTerm: (term: string) => void
}

interface ContextProviderProps {
    children: ReactNode;
  }

const StoreContext = createContext({} as StoreContextType);

export const useStoreContext = () => {
    const context = useContext(StoreContext);
    if (!context) {
      throw new Error('useStoreContext must be used within a StoreProvider');
    }
    return context;
  };

export function StoreContextProvider ({ children }: ContextProviderProps) {
  const [store, setStore] = useState<Store | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const storeDomain = getSubdomain();
    getStore(storeDomain)
      .then((storeData: Store) => {
        setStore(storeData);
        setCategories(storeData.categories);
      })
      .catch((error) => {
        console.error('Erro ao buscar a loja:', error);
      });
  }, []);

  const updateSearchTerm = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <StoreContext.Provider value={{store, categories, searchTerm, updateSearchTerm}}>
      {children}
    </StoreContext.Provider>
  );
};
