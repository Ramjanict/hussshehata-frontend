import React, { type ReactNode } from "react";

interface CommonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  editClassName?: string;
  variant?: "edit" | "delete";
}

const ActionButton: React.FC<CommonButtonProps> = ({
  children,
  className = "",
  variant = "edit",
  editClassName = "",
  ...props
}) => {
  const baseClasses =
    "py-2 px-3 rounded-md font-medium transition text-base cursor-pointer flex items-center justify-center gap-1";
  const variantClasses = {
    edit: ` bg-blue text-white ${editClassName}`,
    delete: "bg-white border border-[#FFA2A2] text-[#E7000B]",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default ActionButton;
