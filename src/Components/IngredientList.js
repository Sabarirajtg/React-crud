import React from 'react'
import Ingredient from './Ingredient'

export default function IngredientList({ingredient}) {
    const ingredientList = ingredient.map(ingredient => {return (
        <Ingredient key={ingredient.id} {...ingredient} />
    )})
    
    return (
        <div className="ingredient-grid">
            {ingredientList}
        </div>
    )
}
