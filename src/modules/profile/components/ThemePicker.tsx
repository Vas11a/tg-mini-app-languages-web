import {
  themes,
  getThemePrimary,
  type ThemeId,
} from "../../../config/themes.config";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { setTheme } from "../../../state/slices/user/userSlice";

const ThemePicker = () => {
  const dispatch = useAppDispatch();
  const currentTheme = useAppSelector((state) => state.user.theme);

  return (
    <div className="flex flex-col gap-3">
      <div className="text-dark/50 text-[12px] font-medium uppercase tracking-wider px-1">
        Appearance
      </div>
      <div className="bg-white rounded-2xl shadow-[0_1px_2px_rgba(0,0,0,0.04),0_4px_10px_rgba(0,0,0,0.06)] p-2 flex gap-2">
        {themes.map((theme) => {
          const primary = getThemePrimary(theme.id)!;
          const isActive = currentTheme === theme.id;

          return (
            <button
              key={theme.id}
              onClick={() => dispatch(setTheme(theme.id as ThemeId))}
              className="flex-1 flex flex-col items-center gap-1.5 py-2.5 rounded-xl transition-all duration-200 cursor-pointer"
              style={{
                backgroundColor: isActive ? primary + "18" : "transparent",
              }}
            >
              <div
                className="w-5 h-5 rounded-full"
                style={{ backgroundColor: primary }}
              />
              <span
                className="text-[10px] font-semibold"
                style={{ color: isActive ? primary : "#00000055" }}
              >
                {theme.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ThemePicker;
