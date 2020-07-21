import React from "react";
import { Link } from "react-router-dom";

class RecipeThumbnail extends React.Component {
  constructor(props){
    super(props);
    	this.state = {
    		recipe : ''
    	}
	}
	componentDidMount() {
		this.setState({recipe : this.props.recipe})
	}

  render() {

  	return (
  		<div className="recipeThumbnail">
  			<Link to={`/recipes/${this.props.index}/${this.state.recipe.path}`} >

	  			<figure>
	  				<img src={this.state.recipe.photo} alt={this.state.recipe.title}/>
	  				<figcaption>{this.state.recipe.title}</figcaption>
	  			</figure>
  			</Link>
  		</div>
	)
  }
}

  export default RecipeThumbnail;