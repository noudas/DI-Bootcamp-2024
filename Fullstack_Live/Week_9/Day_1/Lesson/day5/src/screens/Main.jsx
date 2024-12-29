import { useContext } from "react";
import { ThemeModeContext } from "../AppThemeMode";
const Main = (props) => {
  const { mode } = useContext(ThemeModeContext);
  return (
    <div className={mode === "light" ? "light" : "dark"}>
      <h2>Main Screen</h2>
    </div>
  );
};
export default Main;
