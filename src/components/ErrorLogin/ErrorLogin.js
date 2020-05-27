import React from "react";
import { Link } from "react-router-dom";


export default function ErrorLogin () {
  return (
    <div className="error-message">
      <h1>Please log in</h1>
      <h2> In order to use our patform you have to be a registered user.</h2>
        
      <p>Already register? <Link to="/login"><button>Go to login</button> </Link> </p>
      <p>Want to create an account? <Link to="/register"><button>Go to register</button> </Link></p>
    </div>
  )
}