import React from "react";
import { SearchIcon } from "../../images/SearchIcon";
import { WorldIcon } from "../../images/WorldIcon";
import { BarChartIcon } from "../../images/BarChartIcon";

const SearchComponent = () => {
  return (
    <div className="p-2 flex flex-col gap-2 rounded-2xl bg-primary/15">
      <div className="relative flex justify-between ">
        <input
          type="text"
          placeholder="Search"
          className="w-full pr-7 text-dark bg-white focus:outline-0 focus:border focus:border-primary  placeholder:text-gray-300 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_4px_10px_rgba(0,0,0,0.04)] rounded-lg text-[16px]  p-2.5 py-2"
        />
        <SearchIcon
          className="w-auto h-6 absolute opacity-80 top-2 right-2"
          color="var(--color-primary)"
        />
      </div>
      <div className="flex items-center gap-2">
        <div className="flex-1 bg-white text-dark p-2 py-2 flex items-center gap-2 rounded-lg text-[14px]   shadow-[0_1px_2px_rgba(0,0,0,0.04),0_4px_10px_rgba(0,0,0,0.04)]">
          <WorldIcon className="w-auto h-4.5" color="var(--color-primary)" />
          <div>All languaged</div>
        </div>
        <div className="flex-1 bg-white text-dark p-2 py-2 flex items-center gap-2 rounded-lg text-[14px]   shadow-[0_1px_2px_rgba(0,0,0,0.04),0_4px_10px_rgba(0,0,0,0.04)]">
          <BarChartIcon className="w-auto h-4.5" color="var(--color-primary)" />
          <div>All levels</div>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
