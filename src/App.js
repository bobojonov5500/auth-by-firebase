import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Register from "./components/register";
import Login from "./components/login";
import Navbar from "./components/navbar";
import Home from "./components/home";

function App() {
  const routes = ["/register", "/login"];
  const location = useLocation();
  const showNavbar = routes.includes(location.pathname);
  return (
    <div className="App">
      {!showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={"/register"} element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
