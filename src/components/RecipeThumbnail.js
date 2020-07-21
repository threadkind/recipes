import React from "react";
import { Link } from "react-router-dom";

class RecipeThumbnail extends React.Component {
  constructor(props){
    super(props);
    	this.state = {
    		recipe : ''
    	}
	}

  render() {
  	return (
  		<div className="recipeThumbnail" key={this.props.index}>
  			<Link to={`/recipes/${this.props.index}/${this.props.recipe.path}`} >

	  			<figure>
	  				<img src={this.props.recipe.photo} alt={this.state.recipe.title}/>
	  				<figcaption>{this.props.recipe.title}</figcaption>
	  			</figure>
  			</Link>
  		</div>
	)
  }
}

  export default RecipeThumbnail;