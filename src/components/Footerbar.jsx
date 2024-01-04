
import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import "../css/footer.css";
function Footerbar() {
  return (
    
      <footer className="bg-neutral-100 text-center dark:bg-neutral-600 lg:text-left footer-bg">
        <div className="container p-6 text-neutral-800 dark:text-neutral-200">
          <div className="grid gap-4 lg:grid-cols-3">

          <div className="mb-4 md:mb-0">
               <img src='/images/HotelLogo.png' className="navlogo mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
          </div>
            <div className="mb-4 md:mb-0">
              
                <ul className='text-center'> 
                  <li>
                    <a className="text-white">About us</a>
                  </li>
                  <li>
                    <a className="text-white">Reviews</a>
                  </li>
                  <li>
                    <a className="text-white">Restaurent</a>
                  </li>
                 
                </ul>
            
            </div>
    
            <div className="mb-4 md:mb-0">
              
              <ul className='text-center'> 
                  <li>
                    <a className="text-white">castello@gmail.com</a>
                  </li>
                  <li>
                    <a className="text-white">No 34,Badulla Road,Passara</a>
                  </li>
                  <li>
                    <a className="text-white">0702677466</a>
                  </li>
                 
                </ul>
              
            </div>

          </div>
        </div>
    
        {/* <!--Copyright section--> */}
        <div
          className="text-center text-white  copyright">
          © 2023 All Rights Reserved..!
        </div>
      </footer>
      );
    }
  


export default Footerbar;