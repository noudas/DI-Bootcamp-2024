import { useContext } from "react";
import { LightmodeDarkmode } from "../App";

const Button = () => {
    const { mode, setMode } = useContext(LightmodeDarkmode);

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

    export default Button;