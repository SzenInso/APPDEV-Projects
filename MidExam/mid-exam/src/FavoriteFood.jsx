import React from 'react';

function FavoriteFood ({ items, type }){
  if (items.length === 0) {
    return <p>I have no favorite {type}</p>;
  }

  return (
    <div>
      <h3>My Favorite {type}</h3>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} - Color: {item.color}, Rating: {item.rating}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteFood;