
import React from 'react';

export default function MovieComponent({movie}){
    return (
    <div className = 'card' key = {movie.id}>
    <img className = 'card-image'  src= {`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt= {`${movie.title} poster`}/>
    <div className = 'card-details'>
        <h3>{movie.title}</h3>
        <p><small>RELEASE DATE: {movie.release_date} </small></p>
        <p><small>RATING: {movie.vote_average}</small></p>
        <p>{movie.overview}</p>

    </div>
</div>
)
}