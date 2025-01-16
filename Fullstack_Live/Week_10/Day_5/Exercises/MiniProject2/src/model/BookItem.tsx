// Part 2: Define the Data Model (20-30 minutes)
// Create the Book interface
// Implement the BookItem class
// Add serialization methods
// Tasks:

// Create src/model directory
// Create Book.ts file
// Define the Book interface with required properties
// Implement the BookItem class with getters and serialization methods

import { Book } from "../interfaces/Book";

export class BookItem implements Book{
    public readonly id: number;
    public title: string;
    public author: string;

    constructor(id: number, title:string, author:string){
        this.id = id;
        this.title = title;
        this.author = author
    }

    public toObject(): Book{
        return{
            id: this.id,
            title: this.title,
            author: this.author,
        }
    }

    public toJson(): string{
        return JSON.stringify(this.toObject());
    }

    public static fromObject(obj: Book): BookItem{
        return new BookItem(obj.id, obj.title, obj.author);
    }

    public static fromJson(json: string): BookItem{
        const obj = JSON.parse(json);
        return BookItem.fromObject(obj);
    }
}