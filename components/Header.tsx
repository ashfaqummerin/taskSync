"use client";

import Image from "next/image";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Avatar from "react-avatar";
import { useBoardStore } from "@/store/BoardStore";
import { useEffect, useState } from "react";
import fetchSuggestion from "@/lib/fetchSuggestion";

function Header() {
  const [searchString, setSearchString, board] = useBoardStore((state) => [
    state.searchString,
    state.setSearchString,
    state.board,
  ]);

  const [loading, setLoading] = useState<Boolean>(false);
  const [suggestion, setSuggestion] = useState<String>("");

  useEffect(() => {
    if (board.columns.size === 0) return;
    setLoading(true);

    const fetchSuggestionFunc = async () => {
      const suggestion = await fetchSuggestion(board);
      setSuggestion(suggestion);
      setLoading(false);
    };

    // fetchSuggestionFunc();
  }, [board]);

  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10 ">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-[#e7e9bb] to-[#403b4a] rounded-md filter blur-3xl opacity-20 -z-50" />
        <Image
          // src="http://links.papareact.com/c2cdd5"
          src="/TaskSync.svg"
          width={300}
          height={100}
          alt="tasksync_logo"
          className="w-40 md:w-36 pb-4 md:pb-0 object-contain scale-125"
        />

        <div className="flex items-center space-x-4 flex-1 justify-end w-full ">
          <form className="flex items-center space-x-5 rounded-md bg-white p-2 shadow-md flex-1 md:flex-initial">
            <MagnifyingGlassIcon className="w-7 h-7 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 outline-none p-2"
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
            />
            <button hidden type="submit">
              Search
            </button>
          </form>
          <Avatar name="Ashfaq Ummer" round color="#0055D1" size="50" />
        </div>
      </div>

      <div className="flex items-center justify-center px-5 py-2 md:py-3">
        {/* <p className="flex items-center p-4 text-sm font-light pr-5 shadow-xl rounded-xl w-fit bg-white italic text-[#0055D1]  ">
          <UserCircleIcon
            className={`inline-block h-10 w-10 text-[#0055D1] mr-1 ${loading && "animate-pulse"}`}
          />
          {suggestion && !loading ? suggestion : "GPT is summarising your task..."}
        </p> */}
      </div>
    </header>
  );
}

export default Header;
