import React from "react";
import { Link } from "react-router-dom";
import RecipeTags from "../components/RecipeTags"
import RecipeThumbnail from '../components/RecipeThumbnail'

class Cookbook extends React.Component {
  constructor(props){
    super(props);
      this.setSelectedTag = this.setSelectedTag.bind(this)
      this.state = {
        data : this.props.data,
        selectedTag : 'all',
        filtered : []
      }
  }

  componentDidMount() {
    console.log('mounted')
    this.setSelectedTag('all')
  }

  setSelectedTag(selected) {
    this.setState({
      selectedTag: selected
    });

    let sel = []
    if(selected === 'all'){
      this.state.data.forEach((recipe) => {
        sel.push(recipe)
      })
    }
    else {
     this.state.data.forEach((recipe) => {
        if(recipe.tags.includes(selected)){
          sel.push(recipe)
        }
      })
    }
    this.setState({filtered : sel})
  }

  render() {
    return (
      <div className="cookbook">
        <RecipeTags
          data={this.state.data}
          setSelectedTag={this.setSelectedTag}
        />

        <h3>Recipes</h3>
        <div id="cookbookRecipes">
        {this.state.filtered.map((x, index) =>
            <RecipeThumbnail
              recipe={x}
              index={index}
          />
        )}
        </div>

      </div>
    );
  }
};

export default Cookbook;

