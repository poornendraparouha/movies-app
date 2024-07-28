import MovieList from "./MovieList.js";
import Navbar from "./Navbar.js";
import React from "react";
import {movies} from "./MoviesData"
import "./index.css"
class App extends React.Component{
  constructor(){
    super();
    this.state={
        movies : movies,
        cartCount : 0
    }
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
    let { movies, cartCount } = this.state;
    const mid = movies.indexOf(movie);
    movies[mid].isIncart = !movies[mid].isIncart;
    if(movies[mid].isIncart){
      cartCount = cartCount + 1;
    }
    else{cartCount -= 1 }
    this.setState({ movies, cartCount });
};
  render(){
    const { movies, cartCount } = this.state;

    return(
      <>
      <Navbar cartCount = {cartCount}/>
      <MovieList movies = {movies}
      addStar= {this.handleIncStar}
      decStar= {this.handleDecStar}
      toggleFav={this.handleFav}
      toggleCart={this.handleAddToCart}
      />

      </>
    )
  }
}

export default App;
