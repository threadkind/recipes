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
    console.log(data)
    return (
    <div>
      <h3>{data[this.state.recipeId].title}</h3>
      <p>Makes {data[this.state.recipeId].servings}</p>

      {data[this.state.recipeId].modFrom !== '' &&
        <p>
          Modified from <Link to={data[this.state.recipeId].modFrom}>here</Link>.
        </p>
      }
      <img src={data[this.state.recipeId].photo} alt={data[this.state.recipeId].title} />

      <h2>INGREDIENTS</h2>
      <ul>
      {data[this.state.recipeId].ingredients.map((x, index) =>
        <li key={index}>{x}</li>
      )}
      </ul>

      <h2>DIRECTIONS</h2>
      <ul>
      {data[this.state.recipeId].directions.map((x, index) =>
        <li key={index}>{x}</li>
      )}
      <li>Enjoy!</li>
      </ul>

    </div>
    )
  };
};

export default Recipe;