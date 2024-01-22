import logo from './logo.svg';
import './App.css';
import Navigationbar from './components/Navigationbar';
import Footerbar from './components/Footerbar';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
        <>
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home/>}></Route>
              {/* <Route path='/Restaurant' element={<Restaurant/>}></Route>
              <Route path='/Rooms' element={<Rooms/>}></Route>
              <Route path='/Reviews' element={<Reviews/>}></Route>
              <Route path='/Aboutus' element={<Aboutus/>}></Route> */}

              
          </Routes>
        </BrowserRouter>
         
        
        </>


  );
}

export default App;
