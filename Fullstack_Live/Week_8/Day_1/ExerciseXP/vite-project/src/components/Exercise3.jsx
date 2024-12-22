import "./Exercise.css";

const Exercise = (props) => {

    const style_header = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };

    return (
        <>
            <h1 id="style_header" style={style_header}>Exercise 3</h1>
            <p class="para">Paragraph</p>
            <a href="#">Link</a>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Enter your name" /><br />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" /><br />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" placeholder="Write your message"></textarea><br />

                <label>
                    <input type="checkbox" name="subscribe" />
                    Subscribe to newsletter
                </label><br />

                <label>
                    Gender:
                    <input type="radio" name="gender" value="male" /> Male
                    <input type="radio" name="gender" value="female" /> Female
                </label><br />

                <button type="submit">Submit</button>
            </form>
            <img src="https://robohash.org/P1Q.png?set=set2&size=150x150" alt="Random Robot" />
            <ul>
                <li>listing list</li>
            </ul>
        </>
    );
};

export default Exercise;

