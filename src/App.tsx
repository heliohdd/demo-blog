import "./App.css";

import { BrowserRouter, Routes, Route} from "react-router-dom";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Navbar from "./pages/components/Navbar";
import Footer from "./pages/components/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home /> } />
            <Route path="/about" element={<About /> } />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
