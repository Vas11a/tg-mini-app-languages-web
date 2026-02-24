import { useEffect, useRef, useState } from "react";
import { WorldIcon } from "../../images/WorldIcon";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import {
  setCustomUserLanguages,
  setLanguages,
} from "../../state/slices/filters/filtersSlice";
import { languages, type Language } from "../../state/slices/filters/languages";
import { PlusIcon } from "../../images/PlusIcon";
import { MinusIcon } from "../../images/MinusIcon";
import { formatTitle } from "./utils";

const LanguagesDropdown = () => {
  const { selectedLanguages, customUserLanguages } = useAppSelector(
    (state) => state.filters,
  );
  const dispatch = useAppDispatch();

  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const [localSelectedLanguages, setLocalSelectedLanguages] =
    useState(selectedLanguages);
  const [localCustomUserLanguages, setLocalCustomUserLanguages] =
    useState(customUserLanguages);

  useEffect(() => {
    setLocalSelectedLanguages(selectedLanguages);
    setLocalCustomUserLanguages(
      customUserLanguages.length === 0 ? [""] : customUserLanguages,
    );
  }, [selectedLanguages, customUserLanguages]);

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
  }, [isDropDownOpen, localSelectedLanguages, localCustomUserLanguages]);

  const changeLocalCustomUserLanguages = (lang: string, idx: number) => {
    const newCustomUserLanguages = [...localCustomUserLanguages];
    newCustomUserLanguages[idx] = lang;
    setLocalCustomUserLanguages(newCustomUserLanguages);
  };

  const addNewCustomLanguageField = () => {
    if (localCustomUserLanguages[localCustomUserLanguages.length - 1] === "") {
      return;
    }
    const newCustomUserLanguages = [...localCustomUserLanguages];
    newCustomUserLanguages.push("");
    setLocalCustomUserLanguages(newCustomUserLanguages);
  };

  const removeCustomLanguageField = (idx: number) => {
    const newCustomUserLanguages = [...localCustomUserLanguages];
    newCustomUserLanguages.splice(idx, 1);
    setLocalCustomUserLanguages(newCustomUserLanguages);
  };

  const toggleLocalSelectedLanguages = (lang: Language["code"]) => {
    const newSelectedLanguages = [...localSelectedLanguages];
    if (newSelectedLanguages.includes(lang)) {
      newSelectedLanguages.splice(newSelectedLanguages.indexOf(lang), 1);
    } else {
      newSelectedLanguages.push(lang);
    }
    setLocalSelectedLanguages(newSelectedLanguages);
  };

  const commitChanges = () => {
    dispatch(setLanguages(localSelectedLanguages));

    dispatch(
      setCustomUserLanguages(
        localCustomUserLanguages.map((l) => l.trim()).filter((l) => l !== ""),
      ),
    );
  };

  const closeDropdown = () => {
    commitChanges();
    setIsDropDownOpen(false);
  };

  const getDropDownTitle = () => {
    const noBase = localSelectedLanguages.length === 0;

    const noCustom =
      localCustomUserLanguages.length === 1 &&
      localCustomUserLanguages[0] === "";

    if (noBase && noCustom) {
      return "All languages";
    }

    const parts: string[] = [];

    if (localSelectedLanguages.length > 0) {
      parts.push(...localSelectedLanguages);
    }

    const cleanedCustom = localCustomUserLanguages
      .map((l) => l.trim())
      .filter(Boolean);

    if (cleanedCustom.length > 0) {
      parts.push(...cleanedCustom);
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
        className={` bg-white cursor-pointer text-dark p-2 py-2 flex items-center gap-2 rounded-lg text-[14px]   shadow-[0_1px_2px_rgba(0,0,0,0.04),0_4px_10px_rgba(0,0,0,0.04)] ${isDropDownOpen ? "outline outline-primary/60" : ""}`}
      >
        <WorldIcon className="w-auto h-4.5" color="var(--color-primary)" />
        <div>{getDropDownTitle()}</div>
      </div>
      {isDropDownOpen && (
        <div
          style={{ width: "calc(200% + 8px)" }}
          className="absolute w-full cursor-pointer border border-primary/20 z-30 bg-white p-2 rounded-xl h-45 overflow-auto flex flex-col gap-1 shadow text-dark top-10.5 text-[16px]"
        >
          {/* <div className="font-medium mb-1">Base languages</div> */}
          {languages.map((lang) => (
            <div
              className="flex items-center gap-2"
              onClick={() => toggleLocalSelectedLanguages(lang.code)}
              key={lang.code}
            >
              <div
                className={`w-4.5 h-4.5 rounded border-2 border-primary/80  ${localSelectedLanguages.includes(lang.code) ? "bg-primary/80" : "bg-primary/10"}`}
              ></div>
              <div className="flex items-center gap-1">
                <span>{lang.flag}</span>
                <span>{lang.nativeLabel}</span>
              </div>
            </div>
          ))}
          <div className="mt-2">
            {/* <div className="font-medium mb-1">Can't find your language?</div> */}
            <div className="flex flex-col gap-1.5">
              {localCustomUserLanguages.map((lang, idx) => (
                <div className="flex gap-2 items-center" key={idx}>
                  <input
                    type="text"
                    value={lang}
                    onChange={(e) =>
                      changeLocalCustomUserLanguages(e.target.value, idx)
                    }
                    placeholder="Other language…"
                    className=" w-1/2 text-[15px] text-dark-main p-0.5 px-1 border-b-2 border-primary/60 focus:outline-none focus:border-primary"
                  />
                  {idx === localCustomUserLanguages.length - 1 ? (
                    <div
                      onClick={addNewCustomLanguageField}
                      className={`flex justify-center items-center border-2 border-primary/80  w-fit px-2 rounded-lg py-0.5`}
                    >
                      <PlusIcon color="#F79C42" className="w-5 h-5" />
                    </div>
                  ) : (
                    <div
                      onClick={() => removeCustomLanguageField(idx)}
                      className="flex justify-center items-center border-2 border-primary/80  w-fit px-2 rounded-lg py-0.5"
                    >
                      <MinusIcon color="#F79C42" className="w-5 h-5" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguagesDropdown;
