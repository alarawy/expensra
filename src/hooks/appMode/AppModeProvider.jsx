import { useEffect } from "react";
import { useLocalStorageState } from "../index";
import { AppModeContext } from "./useAppMode.hooks";

const AppModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    window.matchMedia("(prefers-color-scheme: dark)").matches,
    "isDark"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark-mode", isDarkMode);
    document.documentElement.classList.toggle("light-mode", !isDarkMode);

    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute(
        "content",
        isDarkMode ? "#0f172a" : "#f8fafc"
      );
  }, [isDarkMode]);

  const toggleMode = () => {
    setIsDarkMode((isDark) => !isDark);
  };

  return (
    <AppModeContext.Provider value={{ isDarkMode, toggleMode }}>
      {children}
    </AppModeContext.Provider>
  );
};

export default AppModeProvider;