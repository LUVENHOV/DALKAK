import React from 'react';
import CocktailItems from '../surveyComponents/CocktailItems';
import './CocktailSurvey.scss';
// interface ICocktail {
//   id: number;
//   name: string;
//   image: string;
// }
const CocktailSampleList = [
  { id: 1, name: 'Margarita', image: 'margarita.jpg' },
  { id: 2, name: 'Martini', image: 'martini.jpg' },
  { id: 3, name: 'Mojito', image: 'mojito.jpg' },
  { id: 4, name: 'Piña Colada', image: 'pina-colada.jpg' },
  { id: 5, name: 'Bloody Mary', image: 'bloody-mary.jpg' },
  { id: 6, name: 'Cosmopolitan', image: 'cosmopolitan.jpg' },
  { id: 7, name: 'Old Fashioned', image: 'old-fashioned.jpg' },
  { id: 8, name: 'Whiskey Sour', image: 'whiskey-sour.jpg' },
  { id: 9, name: 'Daiquiri', image: 'daiquiri.jpg' },
  { id: 10, name: 'Mai Tai', image: 'mai-tai.jpg' },
  { id: 11, name: 'White Russian', image: 'white-russian.jpg' },
  { id: 12, name: 'Negroni', image: 'negroni.jpg' },
  { id: 13, name: 'Gin and Tonic', image: 'gin-and-tonic.jpg' },
  { id: 14, name: 'Screwdriver', image: 'screwdriver.jpg' },
  { id: 15, name: 'Tequila Sunrise', image: 'tequila-sunrise.jpg' },
  { id: 16, name: 'Pisco Sour', image: 'pisco-sour.jpg' },
  { id: 17, name: 'Caipirinha', image: 'caipirinha.jpg' },
  { id: 18, name: 'Blue Lagoon', image: 'blue-lagoon.jpg' },
  { id: 19, name: 'Singapore Sling', image: 'singapore-sling.jpg' },
  { id: 20, name: 'Long Island Iced Tea', image: 'long-island-iced-tea.jpg' },
];

export default function CocktailSurvey() {
  return (
    <div className="wrapper">
      <div className="cocktail-grid">
        {CocktailSampleList.map((cocktail) => (
          <CocktailItems
            key={cocktail.id}
            id={cocktail.id}
            name={cocktail.name}
            image={cocktail.image}
          />
        ))}
        {/* {CocktailSampleList?.map(cocktail)=>(
          <div key={cocktail.id} className="cocktail-item">
            <img src=cocktail.image} alt={cocktail.name} />
            <div>{CocktailSampleList.</div>
            </div>
        )} */}
      </div>
    </div>
  );
}
