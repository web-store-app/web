import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Store } from '../shared/types/types';
import { getStore } from '../shared/api/api';
import { getSubdomain } from '../utils/getSubdomain';

interface StoreContextType {
  store: Store | null
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

  useEffect(() => {
    const storeDomain = getSubdomain();
    getStore(storeDomain)
      .then((storeData: Store) => {
        setStore(storeData);
      })
      .catch((error) => {
        console.error('Erro ao buscar a loja:', error);
      });
  }, []);

  return (
    <StoreContext.Provider value={{store}}>
      {children}
    </StoreContext.Provider>
  );
};
