import React from "react";
import "../css/restaurant.css";
import res1 from "../images/res/res1.jpg";
import res2 from "../images/res/res2.jpg";
import res3 from "../images/res/res3.jpg";
import res4 from "../images/res/res4.jpg";
import res5 from "../images/res/res5.jpg";
import res6 from "../images/res/res6.jpg";

import Navigationbar from "../components/Navigationbar";
import Footerbar from "../components/Footerbar";
import FoodCard from "../components/FoodCard";

function Restaurent() {
  
  return (

    <div className="App">
      <Navigationbar  />
      <div id="menu_header">
        <h1>Our Menu</h1>
        <p>Savor the moment, enjoy your meal, and collect cherished memories that linger long after the last bite.</p>
      </div>
      <div className="menu_container">
        <FoodCard img3={res3}
          type="Soup"
          name="Chicken Soup"
          body="Chicken, wild mushroom, cream & EVOO"
          price="Rs.1,688"
        />
        <FoodCard img3={res2}
          type="Appetizer & Salad"
          name="Seasonal Salad"
          body="Mixed green lettuce, vegitables, tomato & onion"
          price="Rs.1,888"
        />
        <FoodCard img3={res1}
          type="Breakfast"
          name="French Toast"
          body="Brioche slice, banana, ice cream, berry & peanut"
          price="Rs.2,088"
        />
        <FoodCard img3={res4}
          type="Pasta"
          name="Spaghetti"
          body="Spaghetti, chicken, chili, garlic, parsley & basil oil"
          price="Rs.3,188"
        />
        <FoodCard img3={res5}
          type="Sandwich"
          name="Club Sandwich"
          body="Smoked tuna, jalapeono, sliced boild egg & cheese"
          price="Rs.2,088"
        />
        <FoodCard img3={res6}
          type="Desserts"
          name="Chocolate Cake"
          body="Chocolate, cream, balsamic straeberry & cheese"
          price="Rs. 2,399"
        />
      </div>

      <Footerbar></Footerbar>
    </div>
  );
}

export default Restaurent;

