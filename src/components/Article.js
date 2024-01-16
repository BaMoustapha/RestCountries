import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

export default function Article({ 
    flags,
    name,
    population,
    region,
    subregion,
}) 
{
    return (
    <>
    <div className="carte col-lg-3 col-md-6 mb-4">
        <Link to={`/${name.common}`} className="text-decoration-none">
        <article className="card bg-white transition-all duration-200 rounded-lg shadow overflow-hidden">
          <img src={flags.svg} alt="" className="card-img-top" />
          <div className="card-body">
            <h2 className="card-title">
            {name.common}
            </h2>
            <ul className="list-unstyled">
              <li><strong>Population:</strong> {population.toLocaleString()}</li>
              <li><strong>Region:</strong> {region}</li>
              <li><strong>Subregion:</strong> {subregion}</li>
            </ul>
          </div>
        </article>
      </Link>
    </div>
    </>
    ) 
    
}