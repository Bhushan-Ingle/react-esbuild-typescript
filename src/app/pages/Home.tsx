import React from 'react'
import { useState } from 'react';
import SearchResults from '../components/SearchResults';
import { useQuery } from 'react-query';
import './Home.css'; 

const fetchSearchResults = async (searchTerm: string) => {
    const response = await fetch(`http://localhost:3000/api/data`);
    const data = await response.json();
    return data;
};

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const { data: searchResults, isLoading, isError, refetch } = useQuery(
        ['search', searchTerm],
        () => fetchSearchResults(searchTerm),
        {
            enabled: false, // Disable automatic query execution
        }
    );
    const handleSearch = () => {
        // Trigger the query manually when the button is clicked
        refetch();
    };
    return (
        <div className="home-container">
            <div className="input-container">            
            <input
                type="text"
                placeholder="Enter search term"
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            
            {/* Display loading state */}
            {isLoading && <p>Loading...</p>}

            {/* Display error state */}
            {isError && <p>Error fetching data</p>}

            {/* Display search results */}
            {searchResults && searchResults.length > 0 && (
                <div>
                    <h2>Search Results:</h2>
                    <SearchResults results={searchResults} />
                </div>
            )}
            </div>
        </div>
    );
};

export default Home;