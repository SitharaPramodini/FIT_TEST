import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MessageCircle, Phone, Mail, Clock } from 'lucide-react';
import { Link } from "react-router-dom";
import Footer from '../Components/Footer';
import FAQPage from '../Components/FAQpage';

const FAQ = () => {

  return (
    <div className="">
      <FAQPage />
      <Footer />
    </div>
  );
};

export default FAQ;