import React from "react";

function Portfolio() {
  return (
    <div className="bg-darkColor flex justify-center text-middleOrange py-20 lg:py-[120px] overflow-hidden relative z-10 font-Raleway">
      <div className="container">
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="w-full px-4">
            <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
              <span className="font-semibold text-lg text-primary mb-2 block">
                Works
              </span>
              <h2
                className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
              >
                Portfolio
              </h2>

              <ul className=" pb-4 text-sm text-purple">
                <li className="inline-block cursor-pointer md:mr-8 md:mx-0 mx-4 md:ml-2">
                  ALL PROJECT
                </li>
                <li className="inline-block cursor-pointer md:mr-8 md:mx-0 mx-4">
                  WILD PROJECT
                </li>
                <li className="inline-block cursor-pointer md:mr-8 md:mx-0 mx-4">
                  HACKATHON
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div className="max-w-[370px] mx-auto mb-10">
              <div className="rounded overflow-hidden mb-8">
                <img src="./src/assets/Banner.jpg" alt="" className="w-full" />
              </div>
              <div>
                <span
                  className="
                     bg-primary
                     rounded
                     inline-block
                     text-center
                     py-1
                     px-4
                     text-xs
                     leading-loose
                     font-semibold
                     text-white
                     mb-5
                     "
                >
                  Title
                </span>

                <p className="text-base text-body-color">Title</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div className="max-w-[370px] mx-auto mb-10">
              <div className="rounded overflow-hidden mb-8">
                <img src="./src/assets/Banner.jpg" alt="" className="w-full" />
              </div>
              <div>
                <span
                  className="
                     bg-primary
                     rounded
                     inline-block
                     text-center
                     py-1
                     px-4
                     text-xs
                     leading-loose
                     font-semibold
                     text-white
                     mb-5
                     "
                >
                  Title
                </span>

                <p className="text-base text-body-color">Tech :</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div className="max-w-[370px] mx-auto mb-10">
              <div className="rounded overflow-hidden mb-8">
                <img src="./src/assets/Banner.jpg" alt="" className="w-full" />
              </div>
              <div>
                <span
                  className="
                     bg-primary
                     rounded
                     inline-block
                     text-center
                     py-1
                     px-4
                     text-xs
                     leading-loose
                     font-semibold
                     text-white
                     mb-5
                     "
                >
                  Title
                </span>

                <p className="text-base text-body-color">Tech :</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div className="max-w-[370px] mx-auto mb-10">
              <div className="rounded overflow-hidden mb-8">
                <img src="./src/assets/Banner.jpg" alt="" className="w-full" />
              </div>
              <div>
                <span
                  className="
                     bg-primary
                     rounded
                     inline-block
                     text-center
                     py-1
                     px-4
                     text-xs
                     leading-loose
                     font-semibold
                     text-white
                     mb-5
                     "
                >
                  Title
                </span>
                <p className="text-base text-body-color">Tech</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
