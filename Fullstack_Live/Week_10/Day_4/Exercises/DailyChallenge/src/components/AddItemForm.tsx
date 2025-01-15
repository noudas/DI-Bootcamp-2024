// Adding a New Book
// Implement a function addBook that generates a new book object (with a unique id) and appends it to the state.

import React, { useState } from "react";
import { AddItemFormProps } from "../types/types"

const AddItemForm = <T extends object>({ onAdd, fields }: AddItemFormProps<T>) => {
    const [formData, setFormData] = useState<{ [key in keyof T]: any }>({} as { [key in keyof T]: any });

    // Handle input change and update the corresponding field in formData
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof T) => {
        setFormData({
            ...formData,
            [field]: e.target.value
        });
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onAdd(formData as T); // Call the onAdd function with the current formData
    };

    return (
        <form onSubmit={handleSubmit}>
            {fields.map((field) => (
                <div key={field.name}>
                    <label>{field.name}</label>
                    <input
                        type={field.type}
                        placeholder={field.placeholder}
                        value={formData[field.name] || ""}
                        onChange={(e) => handleChange(e, field.name)}
                    />
                </div>
            ))}
            <button type="submit">Add Item</button>
        </form>
    );
};

export default AddItemForm;
