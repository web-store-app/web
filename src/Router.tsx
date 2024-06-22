import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home"
import Contact from "./pages/Contact";
import Offers from "./pages/Offers";
import CompleteOrder from "./pages/CompleteOrder";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { CompleteOrderLayout } from "./layouts/CompleteOrderLayout";
import CompletedOrder from "./pages/CompletedOrder";

export default function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />} >
        <Route path="/" element={<Home />} />
        <Route path="/ofertas" element={<Offers />} />
        <Route path="/fale-conosco" element={<Contact />} />
      </Route>

      <Route element={<CompleteOrderLayout />}>
        <Route path="/finalizar-pedido" element={<CompleteOrder />} />
        <Route path="/pedido-finalizado" element={<CompletedOrder />} />
      </Route>
    </Routes>
  );
}