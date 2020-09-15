import React, { useEffect, useState } from 'react';

import './App.css';
import Recipe from './Recipe'
const App = () => {



  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);



  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${process.env.REACT_APP_EDAMAM_ID}&app_key=${process.env.REACT_APP_EDAMAM_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }




  return (
    <div className="App">
      <h1>Recipe App</h1>

      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>

      <div className="recipes">

        {recipes.map(recipe => (
          <Recipe
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
          />
        ))}
      </div>

    </div>
  )
}
export default App;
