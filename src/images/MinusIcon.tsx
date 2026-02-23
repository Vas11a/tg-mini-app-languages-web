import React from "react";

type MinusIconProps = {
  color?: string;
  background?: string;
  className?: string;
};

export const MinusIcon: React.FC<MinusIconProps> = ({
  color = "currentColor",
  background,
  className,
}) => {
  return (
    <svg
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={className}
    >
      {background && (
        <rect x="0" y="0" width="20" height="20" rx="4" fill={background} />
      )}

      <path
        fill={color}
        fillRule="evenodd"
        d="M3 9a1 1 0 000 2h14a1 1 0 100-2H3z"
      />
    </svg>
  );
};
