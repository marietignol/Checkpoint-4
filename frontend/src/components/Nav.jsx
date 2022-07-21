/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Link } from "react-router-dom";
import { useState } from "react";

import Logo from "@assets/logo1_checkpoint4.png";
// import Logout from "@assets/icon_logout.svg";
// import OpenBurger from "@assets/burger_icon.png";
// import CloseBurger from "@assets/burger_close_icon.png";

function Nav() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between">
      <Link to="/home" className="ml-10 w-40">
        <img src={Logo} alt="logo" className="w-full h-auto item-centers" />
      </Link>

      {/* <img
        src={navOpen ? CloseBurger : OpenBurger}
        alt=""
        className="h-5 z-20 absolute right-9 top-10 cursor-pointer lg:hidden"
        onClick={() => setNavOpen(!navOpen)}
      /> */}

      <ul
        className={`bg-white lg:text-right w-full h-full duration-500 ease-linear lg:pl-10 lg:static fixed  top-0 lg:h-auto z-10 ${
          !navOpen ? "right-[-100%]" : "right-0"
        } `}
      >
        <li className="lg:inline-block  lg:ml-10 ml-5 lg:my-0 my-6 border-b-2 border-transparent hover:border-white duration-300">
          <Link
            to="/home"
            className="text-#14252F cursor-pointer font-Raleway font-normal text-sm inline-block lg:py-5 py-3"
            onClick={() => setNavOpen(!navOpen)}
          >
            Home
          </Link>
        </li>

        <li className="lg:inline-block  lg:ml-10 ml-5 lg:my-0 my-6 border-b-2 border-transparent hover:border-white duration-300">
          <Link
            to="/about"
            className="text-#14252F cursor-pointer font-Raleway font-normal text-sm inline-block lg:py-5 py-3"
            onClick={() => setNavOpen(!navOpen)}
          >
            About
          </Link>
        </li>

        <li className="lg:inline-block  lg:ml-10 ml-5 lg:my-0 my-6 border-b-2 border-transparent hover:border-white duration-300">
          <Link
            to="/skills"
            className="text-#14252F cursor-pointer font-Raleway font-normal text-sm inline-block lg:py-5 py-3"
            onClick={() => setNavOpen(!navOpen)}
          >
            Skills
          </Link>
        </li>

        <li className="lg:inline-block  lg:ml-10 ml-5 lg:my-0 my-6 border-b-2 border-transparent hover:border-white duration-300">
          <Link
            to="/portfolio"
            className="text-#14252F cursor-pointer font-Raleway font-normal text-sm inline-block lg:py-5 py-3"
            onClick={() => setNavOpen(!navOpen)}
          >
            Portfolio
          </Link>
        </li>
        <li className="lg:inline-block  lg:ml-10 ml-5 lg:my-0 my-6 border-b-2 border-transparent hover:border-white duration-300">
          <Link
            to="/contact"
            className="text-#14252F cursor-pointer font-Raleway font-normal text-sm inline-block lg:py-5 py-3"
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
