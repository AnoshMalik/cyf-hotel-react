import React from "react";
import TouristInfoCards from "./TouristInfoCards";
import Bookings from "./Bookings";
import Heading from "./Heading";
import Footer from "./Footer";
import Restaurant from "./Restaurant";
import "./App.css";

const footerArray = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      <Footer footerArray={footerArray} />
    </div>
  );
};

export default App;
