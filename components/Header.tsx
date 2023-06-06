"use client";

import Image from "next/image";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Avatar from "react-avatar";

function Header() {
  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10 ">
        <Image
          src="http://links.papareact.com/c2cdd5"
          width={300}
          height={100}
          alt="tasksync_logo"
          className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
        />

        <div className="flex items-center space-x-4 flex-1 justify-end w-full ">
          <form className="flex items-center space-x-5 rounded-md bg-white p-2 shadow-md flex-1 md:flex-initial">
            <MagnifyingGlassIcon className="w-7 h-7 text-gray-400" />
            <input type="text" placeholder="Search" className="flex-1 outline-none p-2" />
            <button hidden type="submit">
              Search
            </button>
          </form>
          <Avatar name="Ashfaq Ummer" round color="#0055D1" size="50" />
        </div>
      </div>
    </header>
  );
}

export default Header;
