import { FaMoon } from "react-icons/fa";
import { BsFillSunFill } from "react-icons/bs";

export default function Header({ changeTheme, theme }) {
  return (
    <header className="container__header">
      <span className="container__logo">TODO</span>
      <span
        className="container__theme"
        onClick={() => changeTheme(theme === "light" ? "dark" : "light")}
      >
        <div className="container__icon">
          {theme === "light" ? <FaMoon /> : <BsFillSunFill />}
        </div>
      </span>
    </header>
  );
}
