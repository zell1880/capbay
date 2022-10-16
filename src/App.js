import "./App.css";
import NavBar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./pages/Menu";
import { useState } from "react";

function App() {
  return (
    <div>
      <NavBar />
      <Menu addtoCart={addtoCart} />
    </div>
  );
}

export default App;
