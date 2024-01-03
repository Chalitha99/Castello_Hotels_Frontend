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

console.log(suoerior, bg,suit,classic,family,delux,luxury);

export default function Room() {
  return (
    <div>
      <Navigationbar />
      <header>
        <div className="overlay">
          <h1 className="maintitle">Our Rooms</h1>
          <span className="par">Reserve your haven of comfort and style with our exquisite rooms. </span>
        </div>
      </header>
        <div className="card">
          <Card className="mycard max-w-sm" imgSrc={suit}>
            <h5 className="roomname">Siute Room</h5>
            <p>
              <h3 className="price">Rs. 8000.00</h3>
              <span>
                <u>per night</u>
              </span>
            </p>
            <Model
              topic="Siute Room"
              parone="With less than a month to go before the European Union
                      enacts new consumer privacy laws for its citizens,
                      companies around the world are updating their terms of
                      service agreements to comply."
              partwo="The European Union’s General Data Protection Regulation
                  (G.D.P.R.) goes into effect on May 25 and is meant to
                  ensure a common set of data rights in the European Union.
                  It requires organizations to notify users as soon as
                  possible of high-risk data breaches that could personally
                  affect them."
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
              parone="With less than a month to go before the European Union
                      enacts new consumer privacy laws for its citizens,
                      companies around the world are updating their terms of
                      service agreements to comply."
              partwo="The European Union’s General Data Protection Regulation
                  (G.D.P.R.) goes into effect on May 25 and is meant to
                  ensure a common set of data rights in the European Union.
                  It requires organizations to notify users as soon as
                  possible of high-risk data breaches that could personally
                  affect them."
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
              parone="With less than a month to go before the European Union
                      enacts new consumer privacy laws for its citizens,
                      companies around the world are updating their terms of
                      service agreements to comply."
              partwo="The European Union’s General Data Protection Regulation
                  (G.D.P.R.) goes into effect on May 25 and is meant to
                  ensure a common set of data rights in the European Union.
                  It requires organizations to notify users as soon as
                  possible of high-risk data breaches that could personally
                  affect them."
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
              parone="With less than a month to go before the European Union
                      enacts new consumer privacy laws for its citizens,
                      companies around the world are updating their terms of
                      service agreements to comply."
              partwo="The European Union’s General Data Protection Regulation
                  (G.D.P.R.) goes into effect on May 25 and is meant to
                  ensure a common set of data rights in the European Union.
                  It requires organizations to notify users as soon as
                  possible of high-risk data breaches that could personally
                  affect them."
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
              parone="With less than a month to go before the European Union
                      enacts new consumer privacy laws for its citizens,
                      companies around the world are updating their terms of
                      service agreements to comply."
              partwo="The European Union’s General Data Protection Regulation
                  (G.D.P.R.) goes into effect on May 25 and is meant to
                  ensure a common set of data rights in the European Union.
                  It requires organizations to notify users as soon as
                  possible of high-risk data breaches that could personally
                  affect them."
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
              parone="With less than a month to go before the European Union
                      enacts new consumer privacy laws for its citizens,
                      companies around the world are updating their terms of
                      service agreements to comply."
              partwo="The European Union’s General Data Protection Regulation
                  (G.D.P.R.) goes into effect on May 25 and is meant to
                  ensure a common set of data rights in the European Union.
                  It requires organizations to notify users as soon as
                  possible of high-risk data breaches that could personally
                  affect them."
            />
          </Card>
        </div>
      </div>
  );
}
