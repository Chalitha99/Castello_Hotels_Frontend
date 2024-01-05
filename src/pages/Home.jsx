import { Footer } from "flowbite-react";
import Navigationbar from "../components/Navigationbar";
import Footerbar from "../components/Footerbar";
import "../css/home.css";

function Home() {
    return (<>

        <Navigationbar></Navigationbar>
        
    
        <div className='head_div'>
            <h1 className='text-center text-white welcome'>Welcome to the Castello</h1>
            <h3></h3>
        </div>

        <Footerbar></Footerbar>
    
    </>  );
}

export default Home;
