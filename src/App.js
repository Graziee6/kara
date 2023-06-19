import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Login from "./pages/Login/Login";
import CarOwnerRegister from "./pages/CarOwnerRegister/CarOwnerRegister";
import LinkOwner from "./pages/LinkOwner/LinkOwner";
import RegisterCar from "./pages/RegisterCar/RegisterCar";
import GetInfo from "./pages/GetCars/GetInfo";
import AdminRegister from './pages/AdminRegister/AdminRegister';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<AdminRegister />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registerOwner" element={<CarOwnerRegister />} />
        <Route path="/link" element={<LinkOwner />} />
        <Route path="/registerCar" element={<RegisterCar />} />
        <Route path="/getInfo" element={<GetInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
