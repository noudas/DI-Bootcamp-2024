import './style.css'

// Instructions
// Create a simple library system with TypeScript:

// Interface Book: Define an interface Book with the following properties:

// title (string)
// author (string)
// isbn (string)
// publishedYear (number)
// An optional genre property (string)

interface Book{
  title:string;
  author:string;
  isbn:string;
  publishedYear:number;
  genre?:string;
}

// Class Library: Create a class Library with:

// A private property books (array of Book).
// A public method addBook to add a new book to the library.
// A public method getBookDetails that returns details of a book based on the isbn.

class Library {
  private books: Book[] = [];

  public addBook(book:Book): void{
    this.books.push(book);
  }

  public getBookDetails(isbn:string): Book | undefined{
    return this.books.find((book) => book.isbn === isbn);
  }

  protected getBooks(): Book[] {
    return this.books;
  }

}

// Class DigitalLibrary: Create a class DigitalLibrary that extends Library and adds:

class DigitalLibrary extends Library{
  readonly website:string;

  constructor(website: string) {
    super();
    this.website = website;
  }

  public get books() : Book[] {
    return this.getBooks();
  }
  

  public listBooks(): string[] {
    return this.getBooks().map((book) => book.title);
  }
}


// A readonly property website (string) for the library’s website.
// A public method listBooks that returns a list of all book titles in the library.
// Create an instance of DigitalLibrary, add some books to it, and then print out the details of the books and the list of all book titles.


// Create an instance of DigitalLibrary
const myLibrary = new DigitalLibrary("waste.money");

// Add Warhammer books to the library
myLibrary.addBook({
  title: "Warhammer 40,000: The Horus Heresy - Horus Rising",
  author: "Dan Abnett",
  isbn: "9781844163048",
  publishedYear: 2006,
  genre: "Science Fiction"
});

myLibrary.addBook({
  title: "Warhammer 40,000: The Horus Heresy - False Gods",
  author: "Graham McNeill",
  isbn: "9781844163055",
  publishedYear: 2007,
  genre: "Science Fiction"
});

myLibrary.addBook({
  title: "Warhammer 40,000: The Horus Heresy - Galaxy in Flames",
  author: "Ben Counter",
  isbn: "9781844163062",
  publishedYear: 2007,
  genre: "Science Fiction"
});

myLibrary.addBook({
  title: "Warhammer 40,000: The Horus Heresy - The Flight of the Eisenstein",
  author: "James Swallow",
  isbn: "9781844163079",
  publishedYear: 2007,
  genre: "Science Fiction"
});

myLibrary.addBook({
  title: "Warhammer 40,000: The Horus Heresy - Fulgrim",
  author: "Graham McNeill",
  isbn: "9781844163086",
  publishedYear: 2007,
  genre: "Science Fiction"
});

// Get and print details of a specific Warhammer book by ISBN
const bookDetails = myLibrary.getBookDetails("9781844163055");
console.log("Book Details:", bookDetails);

// List all Warhammer book titles in the library
console.log("All Warhammer Book Titles:", myLibrary.listBooks());