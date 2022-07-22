/* eslint-disable jsx-a11y/heading-has-content */
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className=" bg-cover bg-center font-Barlow pb-2 p-28 h-screen">
      <div className="md:container  px-2  pt-5 md:text-left text-center">
        <h1 className="text-2xl  text-white" />
        <div className=" items-center md:justify-between ">
          <div className="md:w-1/2 ">
            <ul className="text-white pb-4 text-xs">
              <li className="inline-block cursor-pointer md:mr-8 md:mx-0 mx-4 md:ml-2 border-b-2">
                HOME
              </li>
              <li className="inline-block cursor-pointer md:mr-8 md:mx-0 mx-4">
                ABOUT
              </li>
              <li className="inline-block cursor-pointer md:mr-8 md:mx-0 mx-4">
                SKILLS
              </li>
              <li className="inline-block cursor-pointer md:mr-8 md:mx-0 mx-4">
                PORTFOLIO
              </li>
            </ul>
            <h1 className="text-middleOrange w-full font-Bellefair pb-2 text-7xl font-bold">
              Hi, I'm Marie,
            </h1>
            <h1 className="text-middleOrange w-full font-Bellefair pb-2 text-7xl font-bold">
              Web Developer
            </h1>
            <span className="text-[#d2d8f9] text-sm" />
            <p className="text-[#d2d8f9] font-extralight text-xl md:w-2/3 md:pl-1 leading-6 tracking-wide pb-10 border-b-[0.5px] border-[#ffffff66] ">
              Front End Back End Developer Junior
            </p>
            <div className="flex md:justify-between justify-around lg:w-1/2 w-auto pt-10">
              <div>
                <span className="text-[#d2d8f9] text-sm" />
                <h1 className="text-white text-xl" />
                <Link to="/contact" className="">
                  <button
                    type="button"
                    className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md bg-magenta hover:bg-magenta/70 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-magenta active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Contact
                  </button>
                </Link>
              </div>
              <div>
                <span className=" text-sm" />
                <h1 className="text-white text-xl" />
                <div className="flex justify-c">
                  <img
                    src="./src/assets/icon-git1.png"
                    alt=""
                    className="h-7"
                  />
                  <img
                    src="./src/assets/icon-linkedin.png"
                    alt=""
                    className="h-7"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
