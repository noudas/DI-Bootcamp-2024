import { useState } from "react";
const Voiting = () => {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaSript", votes: 0 },
    { name: "Java", votes: 0 },
  ]);

  const vote = (lang) => {
    // languages[i].votes++;
    lang.votes++;
    console.log(languages);
    setLanguages([...languages]);
  };
  return (
    <>
      <h2>Voiting App</h2>
      {languages.map((item, indx) => {
        return (
          <div key={indx}>
            {item.name} {item.votes}
            <button onClick={() => vote(item)}> Vote ! </button>
          </div>
        );
      })}
    </>
  );
};
export default Voiting;
