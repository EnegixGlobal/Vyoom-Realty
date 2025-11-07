import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";
import { About } from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Service from "./components/OurService/Service";

const AppContent = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";


  const hideFooterRoutes = ["/"];
  const shouldShowFooter = !hideFooterRoutes.includes(location.pathname);

  return (
    <>
      {!isHomePage && <Navbar />}
      <div className={isHomePage ? "" : "pt-[80px]"}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
        </Routes>
      </div>

      
      {shouldShowFooter && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
