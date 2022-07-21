import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="h-screen dark:bg-darkColor transition-all">
        <Nav />
        <Routes>
          <Route>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/Contact" element={<Contact />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
