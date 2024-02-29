import React, { useState } from 'react';
import carbonara from './carbonara.jpg';
import lentils from './lentils.jpg';
import crepes from './crepes.jpg';

const recipeImages = [
  { id: 1, url: carbonara, description: 'Spaghetti Carbonara' },
  { id: 2, url: lentils, description: 'Lentil Soup' },
  { id: 3, url: crepes, description: 'Crepes' },
];

// Set gallery index state
const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

// Next image nav
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === recipeImages.length - 1 ? 0 : prevIndex + 1));
  };

// Previous image nav 
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? recipeImages.length - 1 : prevIndex - 1));
  };

// Display current image, description, & buttons
  return (
    <div>
      <img src={recipeImages[currentIndex].url} alt={recipeImages[currentIndex].description} />
        <p>{recipeImages[currentIndex].description}</p>
        <button onClick={prevImage}>Previous</button>
        <button onClick={nextImage}>Next</button>
    </div>
  );
};

export default Gallery;
