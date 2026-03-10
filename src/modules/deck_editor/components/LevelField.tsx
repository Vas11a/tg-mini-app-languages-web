import LevelSelect from "./LevelSelect";

interface Props {
  value: string;
  onChange: (v: string) => void;
}

const LevelField = ({ value, onChange }: Props) => {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="text-dark/50 text-[12px] font-medium uppercase tracking-wider px-1">
        Level
      </div>
      <LevelSelect value={value} onChange={onChange} />
    </div>
  );
};

export default LevelField;