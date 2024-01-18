import React from "react";
import "../css/bookingForm.css";
import Navigationbar from "./Navigationbar";
import { Datepicker } from "flowbite-react";
import { Button, Checkbox, Label, TextInput , Select} from "flowbite-react";
import { HiMail } from "react-icons/hi";

export default function BookingForm() {
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
                
                  <div className="text-gray-600">
                    <p className="formtopicone">Personal Details</p>
                    <span className="formsubtopicone">
                      Please fill out all the fields.
                    </span>
                  </div>

                  <div className="lg:col-span-2">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                      <div className="md:col-span-5">
                        <label for="full_name">Full Name</label>
                        <TextInput id="small" type="text" sizing="sm" />
                      </div>

                      <div className="md:col-span-5">
                        <label for="email">Email Address</label>
                        <TextInput
                          id="email4"
                          type="email"
                          rightIcon={HiMail}
                          placeholder="name@flowbite.com"
                          required
                        />
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
                        <label for="city">Mobile Number</label>
                        <TextInput id="small" type="tel" sizing="sm" />
                      </div>
                      <div className="md:col-span-3">
                        <label for="city">Arrival Date</label>
                        <Datepicker />
                      </div>
                      <div className="md:col-span-2">
                        <label for="city">Leaving Date</label>
                        <Datepicker />
                      </div>
                      <div className="md:col-span-5 ">
                        <label for="city">Room Type</label>
                        <Select id="rooms" required>
                          <option>Suit Room</option>
                          <option>Family Room</option>
                          <option>Delux Room</option>
                          <option>Classic Room</option>
                          <option>Superior Room</option>
                          <option>Luxury Room</option>
                        </Select>
                      </div>
                      <div className="md:col-span-3">
                        <label for="city">Number of Adults</label>
                        <TextInput id="small" type="number" sizing="sm" />
                      </div>
                      <div className="md:col-span-2">
                        <label for="city">Number of Childern (if any)</label>
                        <TextInput id="small" type="number" sizing="sm" />
                      </div>
                    </div>
                  </div>
                  <div className="btncontainer">
                  <Button
                  href="#"
                    gradientMonochrome="info"
                    className="bookbutn"
                    type="submit"
                  >
                    Book Your Room
                  </Button>
                  <Button
                    href="/"
                    gradientMonochrome="info"
                    className="bookbutn"
                    type="submit"
                  >
                    Back to Home
                  </Button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
