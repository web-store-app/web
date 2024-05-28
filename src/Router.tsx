import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home"
import Contact from "./pages/Contact";
import Offers from "./pages/Offers";

export default function Router () {
    return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ofertas" element={<Offers />} />
          <Route path="/FaleConosco" element={<Contact />} />
        </Routes>
      );
}