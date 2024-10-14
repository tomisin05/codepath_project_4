// src/components/ItemDisplay.js
import React from 'react';

function ItemDisplay({ item, toggleBanAttribute }) {
  const breed = item.breeds[0]; // Access breed data

  if (!breed) return <div>No breed information available</div>;

  return (
    <div>
      <img 
        src={item.url} 
        alt="Random Dog" 
        style={{ width: '200', height: '200' }} // Adjust width, auto scales height
      />
      <p>
        Breed: <button onClick={() => toggleBanAttribute(breed.name)}>{breed.name}</button>
      </p>
      <p>
        Bred For: <button onClick={() => toggleBanAttribute(breed.bred_for)}>{breed.bred_for}</button>
      </p>
      <p>
        Breed Group: <button onClick={() => toggleBanAttribute(breed.breed_group)}>{breed.breed_group}</button>
      </p>
      <p>
        Life Span: {breed.life_span}
      </p>
      <p>
        Temperament: {breed.temperament.split(', ').map((temp, idx) => (
          <button key={idx} onClick={() => toggleBanAttribute(temp)}>{temp}</button>
        ))}
      </p>
    </div>
  );
}

export default ItemDisplay;
