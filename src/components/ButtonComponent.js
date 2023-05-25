import React, { useContext } from "react";
import { cls } from "../utils/helpers";
import { ThemeContext, LoginContext } from "../context/ThemeContext";

export default function ButtonComponent({
  children,
  type = "button",
  className,
  variant = "primary",
  disabled = false,
  spanClass,
  ...props
}) {

  const { isDarkMode } = useContext(ThemeContext);

  const classes = {
    base: "focus:outline-none transition ease-in-out duration-500",
    disabled: "opacity-50 cursor-not-allowed",
    variant: {
      primary:
        `font-semibold rounded-3xl leading-normal hover:bg-button-gradient ${isDarkMode ? "bg-moi-purple-800 text-moi-white-100" : "bg-moi-purple-100 text-moi-purple-600"}`,
      secondary:
        `relative p-0.5 flex font-semibold items-center leading-normal justify-center overflow-hidden text-sm xl:text-xl font-medium rounded-3xl ${isDarkMode ? "bg-moi-purple-800 text-moi-white-100": "bg-moi-purple-100 text-moi-purple-600"}`,
    },
  };

  return (
    <button
      disabled={disabled}
      type={type}
      className={cls(`
                ${classes.base}
                ${classes.variant[variant]}
                ${disabled && classes.disabled}
                ${className}
            `)}
      {...props}
    >
      {variant === "secondary" ? (
        <span
          className={`relative px-4 py-3 text-lg font-semibold transition-all ease-in rounded-3xl lg:px-8 lg:py-2 md:text-xl ${spanClass}`}
        >
          {children}
        </span>
      ) : (
        children
      )}
    </button>
  );
}
