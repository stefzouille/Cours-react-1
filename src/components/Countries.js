import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const Countries = () => {

  // variable data seul facon de modifier c est passer par setData
  const [data, setData] = useState([]);
  // 36 est un multiple de 12 c est le plus pratique a utiliser
  const [rangeValue, setRangeValue] = useState(36);
  // le useEffect se joue lorsque le composant est monté/quandi il est appelé
  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((res) => setData(res.data))
  }, []);

  return (
    <div className="countries">
      <h1>Countries</h1>
      {/* element pour filtrer */}
      <ul className="radio-container">
        {/* creation visuel du curseur input range */}
        <input type="range" min="1" max="250" defaultValue={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)} />

      </ul>
      <ul>
        {/* limiter la metode curseur a un certains nombres de pays avec slice */}
        {/* 2eme params du slice on passe le nombre de pays a afficher rangeValue */}
        {data
          .slice(0, rangeValue)
          .map((country, index) => (
            // composant enfant de countries et on passe une props country pour lié le composant card
            <Card key={index} country={country} />
          ))}
      </ul>
    </div>
  );
};

export default Countries;