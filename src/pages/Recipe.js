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
      <h3>{data[0].title}</h3>
      <p>Makes {data[0].servings}</p>
    </div>
    )
  };
};

export default Recipe;