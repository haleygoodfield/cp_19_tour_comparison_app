import React, { useState } from 'react'; // Import React 

// Receives props for: id, name, info, price, image and callback onRemove 
function TourCard({ id, name, info, image, price, onRemove }) {
    const [readMore, setReadMore] = useState(false); // state to toggle 

    return(
        <article className="tour-card">
            <img src={image} alt={name} /> {/* Display Tour image */}
            <div className="card-info">
                <h2>{name}</h2> {/* Display Tour name */}
                <h3>${price}</h3> {/* Display Tour price */}
                <p>{readMore ? info : `${info.substring(0, 200)}...`}</p> {/* Tour info with read more/ show less toggle */}
                <button onClick={() => setReadMore(!readMore)}> {/* Toggle button */}
                    {readMore ? 'Show Less' : 'Read More'} 
                </button>
                <button className="btn-remove" onClick={() => onRemove(id)}>Not Interested</button> {/* Button not "interested removes" tour */}
            </div>
        </article>
    );
}

export default TourCard; // Exporting the TourCard component
