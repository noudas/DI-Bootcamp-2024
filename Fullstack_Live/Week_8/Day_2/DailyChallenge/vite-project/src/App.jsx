import { useState } from "react";
import "./App.css";
import Language from "./components/Language";

function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 },
  ]);

  const handleVote = (index) => {
    const updatedLanguages = [...languages];
    updatedLanguages[index].votes += 1;
    setLanguages(updatedLanguages);
  };

  return (
    <>
      <h1>Vote for Your Favorite Language</h1>
      <div className="languageContainer">
        {languages.map((language, index) => (
          <Language
            key={index}
            info={language}
            onVote={() => handleVote(index)}
          />
        ))}
      </div>
    </>
  );
}

export default App;
