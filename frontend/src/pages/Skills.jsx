import React from "react";

function Skills() {
  return (
    <div className="bg-darkColor flex justify-center text-middleOrange py-20 lg:py-[120px] overflow-hidden relative z-10 font-Raleway">
      <div className="md:container  px-2  pt-5 md:text-left text-center">
        <div className="max-w-[570px] mb-0 md:text-center lg:mb-0 lg:text-center">
          <h1 className="text-middleOrange w-full font-Raleway pb-2 text-3xl font-bold">
            Skills & Experiences
          </h1>
        </div>
        <div className="flex flex-wrap lg:justify-center sm:justify-center md:justify-center -mx-4">
          <div className="lg:w-1/2 xl:w-6/12 px-4 md:w-2/3 md:pl-1 leading-6 tracking-wide pb-10">
            <ol className="relative border-l">
              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Date : Month : Year
                </time>
                <h3 className="text-lg font-semibold  text-white">
                  Title / Name Experience
                </h3>
                <p className="mb-4 text-base font-normal text-gray-500 text-purple">
                  Experience Description
                </p>
              </li>
              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Date : Month : Year
                </time>
                <h3 className="text-lg font-semibold  text-white">
                  Title / Name Experience
                </h3>
                <p className="text-base font-normal text-gray-500 text-purple">
                  Experience Description
                </p>
              </li>
              <li className="ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Date : Month : Year
                </time>
                <h3 className="text-lg font-semibold  text-white">
                  Title / Name Experience
                </h3>
                <p className="text-base font-normal text-gray-500 text-purple">
                  Experience Description
                </p>
              </li>
            </ol>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
