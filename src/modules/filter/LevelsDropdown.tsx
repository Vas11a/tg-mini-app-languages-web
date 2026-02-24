import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { levels, type LanguageLevel } from "../../state/slices/filters/levels";
import { setLevels } from "../../state/slices/filters/filtersSlice";
import { formatTitle } from "./utils";
import { BarChartIcon } from "../../images/BarChartIcon";

const LevelsDropdown = () => {
  const { selectedLevels } = useAppSelector((state) => state.filters);
  const dispatch = useAppDispatch();

  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const [localSelectedLevels, setLocalSelectedLevels] =
    useState(selectedLevels);

  useEffect(() => {
    setLocalSelectedLevels(selectedLevels);
  }, [selectedLevels]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        if (isDropDownOpen) {
          closeDropdown();
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropDownOpen, localSelectedLevels]);

  const toggleLocalSelectedLevels = (lang: LanguageLevel["value"]) => {
    const newSelectedLevels = [...localSelectedLevels];
    if (newSelectedLevels.includes(lang)) {
      newSelectedLevels.splice(newSelectedLevels.indexOf(lang), 1);
    } else {
      newSelectedLevels.push(lang);
    }
    setLocalSelectedLevels(newSelectedLevels);
  };

  const commitChanges = () => {
    dispatch(setLevels(localSelectedLevels));
  };

  const closeDropdown = () => {
    commitChanges();
    setIsDropDownOpen(false);
  };

  const getDropDownTitle = () => {
    const noBase = localSelectedLevels.length === 0;

    if (noBase) {
      return "All levels";
    }

    const parts: string[] = [];

    if (localSelectedLevels.length > 0) {
      parts.push(...localSelectedLevels);
    }
    const title = parts.join(", ");

    return formatTitle(title);
  };

  return (
    <div className="flex-1 relative" ref={dropdownRef}>
      <div
        onClick={() =>
          isDropDownOpen ? closeDropdown() : setIsDropDownOpen(true)
        }
        className={`flex-1 bg-white text-dark p-2 py-2 flex items-center gap-2 rounded-lg text-[14px]   shadow-[0_1px_2px_rgba(0,0,0,0.04),0_4px_10px_rgba(0,0,0,0.04)] ${isDropDownOpen ? "outline outline-primary/60" : ""}`}
      >
        <BarChartIcon className="w-auto h-4.5" color="var(--color-primary)" />
        <div>{getDropDownTitle()}</div>
      </div>
      {isDropDownOpen && (
        <div
          style={{ width: "calc(200% + 8px)" }}
          className="absolute right-0 w-full cursor-pointer border border-primary/20 z-30 bg-white p-2 rounded-xl h-45 overflow-auto flex flex-col gap-1 shadow text-dark top-10.5 text-[16px]"
        >
          {/* <div className="font-medium mb-1">Base languages</div> */}
          {levels.map((level) => (
            <div
              className="flex items-center gap-2"
              onClick={() => toggleLocalSelectedLevels(level.value)}
              key={level.value}
            >
              <div
                className={`w-4.5 h-4.5 rounded border-2 border-primary/80  ${localSelectedLevels.includes(level.value) ? "bg-primary/80" : "bg-primary/10"}`}
              ></div>
              <div className="flex items-center gap-1">
                <span>
                  {level.label} - {level.fullLabel}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LevelsDropdown;
