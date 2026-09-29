import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline";
};

export default function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition";

  const variants = {
    primary:
      "bg-black text-white hover:bg-gray-800",
    secondary:
      "bg-gray-100 text-gray-900 hover:bg-gray-200",
    outline:
      "border border-gray-300 bg-white text-gray-900 hover:bg-gray-50",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}