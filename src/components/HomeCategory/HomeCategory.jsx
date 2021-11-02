import React from 'react';
import {Link} from 'react-router-dom';

function HomeCategory(props) {
  return (
    <div className="col-12 col-md-6 col-xl-4  mb-4">
    <Link to={`/category/${props.route}`}>
      <div className="w-100">
        <img src={props.image} alt={props.name} className="w-100" />
      </div>
      <h2 className="h4 mt-1">{props.title}</h2>
    </Link>
    <p className="mb-2">{props.description}</p>

    
  </div>
  )
}

export default HomeCategory
