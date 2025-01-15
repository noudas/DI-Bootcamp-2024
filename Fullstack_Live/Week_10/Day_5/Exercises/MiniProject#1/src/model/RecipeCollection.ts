// 2. RecipeCollection.ts
// Implement a class that manages all recipes with methods to:

// Add new recipes
// Remove recipes
// Toggle favorite status
// Save to localStorage
// Load from localStorage

import Recipe from "./RecipeItem";

class RecipeCollection{
    public recipes: Recipe[];

    constructor(recipes: Recipe[] = []){
        this.recipes = recipes;
    }

    addRecipe(recipe: Recipe): void{
        this.recipes.push(recipe)
    }

    removeRecipe(id: number): void{
        this.recipes = this.recipes.filter((recipe) => recipe.id !== id);
    }

    toggleRecipe(id: number): void{
        const recipe = this.recipes.find((recipe) => recipe.id !== id);
        if (recipe) {
            recipe.isFavorite = !recipe.isFavorite;
        }
    }

    saveToLocalStorage():void{
        localStorage.setItem("recipes", JSON.stringify(this.recipes));
    }

    loadFromLocalStorage():void{
        const data = localStorage.getItem("recipes");
        if(data){
            this.recipes = JSON.parse(data).map((recipeData: any) => {
                return new Recipe(
                    recipeData.id,
                    recipeData.title,
                    recipeData.ingredients,
                    recipeData.instructions,
                    recipeData.isFavorite
                );
            });
        };
    };
};

export default RecipeCollection