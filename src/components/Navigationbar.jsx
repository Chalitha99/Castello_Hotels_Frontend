import React from 'react'
import '../css/navbar.css'
import logotrans from '../images/hotel.png'
import {Button, Navbar } from 'flowbite-react';

function Navigationbar() {
  return (
    <Navbar fluid rounded className='navcom'>
            <Navbar.Brand  href="https://flowbite-react.com">
                <img src={logotrans} className="navlogo mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse >
                <Navbar.Link href="/" className='names'>
                    Home
                </Navbar.Link>
                
                <Navbar.Link href="services" className='names'>Services</Navbar.Link>
                <Navbar.Link href="portfolio" className='names'>Portfolio</Navbar.Link>
                <Navbar.Link  href="aboutus" className='names'>About</Navbar.Link>
                <Navbar.Link href="contact" className='names'>Contact</Navbar.Link>
                <Navbar.Link href="signin"><Button>Login</Button></Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
  )
}

export default Navigationbar;