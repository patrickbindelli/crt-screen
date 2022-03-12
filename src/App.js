import "./App.css";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar
        options={[
          {option:"Home", href: "/"},
          {option:"Sobre", href: "/top"},
          {option:"Github", href: "https://github.com/patrickbindelli/crt-screen"},
        ]}
      />
      <div className="container">
        <div className="about">
          <div className="typing">{"</Wake up, Neo>"}</div>
        </div>
        <textarea className="terminal"/>
      </div>
    </>
  );
}

export default App;
