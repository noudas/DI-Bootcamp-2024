// Generic List Component
// Create a reusable, generic List component that accepts an array of items and a renderItem function. 
// This allows you to decide exactly how each book is displayed.

import { GenericListProps } from "../types/types";

const GenericList =<T, >({ items, renderItem }: GenericListProps<T>) =>{
    return (
        <div className="list">
            {items.map((item, index) => (
                <div key={index} className="list-item">
                    {renderItem(item)}
                </div>
            ))}
        </div>
    )
}

export default GenericList;