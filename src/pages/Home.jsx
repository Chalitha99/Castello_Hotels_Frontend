import { Footer } from "flowbite-react";
import Navigationbar from "../components/Navigationbar";
import Footerbar from "../components/Footerbar";
import "../css/home.css";
import Home_Section from "../components/Home_Section";
import Service from "../components/Service";

function Home() {
    return (<>

        <Navigationbar></Navigationbar>
        
    
        <div className='head_div'>
            <h1 className='text-center text-white welcome'>Welcome to the Castello</h1>
            <h3></h3>
        </div>
        <Home_Section></Home_Section>
        <Service></Service>
        <Footerbar></Footerbar>
    
    </>  );
}

export default Home;