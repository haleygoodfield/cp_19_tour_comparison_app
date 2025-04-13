// App.jsx (Root Component)

import React, { useState } from 'react'; // Import React and useState
import Gallery from './components/Gallery'; // Import Gallery component

// Holds state for the tours
function App() {
  const [tours, setTours] = useState([]);

  // Handler function to remove a tour (passed down)
  const removeTour = (id) => {
    setTours(prev => prev.filter(tour => tour.id !== id)); // Filters out the tour with the given id
};

return (
  // Acts as the main container for the app
    <main> 
      <h1>Our Tours</h1> 
      {/* Renders the Gallery component */} 
      {/* Passes state and handlers to children (lifting stage) */}
        <Gallery tours={tours} setTours={setTours} onRemove={removeTour} />
      </main>
      );
  }

// Exporting the App component as default
export default App;

