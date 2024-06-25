import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import Footer from "./components/Footer";

import { StoreContextProvider } from "./contexts/StoreContext";
import { CartContextProvider } from "./contexts/CartContext";

import './styles/App.scss'

function App() {

  return (
    <BrowserRouter>
      <StoreContextProvider>
        <CartContextProvider>
          <Router />
          <Footer />
        </CartContextProvider>
      </StoreContextProvider>
    </BrowserRouter>
  )
}

export default App
