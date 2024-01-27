import React from "react";
import '../css/about.css';
import Aimg1 from "../images/about/Aimg1.jpg";
import Aimg0 from "../images/about/Aimg0.jpg";
import Aimg00 from "../images/about/Aimg00.jpg";
import Aimg000 from "../images/about/Aimg000.jpg";
import Aimg0000 from "../images/about/Aimg0000.jpg";
import Aimgi01 from "../images/about/Aimgi01.png";
import Aimgi02 from "../images/about/Aimgi02.png";
import Aimgi03 from "../images/about/Aimgi03.png";
import Aimgi04 from "../images/about/Aimgi04.png";
import Navigationbar from "../components/Navigationbar";
import Footerbar from "../components/Footerbar";


function AboutPage() {
  return (
    <div>
        <Navigationbar/>
    <div className="about_upper" style={{ backgroundImage:`url(${Aimg1})` }}>
    <section className="about_upper"> 
      <div className="about_content"> 
        <h1>ABOUT US</h1>
      </div>
     </section> 
 </div>

 <div className="about_achievements">
    <div className="about_work">
      <img src={Aimgi01} className="about_fas"/>
      <p className="about_work-heading">Restaurant Bar</p>
      <p className="about_work-text">"Savor the exquisite flavors and hygienic foods at our restaurant, where culinary excellence takes center stage, while our bar offers a diverse selection of premium liquors, ensuring a delightful."</p>
    </div>
    <div className="about_work">
      <img src={Aimgi02} className="about_fas"/>
      <p className="about_work-heading">Swimming pool</p>
      <p className="about_work-text">"Discover round-the-clock serenity with our 24-hour open natural beauty swimming pool, complemented by the added luxury of separate pools dedicated to each room, with an super experience."</p>
    </div>
    <div className="about_work">
      <img src={Aimgi03} className="about_fas"/>
      <p className="about_work-heading">Transport</p>
      <p className="about_work-text">
"Enjoy seamless convenience with our complimentary transfer service, ensuring all guests and their belongings are effortlessly transported to our cabanas for an indulgent and hassle-free retreat."</p>
    </div>
  <div className="about_work">
      <img src={Aimgi04} className="about_fas"/>
      <p className="about_work-heading">Service</p>
      <p className="about_work-text">"Experience unparalleled hospitality and unwavering service excellence at our hotel, where our dedicated team is committed to ensuring your comfort and satisfaction 24 hours a day."</p>
    </div>
  </div>


 <div className="about_container">
  <div className="about_box">
    <img src={Aimg0} className="about_box"/>
    <span>Bed Rooms</span>
  </div>
  <div className="about_box">
  <img src={Aimg000} className="about_box"/>
    <span>Swimming Pool</span>
  </div>
  <div className="about_box">
  <img src={Aimg0000} className="about_box"/>
    <span>Restaurant</span>
  </div>
  <div className="about_box">
  <img src={Aimg00} className="about_box"/>
    <span>Restaurant Bar</span>
  </div>
</div>



<Footerbar/>
 
    </div>
    );
}
export default AboutPage;
