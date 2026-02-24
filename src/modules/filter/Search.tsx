import React, { useEffect, useState } from "react";
import { SearchIcon } from "../../images/SearchIcon";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setSearch } from "../../state/slices/filters/filtersSlice";

const Search = () => {
  const dispatch = useAppDispatch();
  const reduxSearch = useAppSelector((state) => state.filters.search);

  const [localSearch, setLocalSearch] = useState(reduxSearch);

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(setSearch(localSearch));
    }, 500);

    return () => clearTimeout(timeout);
  }, [localSearch, dispatch]);
  return (
    <div className="relative flex justify-between ">
      <input
        type="text"
        placeholder="Search"
        value={localSearch}
        onChange={(e) => setLocalSearch(e.target.value)}
        className="w-full pr-7 text-dark bg-white focus:outline-1 focus:outline-primary/80  placeholder:text-gray-300 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_4px_10px_rgba(0,0,0,0.04)] rounded-lg text-[16px]  p-2.5 py-2"
      />
      <SearchIcon
        className="w-auto h-6 absolute opacity-80 top-2 right-2"
        color="var(--color-primary)"
      />
    </div>
  );
};

export default Search;
