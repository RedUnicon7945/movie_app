import React from 'react';
import PropTypes from 'prop-types';

const foodILike = [
  {
    id:1,
    name: "Kimchi",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.IDrNtl4pG_zepTDko3IUhgHaHa%26pid%3DApi%26h%3D160&f=1",
    rating: 5

  },
  {
    id:2,
    name: "Samgyeopsal",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.z1NRYI5oQWdaIQQ7QJwhjAHaHa%26pid%3DApi%26h%3D160&f=1",
    rating: 4.9

  },
  {
    id:3,
    name: "Bibimbap",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.TyqKdm936XUIYdpzHOOetgHaE8%26pid%3DApi%26h%3D160&f=1",
    rating: 4.8

  },
  {
    id:4,
    name: "Doncasu",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.9ltYKgyRgJ9tIFtOINLxUwHaHn%26pid%3DApi%26h%3D160&f=1",
    rating: 4.7

  },
  {
    id:5,
    name: "Kimbap",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2YUaIoPRQXoWiRm7mUj3WAHaEK%26pid%3DApi%26h%3D160&f=1",
    rating: 4.6
  }
];

function Food({name, picture, rating}) {
  return (
    <div>
      <h1>I like {name}</h1>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}></img>
    </div>
  );
}

Food.prototype = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
