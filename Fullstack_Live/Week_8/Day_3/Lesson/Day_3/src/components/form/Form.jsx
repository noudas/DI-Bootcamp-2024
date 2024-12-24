import { useState } from "react";

const Form = (props) =>{

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(name);
        console.log(selectedOption);
    }

    const [name,Setname] = useState();
    const [selectedOption, setSelectedOption] = useState();

    return (
        <>
          <h2>React Forms</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Type something..."
              onChange={(e) => Setname(e.target.value)}
            />
        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option value="" disabled>
            Choose an option
          </option>
          <option value="Option1">Option 1</option>
          <option value="Option2">Option 2</option>
          <option value="Option3">Option 3</option>
        </select>
            <button type="submit">Submit</button>
          </form>
        </>
      );
    };
    
    export default Form;