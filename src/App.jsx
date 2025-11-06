import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";
// import { useEffect } from "react";

const AppContent = () => {
  const location = useLocation();

  // check if current path is home ("/")
  const isHomePage = location.pathname === "/";

  return (
    <>
      {/* ✅ Navbar sirf tab dikhana jab home page na ho */}
      {!isHomePage && <Navbar />}

      {/* ✅ Page container (padding-top only if Navbar shown) */}
      <div className={isHomePage ? "" : "pt-[80px]"}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          {/* aur bhi routes */}
        </Routes>
      </div>
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
