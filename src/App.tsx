import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";

import { StoreContextProvider } from "./contexts/StoreContext";
import { CartContextProvider } from "./contexts/CartContext";

import './styles/App.scss'

function App() {

  return (
    <BrowserRouter>
      <StoreContextProvider>
        <CartContextProvider>
          <Header />
          <Container className='min-vh-100'>
            <Router />
          </Container>
          <Footer />
        </CartContextProvider>
      </StoreContextProvider>
    </BrowserRouter>
  )
}

export default App
