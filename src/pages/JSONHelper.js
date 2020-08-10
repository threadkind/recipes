import React from "react";

class JSONHelper extends React.Component {
  constructor(props){
    super(props);
    	this.state = {
    		labels : ['id', 'path', 'title', 'modFrom', 'servings', 'photo', 'ingredients', 'toServe', 'directions', 'tags']
    	}
    	this.jsonId = React.createRef();
    	this.textArea = React.createRef();
	}

  submit(){
  	console.log(this.id.value)
  }

  render() {
  	return (
  	   	<div id="jHelp">
  	   		<ul>
  	   			<li>id = recipe number</li>
  	   			<li>path = last part of url</li>
  	   			<li>title = recipe title</li>
  	   			<li>modFrom = modified from url</li>
  	   			<li>servings = number of servings</li>
  	   			<li>photo = photo url</li>
  	   			<li>ingredients = array of ingredients</li>
  	   			<li>toServe(optional) = list of optional toppings separated by return</li>
  	   			<li>directions = list of directions separated by return</li>
  	   			<li>tags = tags separated by comma</li>
  	   		</ul>

  	   		<form>
  	   		{this.state.labels.map((x, index) =>
  	   			<div className="in">
	  	   			<label for={x}>{x}:</label>
	  				<input ref={this.jsonId} key={index} type="text" id={x} name={x} />
  				</div>
  			)}
  	   		</form>

  	   		<button onClick={this.submit}>Submit</button>
  	   		<textArea ref={this.textArea}></textArea>

  	   	</div>
  	   	)
  	}
}


export default JSONHelper;