import { useState } from "react"
import { useRef } from "react"

const Display = () => {
    const inputRef = useRef(null); //Reference for the input text element
    const [textLength, setTextLength] = useState(0);

    const handleInputChange = () =>{
        const length = inputRef.current.value.length
        setTextLength(length);
    }

    return (
        <div>
          <input
            ref={inputRef} // Attach the ref to the input
            type="text"
            onInput={handleInputChange} // Attach the event handler
            placeholder="Type something..."
          />
          <p>Character Count: {textLength}</p> {/* Display the counter */}
        </div>
      );
    };
    
export default Display;