import React from "react";

type SearchIconProps = {
  color?: string;
  background?: string;
  size?: number;
  strokeWidth?: number;
  className?: string;
};

export const SearchIcon: React.FC<SearchIconProps> = ({
  color = "currentColor",
  background,
  size,
  strokeWidth = 2,
  className,
}) => {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {background && (
        <rect x="0" y="0" width="24" height="24" rx="6" fill={background} />
      )}

      <path
        d="M11 6C13.7614 6 16 8.23858 16 11"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M16.6588 16.6549L21 21"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
