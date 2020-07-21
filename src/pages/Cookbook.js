import React from "react";
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
    this.setSelectedTag('All')
  }

  setSelectedTag(selected) {
    this.setState({
      selectedTag: selected
    });

    let sel = []
    if(selected === 'All'){
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
    this.setState({filtered : sel.reverse()})
  }

  render() {
    return (
      <div className="cookbook">
        <RecipeTags
          data={this.state.data}
          setSelectedTag={this.setSelectedTag}
        />

        <h2 id="cbRecipesTitle">Recipes</h2>
        <div id="cookbookRecipes">
        {this.state.filtered.map((x) =>
            <RecipeThumbnail
              recipe={x}
              index={x.id}
          />
        )}
        </div>

      </div>
    );
  }
};

export default Cookbook;

