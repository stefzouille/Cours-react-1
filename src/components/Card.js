import React from 'react';

// props country permet de passer les donné d un composant parent a un composant enfant
const Card = ({ country }) => {
  return (
    <li className="card">
      <img src={country.flags.svg} alt={"drapeau" + country.translations.fra.common} />
      <div className="infos">
        <h2>{country.translations.fra.common}</h2>
        <h4>{country.capital}</h4>
        {/* toLocalString separateur de millier */}
        <p>Pop. {country.population.toLocaleString()}</p>
      </div>
    </li>
  );
};

export default Card;