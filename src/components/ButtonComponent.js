import React, { ReactNode } from "react";
import { cls } from "../utils/helpers";

const classes = {
  base: "focus:outline-none transition ease-in-out duration-500",
  disabled: "opacity-50 cursor-not-allowed",
  variant: {
    primary:
      "font-semibold rounded-full leading-normal text-zee-white bg-zee-primary hover:bg-zee-primary-hover",
    secondary:
      "relative p-0.5 flex font-semibold items-center leading-normal justify-center overflow-hidden text-sm xl:text-xl font-medium rounded-full text-white group bg-gradient-to-r from-blue-400 to-blue-200 hover:from-blue-200 hover:to-blue-400",
  },
};


export default function ButtonComponent({
  children,
  type = "button",
  className,
  variant = "primary",
  disabled = false,
  spanClass,
  ...props
}) {
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
          className={`relative px-4 py-3 text-lg font-semibold transition-all ease-in rounded-full text-zee-black md:px-6 md:py-4 md:text-xl ${spanClass}`}
        >
          {children}
        </span>
      ) : (
        children
      )}
    </button>
  );
}
