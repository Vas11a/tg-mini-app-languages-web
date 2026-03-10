import { ArrowIcon } from "../../../../images/ArrowIcon";
import LanguageSelect from "./LanguageSelect";

interface Props {
  fromLang: string;
  toLang: string;
  onFromChange: (code: string) => void;
  onToChange: (code: string) => void;
}

const LanguagesField = ({
  fromLang,
  toLang,
  onFromChange,
  onToChange,
}: Props) => {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="text-dark/50 text-[12px] font-medium uppercase tracking-wider px-1">
        Languages
      </div>
      <div className="flex items-center gap-2">
        <LanguageSelect
          value={fromLang}
          onChange={onFromChange}
          placeholder="From"
          align="left"
        />
        <ArrowIcon
          className="w-4 h-4 shrink-0 rotate-180"
          color="var(--color-primary)"
        />
        <LanguageSelect
          value={toLang}
          onChange={onToChange}
          placeholder="To"
          align="right"
        />
      </div>
    </div>
  );
};

export default LanguagesField;
