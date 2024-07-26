import React from "react";
import MovieCard from "./Moviecard";

class MovieList  extends React.Component {

    render(){
        // const {title, plot, price, rating, stars, fav, isIncart, poster} = this.state.movies;
        const {movies, addStar, decStar, toggleFav, toggleCart } = this.props;
        console.log(this.props)
        return(
            <>
            {movies.map((movie)=><MovieCard 
            key={movie.id} 
            movies = {movie} 
            addStar= {addStar}
            decStar= {decStar}
            toggleFav={toggleFav}
            toggleCart={toggleCart}/>)}

            {/* <MovieCard movies={this.state}/> */}
            </>
            
            // <div className="movie-list">

            // </div>
        )
    }
}

export default MovieList;