import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, } from "react";
import { Link, useParams } from "react-router-dom";
import { useCountryContext } from '../CountriesContext'; 



export default function SingleCountry() {

    const { country, setCountry } = useCountryContext();
    const { name } = useParams();


    useEffect(() => {
        const getSingleCountry = async() => {
            try{
                const res = await fetch(`https://restcountries.com/v3.1/name/${name}`)
                const data = await res.json()
                setCountry(Array.isArray(data) ? data : [])
            } catch{
                console.error("Error");
            }
        };
        getSingleCountry()
    }, );


    return (
        <>
        <div className="my-4 ms-5">
        <Link to="/"
                className="back bg-dark py-2 px-6 rounded shadow transition-all duration-200"
        >
                &larr; Back
        </Link>
        </div>
        
            <section className="container">
            {country.map((item) => (
                <div key={item.population} className="row my-5">
                    <article className="col-md-6">
                        <img src={item.flags.svg} alt={item.name.common} className="img-fluid"/>
                    </article>

                    <article className="col-md-6">
                        <h2>{item.name.official}</h2>
                        <ul>
                            <li><b>Capital</b>: {item.capital[0]}</li>
                            <li><b>Population</b>: {Number(item.population).toLocaleString()}</li>
                            <li><b>Region</b>: {item.region}</li>
                            <li><b>Subregion</b>: {item.subregion}</li>
                            
                        </ul>

                        {item.borders && (
                            <>
                            <h3>Borders:</h3>
                        <ul>
                        {item.borders.map((border, index) => (
                            <li key={index} className="li1 gap-3 me-4 shadow p-1">{border}</li>
                        ))}
                        </ul>
                            </>
                        )}
                        
                    </article>
                </div>
    ))}
            </section>
        </>
    )
}

