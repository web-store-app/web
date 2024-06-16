import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home"
import Contact from "./pages/Contact";
import Offers from "./pages/Offers";
import CompleteOrder from "./pages/CompleteOrder";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { CompleteOrderLayout } from "./layouts/CompleteOrderLayout";
import FinishOrder from "./pages/FinishOrder";

export default function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />} >
        <Route path="/" element={<Home />} />
        <Route path="/ofertas" element={<Offers />} />
        <Route path="/fale-conosco" element={<Contact />} />
      </Route>

      <Route element={<CompleteOrderLayout />}>
        <Route path="/complete-order" element={<CompleteOrder />} />
        <Route path="/finish-order" element={<FinishOrder />} />
      </Route>
    </Routes>
  );
}