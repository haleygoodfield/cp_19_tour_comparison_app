import React, { useEffect, useState } from 'react';
import TourCard from './TourCard';

function Gallery({ tours, setTours, onRemove }) {
  const [loading, setLoading] = useState(true); // stores the loading state
  const [error, setError] = useState(false); // stores the error state

  // Fetches the data from the API on mount
  useEffect(() => { 
    const fetchTours = async () => {
        setLoading(true); // sets the loading state to true
        setError(false); // Resets the error state to false
        try {  // Use useEffect to call the API 
            const res = await fetch("https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project"); // CORS Error workaround :(
            const data = await res.json();
            setTours(data); // Stores the data in useState
        } catch (err) {
            setError(true); // sets the error state to true if error
        }
        setLoading(false); // sets loading to false after data is fetched
    };

    fetchTours();
  }, [setTours]); // is this wrong why does it say infinite loop 

    if (loading) return <p>Loading the tours</p>; // displays loading message

    if (error) return <p>Failed to load the tours</p>; // displays error message if failed 

    return (
        <section className="gallery">
            {/* Render each tour using map() with a unique key prop */}
            {tours.map((tour) => (
                <TourCard key={tour.id} {...tour} onRemove={onRemove} /> // unique key and pass individual tour data to the TourCard component
            ))}
        </section>
    );
}

export default Gallery;