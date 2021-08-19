import React, { useContext, useState, useEffect } from "react";
import { recipeContext } from "./App";
import Recipe from "./Recipe";

export default function RecipeList({ recipes }) {
  const { handleAddNewRecipe } = useContext(recipeContext);

  const [reRender, setReRender] = useState(false);

  function LocalStorageClear() {
    localStorage.clear();
    setReRender(!reRender);
  }

  useEffect(() => {
    window.alert("Reset Done");
  }, [reRender]);

  return (
    <div className="recipe-list">
      <div>
        {recipes.map((recipe) => {
          return <Recipe key={recipe.id} {...recipe} />;
        })}

        <div className="recipe-list-add-btn-container">
          <button className="btn btn-primary" onClick={handleAddNewRecipe}>
            Add Recipe
          </button>
          <br />
          <br />
          <div>
            <button
              className="btn btn-danger"
              onClick={() => LocalStorageClear()}
            >
              Reset Default
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
