import React, { useState } from 'react';
import MovieComponent from './movieComponent'

class MovieSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            movieName: '',
            movies: []
        }
       
    }

    handleChange = (event)=>{
        const {name, value} = event.target
            this.setState({
            [name]:value
        })
    }
    
    handleSubmit = (e)=>{
        e.preventDefault()
         const apiUrl =`https://api.themoviedb.org/3/search/movie?api_key=523791d44abb49c1d137110c6733f23a&language=en-US&query=${this.state.movieName}&page=1&include_adult=false`
        try{
            fetch(apiUrl)
            .then(response=>response.json())
            .then(data=>{
                console.log(data.results)
                this.setState({
                    movies:data.results
                })
            })
        }catch(err){
            alert('Something went wrong')
        }
    }
    render() { 

        return ( 
            <div>
                <header className = 'header' ><h1>My Movie search App</h1></header>
                <form className = 'form' onSubmit = {this.handleSubmit}>
                <label className = 'label' htmlFor = 'movieName'>Input the movie name:</label>
               <input
                type="text"
               name = 'movieName'
               value = {this.state.movieName}
               onChange = {this.handleChange}
               placeholder = 'e.g. Back to the future'
              
               />
               <button className = 'button'>Search</button>
               </form>
            
               <div className = 'card-container'>
            {this.state.movies.filter(movie=>movie.poster_path).map(movie=>(
                <MovieComponent movie = {movie} />
           ))}
        </div>
        
               
            </div>
         );
    }
}
// function MovieSearch(){
//     const [query, setQuery] = useState('')
//     const [movies, setMovies] = useState([])

//      const searchMovie = async (e)=>{
//         e.preventDefault()
      
//         const url =  `https://api.themoviedb.org/3/search/movie?api_key=523791d44abb49c1d137110c6733f23a&language=en-US&query=${query}&page=1&include_adult=false`;
//         try{
           
//             const response = await fetch(url)
//             const data = await response.json()
//             console.log(data.results)
//             setMovies(data.results);

//         }
//         catch(err){
//             console.error(err)
//         }
//     }
//     return(
       
//         <>
//         <form onSubmit = {searchMovie}>
//             <label
//              htmlFor = 'query'
//              className = 'label'>Please input your search</label>
//             <input 
//             type="text"
//             name = 'query'
//             value = {query}
//             placeholder = 'e.g. Jurassic Park'
//             onChange = {(e)=>setQuery(e.target.value)}
//             />
//             <button type = 'submit'>Search</button>
//         </form>
//         <div className = 'card-container'>
//             {movies.filter(movie=>movie.poster_path).map(movie=>(
//            <MovieComponent movie = {movie} />
//            ))}
//         </div>
//         </>
      
//     )
// }
 
export default MovieSearch;
