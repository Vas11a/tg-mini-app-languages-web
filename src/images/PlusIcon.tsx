import React from "react";

type PlusIconProps = {
  color?: string;
  background?: string;
  className?: string;
};

export const PlusIcon: React.FC<PlusIconProps> = ({
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
        d="M9 17a1 1 0 102 0v-6h6a1 1 0 100-2h-6V3a1 1 0 10-2 0v6H3a1 1 0 000 2h6v6z"
      />
    </svg>
  );
};
