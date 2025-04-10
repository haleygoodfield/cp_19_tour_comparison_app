// App.jsx (Root Component)

import React, { useState } from 'react';
import Gallery from './components/Gallery';

// Holds state for the tours
function App() {
  const [tours, setTours] = useState([]);

  // Handler function to remove a tour (passed down)
  const removeTour = (id) => {
    setTours(prev => prev.filter(tour => tour.id !== id));
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

export default App;

// need to set up routing??? IDK 