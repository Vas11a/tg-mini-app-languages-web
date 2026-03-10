interface Props {
  value: string;
  onChange: (v: string) => void;
}

const WordsField = ({ value, onChange }: Props) => {
  const wordCount = value.split("\n").filter((l) => l.trim()).length;

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between px-1">
        <div className="text-dark/50 text-[12px] font-medium uppercase tracking-wider">
          Words
        </div>
        {wordCount > 0 && (
          <div className="text-primary/60 text-[12px]">
            {wordCount} {wordCount === 1 ? "word" : "words"}
          </div>
        )}
      </div>
      <textarea
        placeholder={"Enter words, one per line\ne.g. apple — яблуко"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={9}
        className="w-full text-dark bg-white focus:ring-1 focus:ring-primary/80 placeholder:text-gray-300 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_4px_10px_rgba(0,0,0,0.04)] rounded-lg text-[15px] p-2.5 resize-none leading-relaxed outline-none"
      />
    </div>
  );
};

export default WordsField;