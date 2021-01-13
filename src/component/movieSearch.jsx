import React, { useState } from 'react';

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
    componentDidMount(){
        
        fetch("https://swapi.dev/api/people/1/")
            .then(response=>response.json())
            .then(data=>{console.log(data)})
    }
    handleSubmit = (e)=>{
        e.preventDefault()
         const apiUrl =`https://api.themoviedb.org/3/search/movie?api_key=523791d44abb49c1d137110c6733f23a&language=en-US&query=${this.state.movieName}&page=1&include_adult=false`
        try{
            fetch(apiUrl)
            .then(response=>response.json())
            .then(data=>{
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
            {this.state.movies.filter(movie=>movie.poster_path).map(movie=>(<div className = 'card'>
                <img className = 'card-image'  src= {`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt= {`${movie.title} poster`}/>
                <div className = 'card-details'>
                    <h3>{movie.title}</h3>
                    <p><small>RELEASE DATE: {movie.release_date} </small></p>
                    <p><small>RATING: {movie.vote_average}</small></p>
                    <p>{movie.overview}</p>

                </div>
            </div>))}
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
//             {movies.filter(movie=>movie.poster_path).map(movie=>(<div>
//                 <img src= {`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt= {`${movie.title} poster`}/>
//                 <div>
//                     <h4>{movie.title}</h4>
//                     <p><small>RELEASE DATE: {movie.release_date} </small></p>
//                     <p><small>RATING: {movie.vote_average}</small></p>
//                     <p>{movie.overview}</p>

//                 </div>
//             </div>))}
//         </div>
//         </>
      
//     )
// }
 
export default MovieSearch;