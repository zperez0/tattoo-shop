import React from "react";
import "./Artists.css";
import AnimatedButton from "./AnimatedButton";
import artist1 from "../img/artist1.jpg";
import artist2 from "../img/artist2.jpg";
import artist3 from "../img/artist3.jpg";

// to do:
// adjust media query

function Artists() {
  return (
    <div className="artists">
      <h1 className="title-artist">Artists</h1>

      <div className="row">
        <div className="column-artist">
          <div className="card">
            <img src={artist2} alt="Jane" className="artist-img" />
            <div className="container">
              <h2>Morpheus</h2>
              <p>
                A visionary ink-sorcerer, weaving dreams onto skin with an
                otherworldly finesse.
              </p>
              <AnimatedButton />
            </div>
          </div>
        </div>

        <div className="column-artist">
          <div className="card">
            <img src={artist1} alt="Mike" className="artist-img" />
            <div className="container">
              <h2>Lucien</h2>
              <p>
                A storyteller in ink, etching tales of past, present, and
                fantastical realms onto willing canvases.
              </p>
              <AnimatedButton />
            </div>
          </div>
        </div>

        <div className="column-artist">
          <div className="card">
            <img src={artist3} alt="John" className="artist-img" />
            <div className="container">
              <h2>Bast</h2>
              <p>
                A mystic tattoo alchemist, infusing ancient symbols into modern
                artistry.
              </p>
              <AnimatedButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Artists;
