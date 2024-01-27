import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Room from "./pages/Room";
import Home from "./pages/Home";
import RoomBooking from "./pages/RoomBooking";
import Admin from "./pages/Admin";
import ContactUs from "./pages/ContactUs";
import AboutPage from "./pages/AboutPage";
import Restaurent from "./pages/Restaurent";
import Foodorder from "./pages/Foodorder";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="room" element={<Room />}></Route>
        <Route path="roombooking" element={<RoomBooking />}></Route>
        <Route path="admin" element={<Admin/>}></Route>
        <Route path="contact" element={<ContactUs/>}></Route>
        <Route path="about" element={<AboutPage/>}></Route>
        <Route path="restauarant" element={<Restaurent/>}></Route>
        <Route path="foodorder" element={<Foodorder/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
