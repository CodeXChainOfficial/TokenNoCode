import React from "react";

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;

    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
    size: "small" | "medium" | "large"; // Add size property with specific values
    shape: "rounded" | "square"; // Add shape property with specific values
    variant: "primary" | "secondary" | "tertiary"; 
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button className={`${className}`} {...restProps}>
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
