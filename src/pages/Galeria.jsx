// eslint-disable-next-line no-unused-vars
import React from 'react';
import imagen1 from '../assets/img/gallery-1.jpg';
import imagen2 from '../assets/img/gallery-2.jpg';
import imagen3 from '../assets/img/gallery-3.jpg';

const Galeria = () => {
  return (
    <div>
      <h1>Galería</h1>
      <div>
        <img src={imagen1} alt="Imagen de la galería" />
        <img src={imagen2} alt="Imagen de la galería" />
        <img src={imagen3} alt="Imagen de la galería" />
      </div>
    </div>
  );
}

export default Galeria;
