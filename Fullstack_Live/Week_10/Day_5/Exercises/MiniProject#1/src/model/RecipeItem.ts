// 1. RecipeItem.ts
// Create a class that represents a single recipe with properties:

// id: Unique identifier
// title: Recipe name
// ingredients: Array of ingredients
// instructions: Cooking instructions
// isFavorite: Boolean flag for favorite recipes

class Recipe {
    readonly id: number;
    public title: string;
    public ingredients: string[];
    public instructions: string;
    public isFavorite: boolean;

    constructor( id: number, title: string, ingredients: string[], instructions: string, isFavorite: boolean = false ) {
        this.id = id;
        this.title = title;
        this.ingredients = ingredients;
        this.instructions = instructions;
        this.isFavorite = isFavorite;
    }
}
