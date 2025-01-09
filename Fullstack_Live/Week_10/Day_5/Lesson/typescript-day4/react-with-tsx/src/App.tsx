import "./App.css";
import Heading from "./components/Heading";
import Section from "./components/Section";
import List from "./components/List";

import {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
  ChangeEvent,
  ChangeEventHandler,
  MouseEvent,
  KeyboardEvent,
  createContext,
} from "react";

type Monster = {
  id: number;
  username: string;
};

interface AuthI {
  token: string;
  userid: string;
}

export const AuthContext = createContext<AuthI | null>(null);

function App() {
  const [count, setCount] = useState<number | null>(null);
  const [monsters, setMonsters] = useState<Monster[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);
  const strRef = useRef<string>("abc");

  const heavyTask = (): number => 100;

  const result = useMemo<number>(() => heavyTask(), []);

  const testFunc = useCallback((): void => {
    console.log("t");
  }, []);

  useEffect(() => {
    return (): void => console.log("unmount");
  }, []);

  //const handleChenge = (e: ChangeEvent<HTMLInputElement>): void => {
  const handleChenge: ChangeEventHandler<HTMLInputElement> = (e): void => {
    console.log(e.target.value);
  };

  const handleClick = (
    e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
  ) => {
    console.log(e);
  };

  return (
    <>
      <Heading title={"My Amazing Tittle"} subtitle='my sub title' />
      <Section>My Section Children</Section>
      <List items={["a", "b", 1, 2]} />
      <input onChange={(e) => handleChenge(e)} />
      <button onClick={handleClick}> Click </button>
    </>
  );
}

export default App;
