/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

//import header data
import { headerData } from "../data";

//import components
import Nav from "./Nav";
import navMobile from "./NavMobile";
import Socials from "./Socials";

//import icons
import { TiThMenuOutline, TithMenuOutline } from "react-icons/ti";
import NavMobile from "./NavMobile";

const Header = () => {
  // destructure header data
  const { logo } = headerData;
  //header state
  const [isActive, setIsActive] = useState(false);
  //nav movile state
  const [navMobile, setNavMobile] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      // eslint-disable-next-line no-const-assign, react-hooks/exhaustive-deps
      window.scrollY > 50 ? (setIsActive = true) : (setIsActive = false);
    });
  });

  return (
    <header
      className={`${
        isActive
          ? "h-[100px] lg:h-[110px] shadow-lg"
          : " h-[120px] lg:h-[110px]"
      } fixed bg-white left-0 right-0 z-10 max-w-[1920px] w-full mx-auto transition-all duration-300`}
    >
      <div className="flex justify-between items-center h-full pl-[50px] pr-[60px]">
        {/* logo */}
        <a href="/">
          <img className="w-[188px] h-[90px]" src={logo} alt="logo-img" />
        </a>
        {/* nav - initially hidden - show on desktop */}
        <div className=" hidden xl:flex">
          <Nav />
        </div>
        {/* nav menu btn -showing by default - hidden on destop mode*/}
        <div className="xl:hidden absolute right-[5%] bg-dark text-white p-2 rounded-md cursor-pointer">
        <TiThMenuOutline onClick={()=>setNavMobile(!navMobile)} className="text-3xl" /> 

      </div>
      {/* nav mobile - showing by defauld - hidden on desktop */}
      <div
        className={` ${ navMobile ? "max-h-full" : "max-h-0"} ${
          isActive ? "top-[100px] lg:top-[110px]" : "top-[120px] lg:top-[150px]"
        } fixed bg-white w-full h-full left-0 -z-10 transition-all duration-300`}
      >
        <NavMobile />
      </div>
      {/* Socials icons - initially hidden - show on desktop */}
      <div className=" hidden xl:flex ">
        <Socials/>
      </div>
      </div>
    </header>
  );
};

export default Header;
