import React, { useEffect } from "react";
import searchimg from "../assets/search.gif";
import Refresh from "../assets/Refresh.gif";
import { FiRefreshCw } from "react-icons/fi";
const Search = ({ refetch, setIsRefetching, setSearch, search }) => {
  const HandleRefresh = async () => {
    setIsRefetching(true);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // wait for 3 seconds
    refetch();
    setIsRefetching(false);
  };

  return (
    <div className="flex items-center gap-3">
      <div className="inline-flex border border-gray-300 p-1 items-center gap-2">
        <img src={searchimg} alt="" className="w-5 h-5" />
        <input
          value={search}
          type="text"
          placeholder="Search user..."
          className="focus:outline-none"
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>
      <div className="p-[3px] rounded-full border border-gray-300 ">
        <FiRefreshCw className=" cursor-pointer" onClick={HandleRefresh} />
        {/* <img src={Refresh} alt="" className="w-6 h-6 cursor-pointer" /> */}
      </div>
    </div>
  );
};

export default Search;
