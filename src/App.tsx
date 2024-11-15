import "./App.css";

import { BrowserRouter, Routes, Route} from "react-router-dom";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/demo-blog" element={<Home /> } />
            <Route path="/demo-blog/about" element={<About /> } />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
