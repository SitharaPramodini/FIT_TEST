import React, {lazy} from "react";
import Footer from "../Components/Footer";
import ContactUs from "../Components/Home-Components/ContactUs";
import Solutions from "../Components/AboutUs-Components/Solutions";
import OurValue from "../Components/AboutUs-Components/OurValue";


export default function Home() {


  return (
    <div className="">
      <Solutions />
      <OurValue />
      <ContactUs />
      <Footer />
    </div>
  );
}
