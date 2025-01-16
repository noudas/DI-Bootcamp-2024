import './style.css'
import Recipe from './model/RecipeItem'
import RecipeCollection from './model/RecipeCollection'
import RecipeTemplate from './template/RecipeTemplate'
import { v4 as uuidv4 } from 'uuid';

// Initialize classes
const recipeCollection = new RecipeCollection();
const recipeTemplate = new RecipeTemplate("recipeContainer");

// Select DOM elements
const recipeEntryForm = document.getElementById("recipeEntryForm") as HTMLFormElement;
const recipeTitleInput = document.getElementById("recipeTitle") as HTMLInputElement;
const ingredientsInput = document.getElementById("ingredients") as HTMLTextAreaElement;
const instructionsInput = document.getElementById("instructions") as HTMLTextAreaElement;
const clearRecipesButton = document.getElementById("clearRecipesButton") as HTMLButtonElement;

// Load existing recipes from localStorage and render
recipeCollection.loadFromLocalStorage();
renderRecipes();

// Event: Add Recipe
recipeEntryForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = recipeTitleInput.value.trim();
    const ingredients = ingredientsInput.value.trim().split("\n");
    const instructions = instructionsInput.value.trim();

    if (title && ingredients.length && instructions) {
        const maxId = recipeCollection.recipes.reduce((max, recipe) => Math.max(max, recipe.id), 0);
        const newRecipe = new Recipe(
            uuidv4(), // Unique ID
            title,
            ingredients,
            instructions,
            false // Not favorite by default
        );
        recipeCollection.addRecipe(newRecipe);
        recipeCollection.saveToLocalStorage();
        renderRecipes();

        // Clear form inputs
        recipeEntryForm.reset();
    }
});

// Event: Clear All Recipes
clearRecipesButton.addEventListener("click", () => {
    recipeCollection.clearAllRecipes();
    recipeCollection.saveToLocalStorage();
    renderRecipes();
});

// Render recipes using the RecipeTemplate
function renderRecipes(): void {
    recipeTemplate.renderRecipes(
        recipeCollection.recipes,
        (id) => {
            recipeCollection.toggleRecipe(id);
            recipeCollection.saveToLocalStorage();
            renderRecipes();
        },
        (id) => {
            recipeCollection.removeRecipe(id);
            recipeCollection.saveToLocalStorage();
            renderRecipes();
        }
    );
}