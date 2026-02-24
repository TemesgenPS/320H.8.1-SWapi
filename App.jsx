import { useState, useEffect } from 'react';
import { getAllStarships } from './services/sw-api';
import StarShipCard from './components/StarShipCard';
import './App.css';

function App() {
  // 1️⃣ State
  const [starships, setStarships] = useState([]);
  const [selectedShip, setSelectedShip] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const ships = await getAllStarships();
      setStarships(ships);
    }

    fetchData();
  }, []);

  // 3️⃣ RETURN (this is where detail render code goes)
  return (
    <div>
      <h1>STAR WARS STARSHIPS</h1>

      <div className="card-container">
        {starships.map((ship) => (
          <StarShipCard
            key={ship.url}
            starship={ship}
            onSelect={setSelectedShip}
          />
        ))}
      </div>

      {/* 👇 DETAIL RENDER CODE GOES RIGHT HERE */}
      {selectedShip && (
        <div className="details">
          <h2>{selectedShip.name}</h2>
          <p>Model: {selectedShip.model}</p>
          <p>Manufacturer: {selectedShip.manufacturer}</p>
          <p>Cost: {selectedShip.cost_in_credits}</p>
        </div>
      )}
    </div>
  );
}

export default App;