import React from "react";
import logo from "../img/logo.png";
import "./Home.css";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";


function Home() {
  return (
    <div className="home">
      {/*social media icon bar*/}
      <div className="iconBar">
        <FaXTwitter className="twitter" />
        <FaInstagram className="instagram" />
        <FaYoutube className="youtube" />
        <FaFacebookF className="facebook" />
      </div>

      {/* logo */}
      <img src={logo} className="logo" alt="endless logo" />
    </div>
  );
}

export default Home;
