import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Switch } from '@headlessui/react';
import { classNames } from '../utils/helpers';

const ToggleComponent = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="flex items-center">
      <Switch
        checked={isDarkMode}
        onChange={toggleTheme}
        className="group relative inline-flex h-5 w-[40px] bg-white flex-shrink-0 cursor-pointer items-center justify-center rounded-full"
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute h-full w-full rounded-md bg-white"
        />
        <span
          aria-hidden="true"
          className={classNames(
            isDarkMode ? "bg-indigo-600" : "bg-gray-200",
            "pointer-events-none absolute mx-auto h-4 w-9 rounded-full transition-colors duration-200 ease-in-out"
          )}
        />
        {isDarkMode ? <span
          aria-hidden="true"
          className={classNames(
            isDarkMode ? "translate-x-5" : "translate-x-0",
            "pointer-events-none absolute left-0 inline-block h-10 w-10 transform rounded-full border border-gray-200 bg-moi-light-toggle bg-blue-400 bg-no-repeat shadow ring-0 transition-transform duration-200 ease-in-out"
          )}
        /> : <span
        aria-hidden="true"
        className={classNames(
          isDarkMode ? "translate-x-5" : "translate-x-0",
          "pointer-events-none absolute left-0 inline-block h-10 w-10 transform rounded-full border border-gray-200 bg-moi-dark-toggle bg-no-repeat shadow ring-0 transition-transform duration-200 ease-in-out"
        )}
      />}
      </Switch>
    </div>
  );
};

export default ToggleComponent;
