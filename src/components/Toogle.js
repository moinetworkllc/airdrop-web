import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Switch } from "@headlessui/react";
import { classNames } from "../utils/helpers";

const ToggleComponent = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="flex items-center">
      <Switch
        checked={true}
        onChange={toggleTheme}
        className={classNames(
          !isDarkMode ? "!bg-gray-700 flow-root" : "!bg-gray-200 inline-flex",
          "relative h-8 w-16 flex-shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out"
        )}
      >
        <span className="sr-only">Use setting</span>
        <span
          className={classNames(
            !isDarkMode
              ? "translate-x-5 bg-black "
              : "translate-x-0  bg-yellow-500 ",
            "pointer-events-none relative inline-block h-8 w-8 transform rounded-full shadow ring-0 transition duration-500 ease-in-out"
          )}
        >
          <span
            className={classNames(
              isDarkMode
                ? "opacity-100 duration-200 ease-in"
                : "opacity-0 duration-100 ease-out",
              "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
            )}
            aria-hidden="true"
          >
            <svg
              className="h-5 w-8 text-moi-white-100"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </span>

          <span
            className={classNames(
              isDarkMode
                ? "opacity-0 duration-100 ease-out"
                : "opacity-100 duration-200 ease-in",
              "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
            )}
            aria-hidden="true"
          >
            <svg
              className="h-5 w-8 text-moi-white-100"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          </span>
        </span>
      </Switch>
    </div>
  );
};

export default ToggleComponent;
