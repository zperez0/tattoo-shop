import React, { useEffect, useState } from "react";
import { Cross as Hamburger } from "hamburger-react";
import "./NavBar.css";
import { Link } from "react-router-dom";

// to do:
// mobile menu - when item is clicked either A. have navbar close or B. shrink the size of open menu.
// allowing the user to see the contents of the page.

function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);

  // state to track screen width
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  function openNav() {
    setOpenMenu(!openMenu);
  }

  // track window resize & update screenWidth state
  useEffect(() => {
    // updates screenWidth state on window resize
    function changeWidth() {
      setScreenWidth(window.innerWidth);
    }

    // tracks window resize
    window.addEventListener("resize", changeWidth);

    // clean up function to remove the event listener on component unmount
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
    // [] - empty dependency array ensures effect runs only once
  }, []);

  return (
    <div className="topnav" id="myTopnav">
      <p>endless</p>

      {(openMenu || screenWidth > 500) && (
        <div className="split">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/artists">Artists</Link>
          <Link to="/contact">Contact</Link>
        </div>
      )}

      <div className="btn" onClick={openNav}>
        <Hamburger
          toggled={openMenu}
          toggle={setOpenMenu}
          size={24}
          color="#f5f5f5"
          label="Show menu"
        />
      </div>
    </div>
  );
}

export default NavBar;
