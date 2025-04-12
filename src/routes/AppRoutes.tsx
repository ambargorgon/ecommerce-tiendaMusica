import { Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Header from "../components/Header";
import Footer from "../components/Footer"
import Detalle from "../pages/Detalle";

const AppRoutes: React.FC = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/detalle/:id" element={<Detalle />} /> 
      </Routes>
      <Footer />
    </div>
  );
};

export default AppRoutes;
