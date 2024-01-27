import React from "react";
import "../css/foodform.css";
import Navigationbar from "./Navigationbar";
import { Datepicker } from "flowbite-react";
import { Button, Checkbox, Label, TextInput , Select} from "flowbite-react";
import { HiMail } from "react-icons/hi";

export default function Foodform() {
  return (
    <div>
      <Navigationbar />
      <div className="foodorder">
        <div className="food_formone">
          <div className=" frm min-h-screen p-6 bg-gray-100 flex items-center justify-center">
            <div className=" container max-w-screen-lg mx-auto">
              <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                
                  <div className="text-gray-600">
                    <p className="food_formtopicone">Food Order Form</p>
                    <span className="food_formsubtopicone">
                      Please fill out all the fields.
                    </span>
                  </div>

                  <div className="lg:col-span-2">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                      <div className="md:col-span-5">
                        <label for="name">Name</label>
                        <TextInput id="small" type="text" sizing="sm" />
                      </div>

                      <div className="md:col-span-3">
                        <label for="address">Address / Street</label>
                        <TextInput id="small" type="text" sizing="sm" />
                      </div>

                      <div className="md:col-span-2">
                        <label for="city">City</label>
                        <TextInput id="small" type="text" sizing="sm" />
                      </div>
                      <div className="md:col-span-5">
                        <label for="mobileno">Mobile Number</label>
                        <TextInput id="small" type="tel" sizing="sm" />
                      </div>
                     
                      <div className="md:col-span-3">
                        <label for="quantity">Quantity</label>
                        <TextInput id="small" type="number" sizing="sm" />
                      </div>

                      <div className="md:col-span-3 ">
                        <Select id="rooms" required>
                          <option>Acquire</option>
                          <option>Pickup</option>
                          <option>Delivery</option>
                        </Select>
                      </div>
                      
                    </div>
                  </div>
                  <div className="food_btncontainer">
                  <Button
                  href="#"
                    gradientMonochrome="info"
                    className="food_bookbutn"
                    type="submit"
                  >
                    Confirm Your Order
                  </Button>
                  <Button
                    href="/"
                    gradientMonochrome="info"
                    className="food_bookbutn"
                    type="submit"
                  >
                    Back to Home
                  </Button>
                  </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
  );
}
