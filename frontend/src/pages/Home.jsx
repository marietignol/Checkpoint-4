/* eslint-disable jsx-a11y/heading-has-content */
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="bg-hero-bg md:h-screen bg-cover bg-center font-Barlow pb-2 p-28">
      <div className="md:container  px-2  pt-5 md:text-left text-center">
        <h1 className="text-2xl  text-white">
          <span className="text-[#ffffff70] font-bold mr-2">01</span> PICK YOUR
          DESTINATION
        </h1>
        <div className="md:flex items-center md:justify-between  flex-row-reverse pt-6 ">
          <img
            src="./src/assets/image-moon.png"
            alt=""
            className="md:w-[36%] w-[52%]  md:mx-0 mx-auto md:py-0 py-4"
          />
          <div className="md:w-1/2 ">
            <ul className="text-white pb-4">
              <li className="inline-block cursor-pointer md:mr-8 md:mx-0 mx-4 md:ml-2 border-b-2">
                MOON
              </li>
              <li className="inline-block cursor-pointer md:mr-8 md:mx-0 mx-4">
                MARS
              </li>
              <li className="inline-block cursor-pointer md:mr-8 md:mx-0 mx-4">
                EUROPA
              </li>
              <li className="inline-block cursor-pointer md:mr-8 md:mx-0 mx-4">
                TITAN
              </li>
            </ul>
            <h1 className="text-middleOrange w-full font-Bellefair pb-2 text-8xl">
              Hi, I'm Marie,Web Developer
            </h1>
            <p className="text-white font-extralight text-sm md:w-2/3 md:pl-1 leading-6 tracking-wide pb-10 border-b-[0.5px] border-[#ffffff66]">
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
                    className="h-9"
                  />
                  <img
                    src="./src/assets/icon-linkedin.png"
                    alt=""
                    className="h-9"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
