import { useRef } from "react";
import { useCategories } from "./state/hooks";
import { useDispatch } from "react-redux";
import { addCategory } from "./state/CategorySlice";

const CategoryPosts = () => {
    const dispatch = useDispatch();
    const nameRef = useRef();
  

    const categories = useCategories();
  
    const handleAddCategory = (e) => {
      e.preventDefault();
  
      const categoryName = nameRef.current.value.trim();
      if (categoryName) {
        dispatch(addCategory({ name: categoryName }));
        nameRef.current.value = "";
      }
    };
  
    return (
      <div>
        <h4>Post Categories</h4>
  
  
        <form onSubmit={handleAddCategory}>
          <input 
            type="text" 
            placeholder="Category Name" 
            ref={nameRef}
          />
          <button type="submit">Add Category</button>
        </form>
      </div>
    );
  };
  
  export default CategoryPosts;
  