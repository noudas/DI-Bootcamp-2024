// 3. RecipeTemplate.ts
// Create a class that handles DOM rendering with features to:

import Recipe from "../model/RecipeItem";

// Display recipe cards with title, ingredients, and instructions
// Add favorite/unfavorite functionality
// Include delete buttons
// Show/hide recipe details

class RecipeTemplate {
    private container: HTMLElement;

    constructor(containerId: string) {
        const container = document.getElementById(containerId);
        if (!container) {
            throw new Error(`Container with ID "${containerId}" not found.`);
        }
        this.container = container;
    }

    // Render recipe cards
    renderRecipes(recipes: Recipe[], onToggleFavorite: (id: number) => void, onDelete: (id: number) => void): void {
        this.container.innerHTML = ""; // Clear previous content

        recipes.forEach((recipe) => {
            const card = document.createElement("div");
            card.classList.add("recipe-card");

            card.innerHTML = `
                <h2>${recipe.title}</h2>
                <div class="recipe-details hidden">
                    <p><strong>Ingredients:</strong> ${recipe.ingredients.join(", ")}</p>
                    <p><strong>Instructions:</strong> ${recipe.instructions}</p>
                </div>
                <button class="toggle-details">Show Details</button>
                <button class="favorite">${recipe.isFavorite ? "Unfavorite" : "Favorite"}</button>
                <button class="delete">Delete</button>
            `;

            // Event: Toggle details visibility
            const toggleDetailsButton = card.querySelector(".toggle-details")!;
            const detailsDiv = card.querySelector(".recipe-details")!;
            toggleDetailsButton.addEventListener("click", () => {
                detailsDiv.classList.toggle("hidden");
                toggleDetailsButton.textContent = detailsDiv.classList.contains("hidden")
                    ? "Show Details"
                    : "Hide Details";
            });

            // Event: Toggle favorite
            const favoriteButton = card.querySelector(".favorite")!;
            favoriteButton.addEventListener("click", () => {
                onToggleFavorite(recipe.id);
            });

            // Event: Delete recipe
            const deleteButton = card.querySelector(".delete")!;
            deleteButton.addEventListener("click", () => {
                onDelete(recipe.id);
            });

            this.container.appendChild(card);
        });
    }
}

export default RecipeTemplate;