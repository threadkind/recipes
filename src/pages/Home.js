import React from 'react';
import RecipeThumbnail from '../components/RecipeThumbnail'

class Home extends React.Component {
  constructor(props){
    super(props);
    	this.state = {
    	}
	}
  componentDidMount() {
  	let length = this.props.data.length
  	console.log(this.props.data[length-1])
  }
  render() {
	return (

	    <div className="home">

	    	<h2>Latest Recipes</h2>
	    	<div id="latestRecipes">

		    	<RecipeThumbnail
		    		recipe={this.props.data[this.props.data.length-1]}
		    		index={this.props.data.length-1}
		    	/>

		       	<RecipeThumbnail
		    		recipe={this.props.data[this.props.data.length-2]}
		    		index={this.props.data.length-2}
		    	/>

		    	<RecipeThumbnail
		    		recipe={this.props.data[this.props.data.length-3]}
		    		index={this.props.data.length-3}
		    	/>

		    </div>



	    </div>
	);
  }

}

export default Home;