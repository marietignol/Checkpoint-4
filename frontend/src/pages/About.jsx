import React from "react";

function About() {
  return (
    <div className="bg-hero-bg md:h-screen bg-cover bg-center font-Barlow pb-2 p-28 h-screen">
      <div className=" items-center md:justify-between ">
        <h1 className="text-middleOrange text-center w-full font-Raleway pb-2 text-3xl font-bold">
          About Me
        </h1>
      </div>
      <div className="md:container flex flex-row-reverse px-2 pt-5 md:text-left text-center">
        <span className="text-[#d2d8f9] text-sm" />
        <p className="text-[#d2d8f9] font-extralight text-sm md:w-2/3 md:pl-1 leading-6 tracking-wide pb-10 border-b-[0.5px] border-[#ffffff66] ">
          See our planet as you’ve never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11
          landing sites. See our planet as you’ve never seen it before. A
          perfect relaxing trip away to help regain perspective and come back
          refreshed. While you’re there, take in some history by visiting the
          Luna 2 and Apollo 11 landing sites. See our planet as you’ve never
          seen it before. A perfect relaxing trip away to help regain
          perspective and come back refreshed. While you’re there, take in some
        </p>
        <div className="flex  justify-around lg:w-1/2 w-auto item-center">
          <img src="./src/assets/profil2.png" alt="" className="h-72" />
        </div>
      </div>
    </div>
  );
}

export default About;
