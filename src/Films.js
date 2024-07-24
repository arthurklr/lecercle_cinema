import React, { useEffect, useState } from 'react';
import './Films.css';
import { Link } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('./movies.json')
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.movies);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Chargement de la page...</div>;
  }

  return (
    <div>
    <h2>Les films à l'affiche</h2>
    <ul className="movies-list">
      {movies.map((movie) => (
        <li key={movie.id} className="movie-item">
          <Link to={`/titre?=${encodeURIComponent(movie.title)}`}>
            <img src={movie.picture.medium} alt={movie.title} className="affiche_film" />
            <div className='info_horaires'>
                <div>{movie.first}</div>
              </div>
            <div className='info_carre'>
              <p className='duree_affiche'><img src='./clock.svg' alt='heure durée film'></img>{movie.hours}h{movie.minutes}min</p>
              <p className='genre_affiche'><img src='./bobine_film.png' alt='genre film'></img><span>{movie.genres}</span></p>
            </div>
            <div className='info_titre'>{movie.title}</div>
          </Link>
        </li>
        
      ))}
      
    </ul>
  </div>
  );
};

export default Movies;
