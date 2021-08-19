import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { recipeContext } from "./App";
import RecipeIngredientEdit from "./RecipeIngredientEdit";

export default function RecipeEdit({ recipe }) {
  const { handleRecipeChange, handleRecipeEdit } = useContext(recipeContext);

  function handleChange(changes) {
    handleRecipeChange(recipe.id, { ...recipe, ...changes });
  }

  function handleIngredientChange(id, changedIngredient) {
    const newIngredient = [...recipe.ingredients];
    const index = recipe.ingredients.findIndex((ingred) => ingred.id === id);
    newIngredient[index] = changedIngredient;
    handleChange({ ingredients: newIngredient });
  }

  function handleIngredientAdd() {
    const newIngredient = {
      id: uuidv4(),
      name: "",
      amount: "",
    };
    handleChange({ ingredients: [...recipe.ingredients, newIngredient] });
  }

  function handleIngredientDelete(id) {
    handleChange({
      ingredients: recipe.ingredients.filter((i) => i.id !== id),
    });
  }

  return (
    <div className="recipe-edit">
      <div className="recipe-edit_remove-btn-container">
        <button
          className="btn recipe-edir_remove-btn"
          onClick={() => handleRecipeEdit(undefined)}
        >
          &times;
        </button>
      </div>
      <div className="recipe-edit_details-grid">
        <label htmlFor="name" className="recipe-edit_label">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={(e) => handleChange({ name: e.target.value })}
          value={recipe.name}
          className="recipe-edit_input"
        />

        <label htmlFor="cookTine" className="recipe-edit_label">
          Cook Time
        </label>
        <input
          type="text"
          name="cookTime"
          id="cookTime"
          onChange={(e) => handleChange({ cookingTime: e.target.value })}
          value={recipe.cookingTime}
          className="recipe-edit_input"
        />

        <label htmlFor="servings" className="recipe-edit_label">
          Servings
        </label>
        <input
          type="number"
          name="servings"
          min="1"
          id="servings"
          onChange={(e) =>
            handleChange({ servings: parseInt(e.target.value) || "" })
          }
          value={recipe.servings}
          className="recipe-edit_input"
        />

        <label htmlFor="instructions" className="recipe-edit_label">
          Instructions
        </label>
        <textarea
          name="instructions"
          id="instructions"
          onChange={(e) => handleChange({ instructions: e.target.value })}
          value={recipe.instructions}
          className="recipe-edit_input"
        />
      </div>
      <br />
      <label className="recipe-edit_label">Ingredients</label>
      <div className="recipe-edit_ingredient-grid">
        <div>Name</div>
        <div>Amount</div>
        <div></div>
        {recipe.ingredients.map((ingredient) => (
          <RecipeIngredientEdit
            key={ingredient.id}
            handleIngredientChange={handleIngredientChange}
            handleIngredientDelete={handleIngredientDelete}
            ingredient={ingredient}
          />
        ))}
      </div>
      <div className="recipe-edit_add-ingredient-btn-container">
        <button
          className="btn btn-primary"
          onClick={() => handleIngredientAdd()}
        >
          Add Ingredient
        </button>
      </div>
    </div>
  );
}
