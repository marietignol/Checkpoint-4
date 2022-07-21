/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Link } from "react-router-dom";
import { useState } from "react";

import Logo from "@assets/logo1.png";

import OpenBurger from "@assets/Burger_close.png";
import CloseBurger from "@assets/Burger_open.png";

function Nav() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between pt-8">
      <Link to="/home" className="ml-14 w-40">
        <img src={Logo} alt="logo" className="w-4/12 h-auto" />
      </Link>

      <img
        src={navOpen ? CloseBurger : OpenBurger}
        alt=""
        className="h-8 z-20 absolute right-9 top-10 cursor-pointer lg:hidden"
        onClick={() => setNavOpen(!navOpen)}
      />

      <ul
        className={`bg-darkColor lg:text-right duration-500 ease-linear lg:pl-10 lg:static fixed  top-0 lg:h-auto z-10 mr-32 ${
          !navOpen ? "right-[-100%]" : "right-0"
        } `}
      >
        <li className="lg:inline-block  lg:ml-10 ml-5 lg:my-0 my-6 border-b-2 border-darkColor hover:border-white duration-300">
          <Link
            to="/home"
            className="text-middleOrange cursor-pointer font-Raleway font-normal text-base inline-block lg:py-5 py-3"
            onClick={() => setNavOpen(!navOpen)}
          >
            Home
          </Link>
        </li>

        <li className="lg:inline-block  lg:ml-10 ml-5 lg:my-0 my-6 border-b-2 border-darkColor hover:border-white duration-300">
          <Link
            to="/about"
            className="text-middleOrange cursor-pointer font-Raleway font-normal text-base inline-block lg:py-5 py-3"
            onClick={() => setNavOpen(!navOpen)}
          >
            About
          </Link>
        </li>

        <li className="lg:inline-block  lg:ml-10 ml-5 lg:my-0 my-6 border-b-2 border-darkColor hover:border-white duration-300">
          <Link
            to="/skills"
            className="text-middleOrange cursor-pointer font-Raleway font-normal text-base inline-block lg:py-5 py-3"
            onClick={() => setNavOpen(!navOpen)}
          >
            Skills
          </Link>
        </li>

        <li className="lg:inline-block  lg:ml-10 ml-5 lg:my-0 my-6 border-b-2 border-darkColor hover:border-white duration-300">
          <Link
            to="/portfolio"
            className="text-middleOrange cursor-pointer font-Raleway font-normal text-base inline-block lg:py-5 py-3"
            onClick={() => setNavOpen(!navOpen)}
          >
            Portfolio
          </Link>
        </li>
        <li className="lg:inline-block  lg:ml-10 ml-5 lg:my-0 my-6 border-b-2 border-darkColor hover:border-white duration-300">
          <Link
            to="/contact"
            className="text-middleOrange cursor-pointer font-Raleway font-normal text-base inline-block lg:py-5 py-3"
            onClick={() => setNavOpen(!navOpen)}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
