import React from "react";

class RecipeTags extends React.Component {
  constructor(props){
    super(props);
    	this.state = {
    		tags : [],
    		selectedTag : ''
    	}
	}
	getTags() {
		this.props.data.forEach((recipe) => {
			recipe.tags.forEach((tag) => {
				if(this.state.tags.includes(tag) === false){
					this.state.tags.push(tag)
				}
			})
		})
	}

  render() {

  	   return (
  	   	<div id="recipeTags">
	  	   	<p>Filter Recipes:</p>
	  	   	<div id="tags">
	  	   		{this.getTags()}
	  	   		<button
	  	   		key={this.state.tags.length + 1} className="rTag"
	  	   			onClick={() => this.props.setSelectedTag('All')}>
	  	   			All Recipes
	  	   		</button>

	  	   		{this.state.tags.map((x, index) =>
	  	   			<button
	  	   				key={index}
	  	   				className="rTag"
	  	   				onClick={() => this.props.setSelectedTag(x)}>
	  	   			{x}
	  	   		</button>

	  	   		)}


	  	   	</div>
	  	</div>


  )}}

  export default RecipeTags;