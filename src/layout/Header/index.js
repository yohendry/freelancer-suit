import React from "react";
import { Link } from "react-router-dom";
import { BiBell } from "react-icons/bi";
import { FaBars } from 'react-icons/fa';

import avatar1 from "@Images/avatar-1.svg";
import avatar2 from "@Images/avatar-2.svg";
import avatar3 from "@Images/avatar-3.svg";
import avatar4 from "@Images/avatar-4.svg";
import SidebarToggleButton from "@Layout/Header/SidebarToggleButton";

function Header({ className, showBrand }) {
  const avatarList = [avatar1, avatar2, avatar3, avatar4];
  return (
    <header
      className={`flex items-center z-10 p-4 bg-white shadow-md bg-gray-800 text-blue-500 ${
        className || ""
      }`}
    >
      <div className="flex-1 flex items-center justify-between h-full">
        <SidebarToggleButton className="p-1 mr-3 rounded-md hover:text-blue-400">
          <FaBars
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
          />
        </SidebarToggleButton>
        {showBrand && (
          <Link to="/" className="navlink-home mr-6 hidden md:block">
            freelancer suite
          </Link>
        )}
        <div className="flex flex-1">
          <div className="relative w-full max-w-xl mr-6 focus-within:text-purple-500">
            <div className="absolute inset-y-0 flex items-center pl-4">
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              className="search-field placeholder-gray-500"
              type="text"
              placeholder="Search for projects"
              aria-label="Search"
            />
          </div>
        </div>
        <ul className="flex items-center flex-shrink-0 space-x-4">
          <li className="relative" style={{ fontSize: "1.75em" }}>
            <button
              className="relative align-middle rounded-md hover:text-blue-400"
              aria-label="Notifications"
              aria-haspopup="true"
            >
              <BiBell />
              <span
                aria-hidden="true"
                className="absolute top-0 right-0 inline-block w-3 h-3 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"
              />
            </button>
          </li>
          <li className="relative">
            <button
              className="align-middle rounded-full"
              aria-label="Account"
              aria-haspopup="true"
            >
              <img
                className="object-cover w-10 h-10 rounded-full p-1 bg-white"
                src={avatarList[Math.floor(Math.random() * avatarList.length)]}
                alt="Person Name"
                aria-hidden="true"
              />
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
