import React, { createContext, useContext, useState, useEffect } from 'react';
const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
    const [countries, setCountries] = useState([]);
    const [searchCountry, setSearchCountry] = useState("");
    const [country, setCountry] = useState([]);
    const [darkMode, setDarkMode] = useState(false);


    useEffect(() => {
        const getCountries = async () => {
            try {
                const res = await fetch("https://restcountries.com/v3.1/all");
                const data = await res.json();
                setCountries(data)
            } catch (error) {
                console.error(error)
            }
        };   
    getCountries();
    }, []);

    async function searchByCountry(){
        try {
            const res = await fetch(`https://restcountries.com/v3.1/name/${searchCountry}`);
            const data = await res.json();
            setCountries(data);
        } catch (error) {
            console.error(error);
        }
    }

    function handleSearch (e) {
        e.preventDefault()
        searchByCountry()
    }

    async function filterByRegion(region){
        try {
            const res = await fetch(`https://restcountries.com/v3.1/region/${region}`);
            const data = await res.json();
            setCountries(data);
        } catch (error) {
            console.error(error);
        }
    }


    function handleFilter (e) {
        e.preventDefault()
        filterByRegion()
    }


    return (
        <CountryContext.Provider
        value={{
            countries,
            setCountries,
            country,
            setCountry,
            handleFilter,
            searchCountry,
            setSearchCountry,
            handleSearch,
            filterByRegion,
            searchByCountry,
            darkMode, 
            setDarkMode
          }}
        >
          {children}
        </CountryContext.Provider>
      );

}

export const useCountryContext = () => {
    return useContext(CountryContext);
};