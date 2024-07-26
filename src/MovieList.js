// import React from "react";
import MovieCard from "./Moviecard";

// changing  component to functional component
// class MovieList  extends React.Component {
    function MovieList (props){
    // render(){
        // const {title, plot, price, rating, stars, fav, isIncart, poster} = this.state.movies;
        // const {movies, addStar, decStar, toggleFav, toggleCart } = this.props;
        const {movies, addStar, decStar, toggleFav, toggleCart } = props;
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
    // }
}

export default MovieList;