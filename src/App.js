import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Room from "./pages/Room";
import Home from "./pages/Home";
import RoomBooking from "./pages/RoomBooking";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="room" element={<Room />}></Route>
        <Route path="roombooking" element={<RoomBooking />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
