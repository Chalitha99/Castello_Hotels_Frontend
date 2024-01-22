import React from "react";
import { Card } from "flowbite-react";
import Model from "../components/Model";
import "../css/rooms.css";
import Navigationbar from "../components/Navigationbar";
import bg from "../images/room/bg.avif";
import suoerior from "../images/room/suoerior.jpg";
import suit from "../images/room/suit.jpg";
import classic from "../images/room/classic.jpg";
import delux from "../images/room/delux.jpg";
import family from "../images/room/family.webp";
import luxury from "../images/room/luxury.jpg";
import Footerbar from "../components/Footerbar"

console.log(suoerior, bg, suit, classic, family, delux, luxury);

export default function Room() {
  return (
    <div>
      <Navigationbar />
      <header>
        <div className="overlay">
          <h1 className="maintitle">Our Rooms</h1>
          <span className="par">
            Reserve your haven of comfort and style with our exquisite rooms.{" "}
          </span>
        </div>
      </header>
      <div className="card">
        <Card className="mycard max-w-sm" imgSrc={suit}>
          <h5 className="roomname">Suite Room</h5>
          <p>
            <h3 className="price">Rs. 8000.00</h3>
            <span>
              <u>per night</u>
            </span>
          </p>
          <Model
            topic="Siute Room"
            parone="Experience the perfect blend of comfort and scenery in our Sea View Suite. 
            With a spacious 45m² layout accommodating up to three persons, 
            this intimate retreat features a queen-size bed and modern furnishings. 
            Wake up to panoramic views of the sea, ensuring a tranquil and unforgettable stay. 
            Book now for a coastal escape that combines luxury with the beauty of nature."
          />
        </Card>
        <Card className="mycard max-w-sm" imgSrc={family}>
          <h5 className="roomname">Family Room</h5>
          <p>
            <h3 className="price">Rs. 5000.00</h3>
            <span>
              <u>per night</u>
            </span>
          </p>
          <Model
            topic="Family Room"
            parone="Welcome to our Family Room – a spacious 45m² haven for up to three persons. 
            Unwind in the embrace of a queen-size bed, creating lasting memories in a cozy atmosphere. 
            With ample space for shared moments and thoughtful design, our Family Room promises a perfect 
            blend of comfort and intimacy for your family getaway."
          />
        </Card>
        <Card className="mycard max-w-sm" imgSrc={delux}>
          <h5 className="roomname">Delux Rooms</h5>
          <p>
            <h3 className="price">Rs. 15000.00</h3>
            <span>
              <u>per night</u>
            </span>
          </p>
          <Model
            topic="Delux Room"
            parone="Indulge in the epitome of luxury with our Deluxe Room – a spacious 45m² haven 
            that accommodates up to 5 persons. Immerse yourself in the serene beauty of a sea view, 
            creating a picturesque backdrop for your stay. Enjoy the comfort of two plush beds, ensuring a 
            restful night's sleep. Elevate your experience with our Deluxe Room, where modern luxury meets 
            breathtaking vistas."
          />
        </Card>
      </div>
      <div className="card">
        <Card className="mycard max-w-sm" imgSrc={classic}>
          <h5 className="roomname">Classic Room</h5>
          <p>
            <h3 className="price">Rs. 10000.00</h3>
            <span>
              <u>per night</u>
            </span>
          </p>
          <Model
            topic="Classic Room"
            parone="Step into timeless comfort with our Classic Room - a charming 
            space designed for up to 5 persons. Enjoy the soothing embrace of a sea view from this 45m² retreat. 
            With two cozy beds, this room offers the perfect blend of classic elegance and modern convenience. 
            Make memories against the backdrop of breathtaking sea vistas in our Classic Room."
          />
        </Card>
        <Card className="mycard max-w-sm" imgSrc={suoerior}>
          <h5 className="roomname">Superior Room</h5>
          <p>
            <h3 className="price">Rs. 25000.00</h3>
            <span>
              <u>per night</u>
            </span>
          </p>
          <Model
            topic="Superior Room"
            parone="Experience unparalleled comfort in our Superior Room - a spacious 45m² retreat for up to 6 
            persons. Immerse yourself in breathtaking sea views, creating the perfect backdrop for relaxation. 
            With three comfortable beds, this room seamlessly combines style and functionality. Elevate your stay 
            with superior comfort and scenic vistas in our Superior Room."
          />
        </Card>
        <Card className="mycard max-w-sm" imgSrc={luxury}>
          <h5 className="roomname">Luxury Room</h5>
          <p>
            <h3 className="price">Rs. 35000.00</h3>
            <span>
              <u>per night</u>
            </span>
          </p>
          <Model
            topic="Luxury Room"
            parone="Step into opulence with our Luxury Room – a grand 45m² retreat designed for up to 5 persons. 
            Immerse yourself in the enchanting sea view that serves as the backdrop to your luxurious stay. 
            Revel in the comfort of three elegant beds, seamlessly blending style and functionality. 
            Indulge in the epitome of hospitality in our Luxury Room, where every moment is a celebration of refined
             living."
          />
        </Card>
      </div>
      <br></br>
      <br></br>
      <Footerbar/>
    </div>
  );
}
