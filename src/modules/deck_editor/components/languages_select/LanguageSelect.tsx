import React, { useRef, useState } from "react";
import { languages } from "../../../../state/slices/filters/languages";
import { WorldIcon } from "../../../../images/WorldIcon";

interface Props {
  value: string;
  onChange: (code: string) => void;
  placeholder: string;
  align?: "left" | "right";
}

const LanguageSelect = ({
  value,
  onChange,
  placeholder,
  align = "left",
}: Props) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const selected = languages.find((l) => l.code === value);

  return (
    <div className="flex-1 min-w-0 relative" ref={ref}>
      <div
        onClick={() => setOpen((o) => !o)}
        className={`bg-white cursor-pointer text-dark p-2 py-2 flex items-center gap-2 rounded-lg text-[14px] shadow-[0_1px_2px_rgba(0,0,0,0.04),0_4px_10px_rgba(0,0,0,0.04)] min-w-0 ${open ? "ring-1 ring-primary/60" : ""}`}
      >
        <WorldIcon
          className="w-auto h-4.5 shrink-0"
          color="var(--color-primary)"
        />
        <div
          className={`truncate min-w-0 flex-1 ${selected ? "text-dark" : "text-gray-300"}`}
        >
          {selected ? `${selected.flag} ${selected.nativeLabel}` : placeholder}
        </div>
      </div>
      {open && (
        <div
          className={`absolute z-30 bg-white border border-primary/20 p-2 rounded-xl h-45 overflow-auto flex flex-col gap-1 shadow text-dark top-10.5 text-[16px] ${align === "right" ? "right-0" : "left-0"}`}
          style={{ width: "calc(200% + 32px)" }}
        >
          {languages.map((lang) => (
            <div
              key={lang.code}
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => onChange(lang.code)}
            >
              <div
                className={`w-4.5 h-4.5 shrink-0 rounded-full border-2 border-primary/80 ${value === lang.code ? "bg-primary/80" : "bg-primary/10"}`}
              />
              <span>{lang.flag}</span>
              <span className="truncate">{lang.nativeLabel}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelect;
