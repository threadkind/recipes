import React from "react";
import { Link } from "react-router-dom";
import RecipeTags from "../components/RecipeTags"

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
    }//endif
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
        {this.state.filtered.map((x, index) =>
  	        <h5 key={x.id}>
  	          <Link to={`/recipes/${index}/${x.path}`}>{x.title}</Link>
  	        </h5>
        )}

      </div>
    );
  }
};

export default Cookbook;

