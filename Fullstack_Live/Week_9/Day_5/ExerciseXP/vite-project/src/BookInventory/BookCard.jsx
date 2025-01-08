const BookCard = (props) => {
    return (
        <>
            <div className="card">
                <p>{id}</p>
                <h2>{title}</h2>
                <h3>{author}</h3>
                <p>{genre}</p>
            </div>
        </>
    )
}

export default BookCard