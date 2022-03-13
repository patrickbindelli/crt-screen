import "./App.css";
import Navbar from "./Components/Navbar/Navbar";

import { Routes, Route, Link } from "react-router-dom";
import About from "./Pages/About";

function App() {
  return (
      <>
        <Navbar
            options={[
              {option:"Home", href: "/"},
              {option:"Sobre", href: "/sobre"},
              {option:"Github", href: "https://github.com/patrickbindelli/crt-screen"},
            ]}
        />
        <nav>
        </nav>
        <Routes>
          <Route path="/"/>
          <Route path="sobre" element={<About />} />
        </Routes>
      </>
  );
}

export default App;
