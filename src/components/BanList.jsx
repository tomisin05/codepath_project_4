// src/components/BanList.js
import React from 'react';

function BanList({ banList, toggleBanAttribute }) {
  return (
    <div>
      <h2>Banned Attributes:</h2>
      <ul>
        {banList.map((banItem, index) => (
          <li key={index}>
            <button onClick={() => toggleBanAttribute(banItem)}>{banItem}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BanList;
