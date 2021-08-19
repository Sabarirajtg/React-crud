import React, { useContext } from "react";
import { recipeContext } from "./App";
import IngredientList from "./IngredientList";

export default function Recipe(props) {
  const { id, name, servings, cookingTime, instructions, ingredients } = props;

  const { handleDeleteRecipe, handleRecipeEdit } = useContext(recipeContext);

  return (
    <div className="recipe">
      <div className="recipe_header">
        <h3 className="recipe_title">{name}</h3>
        <button className="btn btn-primary mr-1" onClick={() => handleRecipeEdit(id)}>
          Edit
        </button>
        <button
          className="btn btn-danger"
          onClick={() => handleDeleteRecipe(id)}
        >
          Delete
        </button>
      </div>
      <div className="recipe_row">
        <span className="recipe_label">Cooking Time :</span>
        <span className="recipe_value">{cookingTime}</span>
      </div>
      <div className="recipe_row">
        <span className="recipe_label">Servings :</span>
        <span className="recipe_value">{servings}</span>
      </div>
      <div className="recipe_row">
        <span className="recipe_label">Instructions</span>
        <div className="recipe_value recipe_value-indented recipe_instruction">
          {instructions}
        </div>
      </div>
      <div className="recipe_row">
        <h4 className="recipe_label">Ingredients</h4>
        <div className="recipe_value">
          <IngredientList ingredient={ingredients} />
        </div>
      </div>
    </div>
  );
}
