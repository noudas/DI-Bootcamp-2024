// 1. Define Data and Column Interfaces
// Create an interface that represents how a column is defined (e.g., title, key, sortable, etc.).
// Create a second interface for your table’s props (e.g., data, columns, onSort, onSelect).
// Hint: Use TypeScript generics to allow the table to handle any data structure. 
// For example, if your data objects contain fields like firstName or email, the table can still work without changing its internal logic.

// Interface for a column definition

export interface TableColumn<T>{
    title: string;      // Column header title
    key: keyof T;       // Create keys according to the data object
    sortable?: boolean; // // Optional: Whether the column is sortable
    render?: (value: T[keyof T], row: T) => React.ReactNode;
}

export interface TableProps<T>{
    data: T[];
    columns: TableColumn<T>[];
    onSort?: (key: keyof T) => void;
    onSelect: (row: T) => void;
}