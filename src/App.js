import React, { useEffect, useState } from 'react';

import './App.css';

const App = () => {



const [recipies, setRecipies] = useState([]);

  useEffect(() => {
   // getRecipies();
  }, []);


/*
  const getRecipies = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    
  }*/




  return (
    <div className="App">
      <h1>Hello React</h1>

      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  )
}
export default App;
