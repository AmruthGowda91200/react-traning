import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs.js";
import Contact from "./Pages/Contact.js";
import Reg from "./Pages/Reg.js";
import Log from "./Pages/Log.js";
import CardsPage from "./Pages/CardsPage.js";
import Navbar from "./Compontents/Navbar.js";
import App1 from "./Pages/App1.js";
import ProductDetail from "./Pages/ProductDetail.js"; 

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/reg" element={<Reg />} />
          <Route path="/log" element={<Log />} />
          <Route path="/card" element={<CardsPage />} />
          <Route path="/" element={<App1 />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
