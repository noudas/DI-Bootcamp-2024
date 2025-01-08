import { useRef } from "react"
import { useAppDispatch } from "./hooks";
import { addBook } from "./state/slice";

const BookPost = (props) =>{
    const dispatch = useAppDispatch();
    const refTitle = useRef();
    const refAuthor = useRef();
    const refGenre = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        const title = refTitle.current.value;
        const author = refAuthor.current.value;
        const genre = refGenre.current.value;

        if (title && author && genre) {
            dispatch(addBook({ title, author, genre }));
            refTitle.current.value = "";
            refAuthor.current.value = "";
            refGenre.current.value = "";
        }
    };

return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input id="title" type="text" ref={refTitle} required />
                </div>
                <div>
                    <label htmlFor="author">Author:</label>
                    <input id="author" type="text" ref={refAuthor} required />
                </div>
                <div>
                    <label htmlFor="genre">Genre:</label>
                    <input id="genre" type="text" ref={refGenre} required />
                </div>
                <button type="submit">Add Book</button>
            </form>
        </>
    );

};

export default BookPost