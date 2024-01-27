import React from "react";
import "../css/bookingForm.css";
import Navigationbar from "./Navigationbar";
import { Datepicker } from "flowbite-react";
import { Button, Checkbox, Label, TextInput, Select } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { useState } from "react";
import axios from "axios";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    mobileNumber: "",
    ArrivalDate: "",
    LeavingDate: "",
    NoAdults: "",
    NoChildren: "",
    RoomType: "", 
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [leavingError, setleavingError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Get today's date
    const today = new Date();
    // Remove time from today's date
    today.setHours(0, 0, 0, 0);

    // Convert formData.ArrivalDate and formData.LeavingDate to Date objects
    const arrivalDate = new Date(formData.ArrivalDate);
    const leavingDate = new Date(formData.LeavingDate);

    // Check if arrivalDate is later than today
    if (arrivalDate < today) {
      setErrorMessage("Arrival date should be later than today");
      return;
    }
    // Check if leavingDate is later than arrivalDate
    if (leavingDate <= arrivalDate) {
      setleavingError("Leaving date should be later than arrival date");
      return;
    }

    console.log("this is form data ", formData);
    axios
      .post("http://localhost:8000/reservations/", formData)
      .then((response) => {
        console.log("this is response data ", response);
        console.log(response);
        setSuccessMessage(
          "Successfully Reserved your room. Thank you for visiting us. Enjoy Your vacation.."
        );
        setErrorMessage("");
        setleavingError("");
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage("An error occurred while reserving the room");
      });
  };
  return (
    <div>
      <Navigationbar />
      <header className="bookingheader">
        <div className="overlay">
          <h1 className="maintitle">Booking Form</h1>
          <span className="par">
            Reserve your haven of comfort and style with our exquisite rooms.{" "}
          </span>
        </div>
        <div className="formone">
          <div className=" frm min-h-screen p-6 bg-gray-100 flex items-center justify-center">
            <div className=" container max-w-screen-lg mx-auto">
              <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                <form onSubmit={handleSubmit}>
                  <div className="text-gray-600">
                    <p className="formtopicone">Personal Details</p>
                    <span className="formsubtopicone">
                      Please fill out all the fields.
                    </span>
                  </div>

                  <div className="lg:col-span-2">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                      <div className="md:col-span-5">
                        <label for="name">Full Name</label>
                        <TextInput
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          sizing="sm"
                        />
                      </div>

                      <div className="md:col-span-5">
                        <label for="email">Email Address</label>
                        <TextInput
                          name="email"
                          type="email"
                          rightIcon={HiMail}
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="name@flowbite.com"
                          required
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
                        <label for="mobileNumber">Mobile Number</label>
                        <TextInput
                          name="mobileNumber"
                          type="tel"
                          value={formData.mobileNumber}
                          onChange={handleChange}
                          sizing="sm"
                        />
                      </div>

                      <div className="md:col-span-3">
                        {errorMessage && (
                          <div className="error-message">{errorMessage}</div>
                        )}
                        <label for="ArrivalDate">Arrival Date</label>
                        <TextInput
                          name="ArrivalDate"
                          type="date"
                          value={formData.ArrivalDate}
                          onChange={handleChange}
                          sizing="sm"
                        />
                        {/* <Datepicker
                          name="ArrivalDate"
                          onChange={(date) =>
                            setFormData({ ...formData, ArrivalDate: date })
                          }
                        /> */}
                      </div>

                      <div className="md:col-span-2">
                        {leavingError && (
                          <div className="error-message">{leavingError}</div>
                        )}
                        <label for="LeavingDate">Leaving Date</label>
                        <TextInput
                          name="LeavingDate"
                          type="date"
                          value={formData.LeavingDate}
                          onChange={handleChange}
                          sizing="sm"
                        />
                        {/* <Datepicker
                          name="LeavingDate"
                          onChange={(date) =>
                            setFormData({ ...formData, LeavingDate: date })
                          }
                        /> */}
                      </div>

                      <div className="md:col-span-5 ">
                        <label for="roomType">Room Type</label>
                        <Select
                          name="RoomType"
                          required
                          value={formData.RoomType}
                          onChange={handleChange}
                          sizing="sm"
                        >
                          <option value="SR">Suit Room</option>
                          <option value="FR">Family Room</option>
                          <option value="DR">Delux Room</option>
                          <option value="CR">Classic Room</option>
                          <option value="SuR">Superior Room</option>
                          <option value="LR">Luxury Room</option>
                        </Select>
                        {/* <Select
                          name="roomType"
                          required
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              roomType: e.target.value,
                            })
                          }
                        >
                          <option value="Suit Room">Suit Room</option>
                          <option value="Family Room">Family Room</option>
                          <option value="Delux Room">Delux Room</option>
                          <option value="Classic Room">Classic Room</option>
                          <option value="Superior Room">Superior Room</option>
                          <option value="Luxury Room">Luxury Room</option>
                        </Select> */}
                      </div>

                      <div className="md:col-span-3">
                        <label for="NoAdults">Number of Adults</label>
                        <TextInput
                          name="NoAdults"
                          type="number"
                          value={formData.NoAdults}
                          onChange={handleChange}
                          sizing="sm"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label for="NoChildren">
                          Number of Children (if any)
                        </label>
                        <TextInput
                          name="NoChildren"
                          type="number"
                          value={formData.NoChildren}
                          onChange={handleChange}
                          sizing="sm"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="btncontainer">
                    <Button
                      style={{ width: "100%" }}
                      gradientMonochrome="info"
                      className="bookbutn"
                      type="submit"
                    >
                      Book Your Room
                    </Button>
                    <Button
                      style={{ width: "100%" }}
                      href="/"
                      gradientMonochrome="info"
                      className="bookbutn"
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
      </header>
    </div>
  );
}
