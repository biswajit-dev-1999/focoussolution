// import React from "react";
// import Home from "./pages/Home";
// import "./App.css";

// function App() {
//   return <Home />;
// }

// export default App;

import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";
import FocusSolutions from "./pages/FocusSolutions";
import BoardOfTrustees from "./pages/BoardOfTrustees";
import Privacy from "./pages/Privacy";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import Gallery from "./pages/Gallery";
import Testimonials from "./pages/Testimonials";

const ScrollToTop = () => {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/focus-solutions" element={<FocusSolutions />} />
        <Route path="/board-of-trustees" element={<BoardOfTrustees />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
