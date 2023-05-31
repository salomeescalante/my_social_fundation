// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    axios
      .get("./data/programs.json") // ruta relativa al archivo json de programas
      .then((response) => {
        setPrograms(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="home">
      {/* Aquí se podría usar el estado 'programs' para mostrar los datos */}
      <h1>Programas disponibles</h1>
      <ul>
        {programs.map((program) => (
          <li key={program.id}>
            <img src={program.image} alt={`Imagen de ${program.title}`} />
            <h2>{program.title}</h2>
            <p>{program.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
