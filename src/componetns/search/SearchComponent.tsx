import React from "react";
import { SearchIcon } from "../../images/SearchIcon";

const SearchComponent = () => {
  return (
    <div className="relative flex justify-between ">
      <input
        type="text"
        placeholder="Search"
        className="w-full pr-7 bg-white focus:outline-0 focus:bg-primary/5 placeholder:text-primary/50 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_4px_10px_rgba(0,0,0,0.04)] rounded-lg text-[16px]  p-2.5"
      />
      <SearchIcon
        className="w-auto h-6 absolute opacity-80 top-2.5 right-2"
        color="var(--color-primary)"
      />
    </div>
  );
};

export default SearchComponent;
