import React from "react";
import { Link } from "react-router-dom";
import RecipeTags from "../components/RecipeTags"


const data = require("../data/recipeData.json");

const Recipes = () => {

  return (
    <div className="cookbook">
      <RecipeTags />

      <h3>Recipes</h3>
      {data.map((x, index) =>
      	<div>
	        <h5 key={x.id}>
	          <Link to={`/recipes/${index}/${x.path}`}>{x.title}</Link>
	        </h5>

	    </div>
      )}

    </div>
  );
};

export default Recipes;

