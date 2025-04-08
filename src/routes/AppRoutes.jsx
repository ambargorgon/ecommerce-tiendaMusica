import { Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Header from "../components/Header";
import Footer from "../components/Footer"
const AppRoutes = () => {
  return (
    <div    className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* <Route path="/menu" element={<Menu />} /> */}
      </Routes>
      <Footer />
    </div>
  );
};

export default AppRoutes;
