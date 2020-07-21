import React from 'react';
import { Link } from "react-router-dom";

function Header() {
  return (
    <div id="header">
    	<img src="https://via.placeholder.com/728x90.png?text=Threadkind+Recipes" alt="header placeholder" />
    	<div id="headerLinks">
	    	<Link to="/">Home</Link>
	    	<Link to="/about">About</Link>
	    	<Link to="/recipes">Recipes</Link>
	    	<a href="http://meal-planner.threadkind.com/" target="_blank" rel="noopener noreferrer">Meal Planner</a>
	    </div>
    </div>
  );
}

export default Header;