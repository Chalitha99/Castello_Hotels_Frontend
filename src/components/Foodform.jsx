import React from "react";
import "../css/foodform.css";
import Navigationbar from "./Navigationbar";
import { Datepicker } from "flowbite-react";
import { Button, Checkbox, Label, TextInput, Select } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { useState } from "react";
import axios from "axios";

export default function Foodform() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    mobile_number: "",
    quantity: "",
    delivery_method: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/foods/", formData)
      .then((response) => {
        console.log("this is response data ", response);
        setSuccessMessage("Successfully placed your order. Thank you!");
        setErrorMessage("");
        setFormData({
          name: "",
          address: "",
          city: "",
          mobile_number: "",
          quantity: "",
          delivery_method: "", 
        });
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage("An error occurred while placing the order");
      });
  };
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
                <form onSubmit={handleSubmit}>
                  <div className="lg:col-span-2">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                      <div className="md:col-span-5">
                        <label for="name">Name</label>
                        <TextInput
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          sizing="sm"
                        />
                      </div>

                      <div className="md:col-span-3">
                        <label for="address">Address / Street</label>
                        <TextInput
                          name="address"
                          type="text"
                          value={formData.address}
                          onChange={handleChange}
                          sizing="sm"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label for="city">City</label>
                        <TextInput
                          name="city"
                          type="text"
                          value={formData.city}
                          onChange={handleChange}
                          sizing="sm"
                        />
                      </div>
                      <div className="md:col-span-5">
                        <label for="mobile_number">Mobile Number</label>
                        <TextInput
                          name="mobile_number"
                          type="tel"
                          value={formData.mobile_number}
                          onChange={handleChange}
                          sizing="sm"
                        />
                      </div>

                      <div className="md:col-span-3">
                        <label for="quantity">Quantity</label>
                        <TextInput
                          name="quantity"
                          type="number"
                          value={formData.quantity}
                          onChange={handleChange}
                          sizing="sm"
                        />
                      </div>

                      <div className="md:col-span-3 ">
                        <Select
                          name="delivery_method"
                          required
                          value={formData.delivery_method}
                          onChange={handleChange}
                          sizing="sm"
                        >
                          <option value="">Select a delivery method</option>
                          <option value="A">Acquire</option>
                          <option value="P">Pickup</option>
                          <option value="D">Delivery</option>
                        </Select>
                      </div>
                    </div>
                  </div>
                  <div className="food_btncontainer">
                    <Button
                      style={{ width: "100%" }}
                      gradientMonochrome="info"
                      className="food_bookbutn"
                      type="submit"
                    >
                      Confirm Your Order
                    </Button>
                    <Button
                      style={{ width: "100%" }}
                      href="/"
                      gradientMonochrome="info"
                      className="food_bookbutn"
                      type=""
                    >
                      Back to Home
                    </Button>
                    {successMessage && (
                      <p className="successMsg">{successMessage}</p>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
