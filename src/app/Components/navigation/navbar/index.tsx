import React from "react";
import Link from "next/link";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="navbar sticky-top navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          <Logo />
        </a>
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/map">Map</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;