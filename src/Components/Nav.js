import React from "react";
import Logo from "../Assets/Assiduus_Global_Logo.jpg";
import { FaBell } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";

function Nav() {
  return (
    <div className="px-4 bg-white shadow-md border-b border-b-1 w-[100vw] flex items-center justify-between">
      <div className="w-[10vw]">
        <img src={Logo} alt="Logo" className="w-[100%] h-[5vw]" />
      </div>
      <div className="flex items-center">
        <div className="mr-[2vw] flex items-center bg-gray-200 rounded-md border">
            <IoMdSearch className="h-full" />
          <input
            type="text"
            name="Search"
            placeholder="Search..."
            className="outline-none bg-gray-200 px-2"
          />
        </div>
        <div className="flex items-center justify-between w-[10vw]">
          <FaBell />
          <IoPerson />
          <IoIosArrowDown />
        </div>
      </div>
    </div>
  );
}

export default Nav;
