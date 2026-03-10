import type { IPage } from "../../../types/general.types";
import { ArrowIcon } from "../../../images/ArrowIcon";

interface Props {
  title: string;
  setPage: (page: IPage) => void;
  onSave: () => void;
}

const DeckEditorHeader = ({ title, setPage, onSave }: Props) => {
  return (
    <div className="flex items-center gap-3">
      <div
        onClick={() => setPage("home")}
        className="w-8 h-8 rounded-xl bg-primary/10 flex justify-center items-center cursor-pointer shrink-0"
      >
        <ArrowIcon className="w-4 h-4" color="var(--color-primary)" />
      </div>
      <div className="text-dark font-semibold text-lg flex-1 truncate">
        {title || "New deck"}
      </div>
      <div
        onClick={onSave}
        className="text-primary font-medium text-[15px] cursor-pointer shrink-0 px-2 py-1 rounded-lg active:opacity-60 select-none"
      >
        Save
      </div>
    </div>
  );
};

export default DeckEditorHeader;
