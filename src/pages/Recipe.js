import React from "react";
import { Link } from "react-router-dom";

const data = require("../data/recipeData.json");

class Recipe extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: '',
      recipeId : this.props.match.params.recipeId
    }
  }


  render() {
    return (
    <div className="recipeContain">
      <h3>{data[this.state.recipeId].title}</h3>
      <p>Makes {data[this.state.recipeId].servings}</p>

      {data[this.state.recipeId].modFrom !== '' &&
        <p>
          Modified from <a href={data[this.state.recipeId].modFrom} target="_blank">here</a>.
        </p>
      }
      <img className="recipeMainImage" src={data[this.state.recipeId].photo} alt={data[this.state.recipeId].title} />

      <h2>INGREDIENTS</h2>
      <ul className="recipeIngredients">
      {data[this.state.recipeId].ingredients.map((x, index) =>
        <li key={index}>{x}</li>
      )}
      </ul>
      <br />
      <h2>DIRECTIONS</h2>
      <ul className="recipeDirections">
      {data[this.state.recipeId].directions.map((x, index) =>

        <li key={index}>{x}</li>

      )}
      <br />
      <li>Enjoy!</li>
      </ul>

    </div>
    )
  };
};

export default Recipe;