import { Button, Navbar } from "flowbite-react";
import "../css/navbar.css";
function Navigationbar() {
  return (
    <Navbar fluid className='navcom'>
            <Navbar.Brand  href="https://flowbite-react.com">
                <img src='/images/HotelLogo.png' className="navlogo mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
             </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="nav-col">
                <Navbar.Link href="/" className='names'>Home</Navbar.Link>
                <Navbar.Link href="room" className='names'>Rooms</Navbar.Link>
                <Navbar.Link href="Restaurant" className='names'>Restaurant</Navbar.Link>
                <Navbar.Link  href="Ratings" className='names'>Review</Navbar.Link>
                <Navbar.Link href="Aboutus" className='names'>Aboutus</Navbar.Link>
                <Navbar.Link href="signin"><Button className='log_sign-btn'>Login</Button></Navbar.Link>
                <Navbar.Link href="signin"><Button className='log_sign-btn'>Signup</Button></Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
  );
}

export default Navigationbar;
