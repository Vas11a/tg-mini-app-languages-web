interface Props {
  value: string;
  onChange: (v: string) => void;
}

const DeckNameField = ({ value, onChange }: Props) => {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="text-dark/50 text-[12px] font-medium uppercase tracking-wider px-1">
        Deck name
      </div>
      <input
        type="text"
        placeholder="e.g. Basic Words"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full text-dark bg-white focus:ring-1 focus:ring-primary/80 placeholder:text-gray-300 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_4px_10px_rgba(0,0,0,0.04)] rounded-lg text-[16px] p-2.5 py-2 outline-none"
      />
    </div>
  );
};

export default DeckNameField;