import React, { useEffect, useState } from "react";
import RecipeList from "./RecipeList";
import "../Css/app.css";
import { v4 as uuidv4 } from "uuid";
import RecipeEdit from "./RecipeEdit";

export const recipeContext = React.createContext();

const LOCAL_STORAGE = "RecipeList";

function App() {
  const recipeHandleFuctions = {
    handleAddNewRecipe: handleAddNewRecipe,
    handleDeleteRecipe, // this line equals to above, it is special feature of js
    //the above line says handleDelete : handleDelete this happens because of same name in the both side
    handleRecipeEdit,
    handleRecipeChange
  };

  const [selectedRecipeId, setSelectedRecipeId] = useState();
  const [recipes, setRecipes] = useState(RecipeArray);

  const selectedRecipe = recipes.find(
    (recipe) => recipe.id === selectedRecipeId
  );

  useEffect(() => {
    const LocalStorageData = localStorage.getItem(LOCAL_STORAGE);
    if (LocalStorageData !== null) {
      setRecipes(JSON.parse(LocalStorageData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE, JSON.stringify(recipes));
  }, [recipes]);

  function handleAddNewRecipe() {
    const newRecipe = {
      id: uuidv4(),
      name: "",
      cookingTime: "",
      servings: 1,
      instructions: "",
      ingredients: [
        {
          id: uuidv4(),
          name: "",
          amount: "",
        },
      ],
    };
    setSelectedRecipeId(newRecipe.id)
    setRecipes([...recipes, newRecipe]);
  }

  function handleRecipeChange(id ,changedRecipe){
    const newRecipe = [...recipes]
    const index = recipes.findIndex(recipe => recipe.id === id)
    newRecipe[index] = changedRecipe
    setRecipes(newRecipe)
  }


  function handleRecipeEdit(id) {
    setSelectedRecipeId(id);
  }

  function handleDeleteRecipe(id) {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  }

  return (
    <recipeContext.Provider value={recipeHandleFuctions}>
      <RecipeList recipes={recipes} />
      {selectedRecipe && <RecipeEdit recipe={selectedRecipe} />}
      {/* <RecipeEdit recipe={selectedRecipe} /> */}
    </recipeContext.Provider>
  );
}

const RecipeArray = [
  {
    id: uuidv4(),
    name: "Plain Chicken",
    cookingTime: "1.00",
    servings: 3,
    instructions: "1.Apply Masala\n 2.Fry\n 3.Serve",
    ingredients: [
      {
        id: uuidv4(),
        name: "chicken",
        amount: "3 nos",
      },
      {
        id: uuidv4(),
        name: "masala sachet",
        amount: "3 tbps",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Potato chips",
    cookingTime: "9.00",
    servings: 3,
    instructions: "1.Apply Masala\n 2.Fry\n 3.Serve",
    ingredients: [
      {
        id: uuidv4(),
        name: "Pototo",
        amount: "3 nos",
      },
      {
        id: uuidv4(),
        name: "masala sachet",
        amount: "3 tbps",
      },
    ],
  },
];

export default App;
