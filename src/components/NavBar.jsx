import React, { useEffect, useState } from "react";
import { Cross as Hamburger } from 'hamburger-react'
import "./NavBar.css";

function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);

  // state to track screen width
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  function openNav() {
    setOpenMenu(!openMenu);
  }

  // track window resize and update screenWidth state
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
    <nav className="navbar">
      {/* render menu if openMenu is true or screenWidth is greater than 500 */}
      {(openMenu || screenWidth > 500) && (
        <ul className="list">
          <li className="items">About</li>
          <li className="items">Artists</li>
          <li className="items">Contact</li>
        </ul>
      )}

<div className="btn" onClick={openNav}>
        <Hamburger
          toggled={openMenu}
          toggle={setOpenMenu}
          size={24}
          color="#000"
          label="Show menu"
        />
      </div>
    </nav>
  );
}

export default NavBar;
