// Book Objetct Type
// Book Type - Ok
// Define the Book type, which includes an id, a title, and an author, specifying the structure for each book item.
export type Book = {
    readonly id:number; 
    title:string;
    author:string;
}

// Generic List Component
// Create a reusable, generic List component that accepts an array of items and a renderItem function. 
// This allows you to decide exactly how each book is displayed.

// Rendering the App
// Use the generic List component to display the list of books. 
// The renderItem function determines how each book is presented.
export type GenericListProps<T> = {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
}


// Generic Add Form
export type AddItemFormProps<T> = {
    onAdd: (item: T) => void;
    fields: { name: keyof T; placeholder: string; type: string }[];
};