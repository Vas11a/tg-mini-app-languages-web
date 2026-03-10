import { themes, getThemePrimary, type ThemeId } from "../../../config/themes.config";
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
      <div className="bg-white rounded-2xl shadow-[0_1px_2px_rgba(0,0,0,0.04),0_4px_10px_rgba(0,0,0,0.06)] p-4 flex justify-between items-center">
        {themes.map((theme) => {
          const primary = getThemePrimary(theme.id)!;
          const isActive = currentTheme === theme.id;

          return (
            <button
              key={theme.id}
              onClick={() => dispatch(setTheme(theme.id as ThemeId))}
              className="flex flex-col items-center gap-2 cursor-pointer"
            >
              <div
                className="w-7 h-7 rounded-full transition-all duration-200"
                style={{
                  backgroundColor: primary,
                  boxShadow: isActive
                    ? `0 0 0 2px white, 0 0 0 4px ${primary}`
                    : "none",
                }}
              />
              <span
                className="text-[11px] font-medium"
                style={{ color: isActive ? primary : undefined }}
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
