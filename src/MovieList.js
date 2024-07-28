import MovieCard from "./Moviecard";
    function MovieList (props){
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
            </>
        )
}

export default MovieList;