import React, { useRef, useState } from "react";
import { levels } from "../../../state/slices/filters/levels";
import { BarChartIcon } from "../../../images/BarChartIcon";

interface Props {
  value: string;
  onChange: (v: string) => void;
}

const LevelSelect = ({ value, onChange }: Props) => {
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

  const selected = levels.find((l) => l.value === value);

  return (
    <div className="relative" ref={ref}>
      <div
        onClick={() => setOpen((o) => !o)}
        className={`bg-white cursor-pointer text-dark p-2 py-2 flex items-center gap-2 rounded-lg text-[14px] shadow-[0_1px_2px_rgba(0,0,0,0.04),0_4px_10px_rgba(0,0,0,0.04)] ${open ? "ring-1 ring-primary/60" : ""}`}
      >
        <BarChartIcon className="w-auto h-4.5 shrink-0" color="var(--color-primary)" />
        <div className={selected ? "text-dark" : "text-gray-300"}>
          {selected ? `${selected.label} — ${selected.fullLabel}` : "Select level"}
        </div>
      </div>
      {open && (
        <div className="absolute w-full z-30 bg-white border border-primary/20 p-2 rounded-xl overflow-auto flex flex-col gap-1 shadow text-dark top-10.5 text-[16px]">
          {levels.map((level) => (
            <div
              key={level.value}
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => onChange(level.value)}
            >
              <div
                className={`w-4.5 h-4.5 shrink-0 rounded-full border-2 border-primary/80 ${value === level.value ? "bg-primary/80" : "bg-primary/10"}`}
              />
              <span>
                {level.label} — {level.fullLabel}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LevelSelect;