import { PlusIcon } from "../../images/PlusIcon";
import type { IPage } from "../../types/general.types";
import { ProfileIcon } from "../../images/ProfileIcon";
import { DeckIcon } from "../../images/DeckIcon";

interface Props {
  setPage: (page: IPage) => void;
  page: IPage;
}

const NavigationModule = ({ setPage, page }: Props) => {
  return (
    <div className="relative  w-full py-2 flex justify-between bg-primary/10 shadow border-primary/30 border-b-4 rounded-2xl">
      <div
        className="absolute h-13 w-13 rounded-full z-20 -top-4 outline-4 outline-primary/20 bg-primary/80 flex justify-center items-center "
        style={{ left: "calc(50% - 26px)" }}
      >
        <PlusIcon className="w-8 h-auto" color="var(--color-white)" />
      </div>
      {/* <div
        className="absolute h-15 w-15 rounded-full z-10 -top-5 bg-white "
        style={{ left: "calc(50% - 30px)" }}
      ></div> */}
      <div
        onClick={() => setPage("home")}
        className={`relative duration-300 cursor-pointer flex flex-col gap-1 flex-1 justify-center items-center`}
      >
        <div className="absolute rounded-2xl pointer-events-none"></div>
        <DeckIcon
          className={`w-5 h-auto ${page === "home" ? "" : "opacity-30"}`}
          color="var(--color-primary)"
        />
        <div
          className={`text-xs select-none ${page === "home" ? "text-primary" : "text-primary/40"}`}
        >
          decks
        </div>
      </div>
      <div
        onClick={() => setPage("profile")}
        className={`relative duration-300 flex cursor-pointer flex-col gap-1 flex-1 justify-center items-center`}
      >
        <div className="absolute rounded-2xl pointer-events-none"></div>
        <ProfileIcon
          className={`w-5 h-auto ${page === "profile" ? "" : "opacity-30"}`}
          color="var(--color-primary)"
        />
        <div
          className={`text-xs select-none ${page === "profile" ? "text-primary" : "text-primary/40"}`}
        >
          profile
        </div>
      </div>
    </div>
  );
};

export default NavigationModule;
