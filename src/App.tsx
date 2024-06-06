import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";

import './styles/App.scss'
import { StoreContextProvider } from "./contexts/StoreContext";

function App() {

  return (
    <BrowserRouter>
        <StoreContextProvider>
          <Header />
          <Container className='min-vh-100'>
            <Router />
          </Container>
          <Footer />
        </StoreContextProvider>
    </BrowserRouter>
  )
}

export default App
