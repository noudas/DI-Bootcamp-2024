import { LightDarkContext } from "../App";
import { useContext } from "react";

const Main = () => {
  const { mode } = useContext(LightDarkContext);

  return (
    <main>
      <h2>{mode ? 'Dark Mode' : 'Light Mode'}</h2>
      <p>The current theme is applied to this section.</p>
    </main>
  );
};

export default Main;
