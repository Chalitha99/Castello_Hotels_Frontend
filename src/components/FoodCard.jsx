import React from 'react'
import "../css/restaurant.css";
import { useState } from 'react';
import { Button, Checkbox, Label, TextInput , Select} from "flowbite-react";
import "../css/restaurant.css";


export default function FoodCard(props){
  return (
    <div className="menu_card">
          <div className="menu_card-image">
          <img src={props.img3} alt='food Img'  className="menu_card-image" />
            {/* <img src={props.res3} className="menu_card-image" /> */}
          </div>
          <div className="menu_card-text">
            <p className="menu_card-meal-type">{props.type}</p>
            <h2 className="menu_card-title">{props.name}</h2>
            <p className="menu_card-body">{props.body}</p>
            <div className="content">
            <Button
                  href="foodorder"
                    className="foodbutton"
                    type="submit"
                  >
                    Order Now
                  </Button>
            </div>
          </div>
          <div className="menu_card-price">{props.price}</div>
        </div>
  )
}
