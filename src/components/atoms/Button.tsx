import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "success" | "danger";
  className?: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  variant = "primary",
  className = "",
  disabled = false,
  onClick,
}) => {
  const baseStyle =
    "px-4 py-2 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-jasglynn-green text-white hover:bg-jasglynn-green/90 focus:ring-jasglynn-green/50",
    secondary:
      "bg-jasglynn-sky text-jasglynn-gray hover:bg-jasglynn-sky/90 focus:ring-jasglynn-sky/50",
    success:
      "bg-jasglynn-lime text-jasglynn-gray hover:bg-jasglynn-lime/90 focus:ring-jasglynn-lime/50",
    danger:
      "bg-jasglynn-coral text-white hover:bg-jasglynn-coral/90 focus:ring-jasglynn-coral/50",
  };

  return (
    <button
      type={type}
      className={`${baseStyle} ${variants[variant]} ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
