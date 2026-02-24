import { SearchIcon } from "../../images/SearchIcon";
import { BarChartIcon } from "../../images/BarChartIcon";
import LanguagesDropdown from "./LanguagesDropdown";
import LevelsDropdown from "./LevelsDropdown";
import Search from "./Search";

const FilterModule = () => {
  return (
    <div className="p-2 flex flex-col gap-2 rounded-2xl bg-primary/15">
      <Search />
      <div className="flex items-center gap-2">
        <LanguagesDropdown />
        <LevelsDropdown />
      </div>
    </div>
  );
};

export default FilterModule;
