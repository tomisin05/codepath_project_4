// src/App.js
import React, { useState, useEffect } from 'react';
import BanList from './components/BanList';
import ItemDisplay from './components/ItemDisplay';

function App() {
  const [item, setItem] = useState(null); // Current item from API
  const [banList, setBanList] = useState([]); // List of banned attributes

  const fetchRandomItem = async () => {
    let data;
    do {
      const response = await fetch('https://api.thedogapi.com/v1/images/search?mime_types=jpg&format=json&has_breeds=true&limit=100&api_key=live_oY0zxgbCesKHOEhn4VuF9ULI0wcpevuEckHylYcpvElBLOGOSYSFkhrlXbnhsLnU');
      data = await response.json();
    } while (
      data[0]?.breeds?.length > 0 &&
      hasBannedAttributes(data[0].breeds[0])
    ); // Avoid fetching items with banned attributes
    setItem(data[0]);
  };

  const hasBannedAttributes = (breed) => {
    // Check if any banned attributes are present in the breed's attributes
    const { breed_group, temperament } = breed;
    return banList.includes(breed_group) || banList.some(attr => temperament?.includes(attr));
  };

  useEffect(() => {
    fetchRandomItem();
  }, []);

  const toggleBanAttribute = (attr) => {
    setBanList((prevList) => 
      prevList.includes(attr) ? prevList.filter(item => item !== attr) : [...prevList, attr]
    );
  };

  return (
    <div>
      {item && (
        <ItemDisplay 
          item={item} 
          toggleBanAttribute={toggleBanAttribute}
        />
      )}
      <button onClick={fetchRandomItem}>Fetch New Item</button>
      <BanList banList={banList} toggleBanAttribute={toggleBanAttribute} />
    </div>
  );
}

export default App;
