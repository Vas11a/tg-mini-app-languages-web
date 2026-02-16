import React from "react";

type TodoIconProps = {
  color?: string;
  background?: string;
  className?: string;
};

export const TodoIcon: React.FC<TodoIconProps> = ({
  color = "currentColor",
  background,
  className,
}) => {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={className}
    >
      {background && (
        <rect x="0" y="0" width="32" height="32" rx="4" fill={background} />
      )}

      <path
        fill={color}
        d="M26.66 9.63a.25.25 0 0 1 0-.07 4.28 4.28 0 0 0-.79-1.15L20.59 3.17A4 4 0 0 0 17.76 2H8a3 3 0 0 0-3 3v22a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V11.24a4 4 0 0 0-.34-1.61ZM20 5.41 23.59 9H21a1 1 0 0 1-1-1ZM25 27a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h9.76L18 4v4a3 3 0 0 0 3 3h4a1.94 1.94 0 0 1 0 .24Z"
      />

      <path
        fill={color}
        d="M12.29 19.29 11 20.59l-.29-.3a1 1 0 0 0-1.42 1.42l1 1a1 1 0 0 0 1.42 0l2-2a1 1 0 0 0-1.42-1.42Z"
      />

      <path
        fill={color}
        d="M12.29 13.29 11 14.59l-.29-.3a1 1 0 0 0-1.42 1.42l1 1a1 1 0 0 0 1.42 0l2-2a1 1 0 0 0-1.42-1.42Z"
      />

      <path fill={color} d="M22 14h-5a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2Z" />

      <path fill={color} d="M22 20h-5a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2Z" />
    </svg>
  );
};
