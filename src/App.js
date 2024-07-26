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
    const { movies } = this.state;

    return(
      <>
      <Navbar />
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

// function App() {
//   return (
//     <div className="App">
//      <>

//      <Navbar/>
//      <MovieList/>
//      </>
//     </div>
//   );
// }

export default App;
