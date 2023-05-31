// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Noticias = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Fetch articles data from API with Axios
    axios.get('https://api.example.com/articles')
      .then(response => {
        setArticles(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="container">
      <h2>Noticias</h2>
      {articles.map(article => (
        <div key={article.id}>
          <h3>{article.title}</h3>
          <p>{article.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Noticias;
