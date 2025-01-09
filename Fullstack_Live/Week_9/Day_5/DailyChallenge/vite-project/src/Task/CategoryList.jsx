// CategoryList.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCategory, editCategory } from "./state/CategorySlice";
import { useCategories } from "./state/hooks";

const CategoryList = () => {
    const categories = useCategories();
    const dispatch = useDispatch();
    const [editIdRef, setEditIdRef] = useState(null);
    const [editNameRef, setEditNameRef] = useState(null);

    // Delete a category
    const handleDelete = (id) => {
        dispatch(deleteCategory(id));
    };

    // Start editing a category
    const handleEdit = (id, name) => {
        setEditIdRef((prevRef) => {
            if (prevRef) prevRef.value = '';
            return { value: id.toString() };
        });
        setEditNameRef((prevRef) => {
            if (prevRef) prevRef.value = '';
            return { value: name };
        });
    };

    // Submit the edited category name
    const handleSaveEdit = () => {
        if (editIdRef?.value && editNameRef?.value) {
            dispatch(editCategory({ id: parseInt(editIdRef.value), changes: { name: editNameRef.value } }));
            setEditIdRef(null);
            setEditNameRef(null);
        }
    };

    return (
        <div>
            <h4>Category List</h4>
            <ul>
                {categories.map((category) => (
                    <li key={category.id}>
                        {editIdRef?.value === category.id.toString() ? (
                            <>
                                <input
                                    ref={(node) => setEditNameRef(node)}
                                    type="text"
                                    defaultValue={category.name}
                                />
                                <button onClick={handleSaveEdit}>Save</button>
                            </>
                        ) : (
                            <>
                                <span>{category.name}</span>
                                <button onClick={() => handleEdit(category.id, category.name)}>Edit</button>
                                <button onClick={() => handleDelete(category.id)}>Delete</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryList;
