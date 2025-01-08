const BookCard = ({ id, title, author, genre }) => {
    return (
      <div className="card">
        <p>Book ID: {id}</p>
        <h2>{title}</h2>
        <h3>Author: {author}</h3>
        <p>Genre: {genre}</p>
      </div>
    );
  };
  
  export default BookCard;
  