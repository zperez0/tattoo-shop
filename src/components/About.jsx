import React from "react";
import "./About.css";
import shop from "../img/shop.jpg";

function About() {
  return (
    <div className="about">
      <div className="row">
        <div className="column">
          <h1 className="title">About</h1>
          <p className="text">
            Welcome to Endless, where art meets skin. We are a vibrant
            collective of passionate tattoo artists dedicated to bringing your
            imagination to life. With a fusion of creativity and craftsmanship,
            our studio is a haven for those seeking unique and personalized
            tattoo experiences. At Endless, we celebrate individuality and
            collaborate closely with our clients, transforming ideas into
            captivating inked expressions. Step into our world, where every
            design tells a story, and let us craft a timeless masterpiece for
            you.
          </p>
          <h2 className="location">Location</h2>
          <p>1221 Sandman DR, Portland, OR 92222</p>
          <h3 className="hours">Hours</h3>
          <p>Everyday 11am to 7pm</p>
        </div>
        <div className="column">
          <img src={shop} className="shop" />
        </div>
      </div>
    </div>
  );
}

export default About;
