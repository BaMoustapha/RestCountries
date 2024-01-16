import Article from "./Article";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useCountryContext } from '../CountriesContext'; 



export default function Countries() {
    const {
        countries,
        handleFilter,
        filterByRegion,
        searchCountry,
        setSearchCountry,
        handleSearch,
    } = useCountryContext();
    const regions = [
        {
            name: "Africa",
        },
        {
            name: "Europe",
        },
        {
            name: "Asia",
        },
        {
            name: "Americas",
        },
        {
            name: "Oceania",
        },
        {
            name: "Antarctic",
        },
    ]

    return ( 
        <>
        <section className="container mx-auto">
        <div className="row mb-5">
        <form onSubmit={handleSearch}
        className="col">
        <input 
        type="text" 
        name="search" 
        id="search"
        value={searchCountry}
        onChange={(e) => setSearchCountry(e.target.value)}
        className="w-50 shadow rounded p-2"
        placeholder="Search for a country" required />
        </form>
        <form onSubmit={handleFilter}
        className="col-auto">
        <select className="shadow rounded p-2"
        value={regions.name}
        onChange={(e)=> filterByRegion(e.target.value)}
        name="filter-by-region" id="filter-by-region"
        >
        <option selected>Select by region</option>
        {regions.map((region, index) => (
            <option key={index}>{region.name}</option>
        ))}
        </select>
        </form>
        </div>
            <div className="row">
            {countries.map((country) => (
                <Article key={country.name.common} {...country}></Article>
            ))
            }
            </div>
            
        </section>
        </>
    );
}