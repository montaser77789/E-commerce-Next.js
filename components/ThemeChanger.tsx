"use client";
import { useTheme } from "next-themes";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center space-x-2">
      <MdDarkMode
        size={25}
        className="cursor-pointer  text-textcolor "
        onClick={() => setTheme("dark")}
      />
      <CiLight
        size={25}
        className="cursor-pointer text-textcolor"
        onClick={() => setTheme("light")}
      />
    </div>
  );
};
export default ThemeChanger;
