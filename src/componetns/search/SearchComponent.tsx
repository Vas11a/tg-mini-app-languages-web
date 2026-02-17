import React from "react";
import { SearchIcon } from "../../images/SearchIcon";

const SearchComponent = () => {
  return (
    <div className="relative flex justify-between ">
      <input
        type="text"
        placeholder="Search deck title"
        className="w-full border-2 смо border-primary/50 pr-7 rounded-lg text-[16px]  p-2 focus:outline-primary/80"
      />
      <SearchIcon
        className="w-auto h-5 absolute opacity-80 top-3 right-2"
        color="var(--color-primary)"
      />
    </div>
  );
};

export default SearchComponent;
