import React from 'react';
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
    	Header!
    	<Link to="/">Home</Link>
    	<Link to="/about">About</Link>
    	<Link to="/recipes">Recipes</Link>
    </div>
  );
}

export default Header;
