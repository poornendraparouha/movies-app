import React from "react";
import MovieCard from "./Moviecard";

class MovieList  extends React.Component {

    
    constructor(){
        super();
        this.state={
            movies : [
                    {   id: 1,
                        title: "The Avengers",
                        plot: "Super heros movie",
                        price: 199,
                        rating: 8.9,
                        stars: 0,
                        fav: false,
                        isIncart: true,
                        poster: "https://m.media-amazon.com/images/I/71niXI3lxlL._SY879_.jpg"
                    },
                    {   id: 2,
                        title: "The Dark Knight",
                        plot: "Batman faces the Joker, who brings chaos to Gotham City.",
                        price: 249,
                        rating: 9.0,
                        stars: 0,
                        fav: false,
                        isIncart: true,
                        poster: "https://m.media-amazon.com/images/I/61RxB8tSkrL.jpg"
                    },
                    {   id: 3,
                        title: "Iron Man",
                        plot: "A billionaire industrialist and genius inventor, Tony Stark, is kidnapped and forced to build a devastating weapon.",
                        price: 199,
                        rating: 8.5,
                        stars: 0,
                        fav: false,
                        isIncart: true,
                        poster: "https://m.media-amazon.com/images/I/51CDHXxg46L._SX300_SY300_QL70_FMwebp_.jpg"
                    },
                    {   id: 4,
                        title: "Spider-Man: Homecoming",
                        plot: "Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man.",
                        price: 229,
                        rating: 7.4,
                        stars: 0,
                        fav: false,
                        isIncart: true,
                        poster: "https://upload.wikimedia.org/wikipedia/en/f/f9/Spider-Man_Homecoming_poster.jpg"
                    },
                    {   id: 5,
                        title: "Black Panther",
                        plot: "T'Challa returns home to the African nation of Wakanda to take his rightful place as king.",
                        price: 299,
                        rating: 7.3,
                        stars: 0,
                        fav: false,
                        isIncart: true,
                        poster: "https://lumiere-a.akamaihd.net/v1/images/p_blackpanther_19754_4ac13f07.jpeg"
                    },
                    {   id: 6,
                        title: "Wonder Woman",
                        plot: "Diana, princess of the Amazons, trained to be an unconquerable warrior.",
                        price: 199,
                        rating: 7.9,
                        stars: 0,
                        fav: false,
                        isIncart: true,
                        poster: "https://m.media-amazon.com/images/I/717t+mNlLeL._AC_SY879_.jpg"
                    } 
            ]  
        }
        // this.addStars = this.addStars.bind(this);
    };
    handleIncStar = (movie) => {
        const {movies} = this.state;

        const mid = movies.indexOf(movie);

        if (movies[mid].stars >= 5){
            return;
        }
        movies[mid].stars += 0.5;

        this.setState({movies: movies})
    }

    handleDecStar = (movie) => {
        const {movies} = this.state;

        const mid = movies.indexOf(movie);

        if (movies[mid].stars <= 0){
            return;
        }
        movies[mid].stars -= 0.5;

        this.setState({movies})
    }
 
    handleFav = (movie) => {
        const { movies } = this.state;

        const mid = movies.indexOf(movie);
        movies[mid].fav = !movies[mid].fav;

        this.setState({ movies });
    };

    handleAddToCart = (movie) => {
        const { movies } = this.state;

        const mid = movies.indexOf(movie);
        movies[mid].isIncart = !movies[mid].isIncart;

        this.setState({ movies });
    };

    render(){
        // const {title, plot, price, rating, stars, fav, isIncart, poster} = this.state.movies;
        const {movies} = this.state;
        return(
            <>
            {movies.map((movie)=><MovieCard 
            key={movie.id} 
            movies = {movie} 
            addStar= {this.handleIncStar}
            decStar= {this.handleDecStar}
            toggleFav={this.handleFav}
            toggleCart={this.handleAddToCart}/>)}

            {/* <MovieCard movies={this.state}/> */}
            </>
            
            // <div className="movie-list">

            // </div>
        )
    }
}

export default MovieList;