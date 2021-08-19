import React from "react";

export default function RecipeIngredientEdit({
  ingredient,
  handleIngredientChange,
  handleIngredientDelete,
}) {
  function handleChange(changes) {
    handleIngredientChange(ingredient.id, { ...ingredient, ...changes });
  }

  return (
    <>
      <input
        type="text"
        className="recipe-edit_input"
        onInput={(e) => handleChange({ name: e.target.value })}
        value={ingredient.name}
      />
      <input
        type="text"
        className="recipe-edit_input"
        onInput={(e) => handleChange({ amount: e.target.value })}
        value={ingredient.amount}
      />
      <button
        className="btn btn-danger"
        onClick={() => handleIngredientDelete(ingredient.id)}
      >
        &times;
      </button>
    </>
  );
}