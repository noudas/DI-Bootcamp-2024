import { LightDarkContext } from "../App";
import { useContext } from "react";

const Header = () => {
  const { mode, setMode } = useContext(LightDarkContext);

  const handleMode = () => {
    setMode(!mode);
  };

  return (
    <header>
      <button onClick={handleMode}>
        Switch to {mode ? 'Light' : 'Dark'} Mode
      </button>
    </header>
  );
};

export default Header;
