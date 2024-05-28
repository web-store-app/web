import { BrowserRouter  } from "react-router-dom";
import Router from "./Router";
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";

function App() {

  return (
    <BrowserRouter>
        <Header />
        <Container>
          <Router />
        </Container>
        <Footer />
    </BrowserRouter>
  )
}

export default App
