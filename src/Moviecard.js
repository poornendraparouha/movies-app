import React from "react";

class MovieCard extends React.Component {
 
    // addStars=()=>{
    //     if(this.state.stars >= 5){
    //         return;
    //     }
    //     // form 1
    //     this.setState({stars: this.state.stars + 0.5})

    //     // form 2
    //     // this.setState((prevState)=>{
    //     //     return {stars: prevState.stars + 0.5}
    //     // })

    //     // console.log("this.state.stars:", this.state.stars)
    // }

    // decStar=()=>{
    //     if(this.state.stars <= 0){
    //         return;
    //     }
    //     this.setState({stars: this.state.stars - 0.5})

    // }

    // handlefav =()=>{
    //     this.setState({fav: !this.state.fav})
    // }
    // handleAddToCart =()=>{
    //     this.setState({isIncart: !this.state.isIncart})
    // }

    render(){
        // console.log(this.props);
        const {movies, addStar, decStar, toggleFav, toggleCart} = this.props;
        const {title, plot, price, rating, stars,fav, isIncart, poster} = this.props.movies;
        return(

            <div className="main">
                <div className="movie-card">
                    
                    <div className="left">
                        <img className="poster" src={poster} alt="poster"/>
                    </div>

                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs. {price}</div>
                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                                <img src="https://cdn-icons-png.flaticon.com/128/9146/9146915.png" 
                                alt="decrease" className="stars" onClick={()=> {decStar(movies)}}/>

                                <img src="https://cdn-icons-png.flaticon.com/128/616/616490.png" 
                                alt="stars" className="stars"/>

                                <img src="https://t4.ftcdn.net/jpg/01/26/10/59/240_F_126105961_6vHCTRX2cPOnQTBvx9OSAwRUapYTEmYA.jpg" 
                                alt="increase" className="stars" onClick = {()=> {addStar(movies)}} />
                                <span className="starCount">{stars}</span>
                            </div>

                            {/* {fav? <button className="unfavourite-btn" onClick={this.handlefav}>Unfavorite</button> : 
                            <button className="favourite-btn" onClick={this.handlefav}>Favorite</button>} */}

                            <button className= {fav? "unfavourite-btn":"favourite-btn"} onClick={() => toggleFav(movies)}>{movies.fav? "Unfavorite":"Favorite"}</button>
                            <button className={isIncart? "unfavourite-btn": "cart-btn"} onClick={() => toggleCart(movies)}>{movies.isIncart? "Remove from Cart":"Add to Cart"} </button>

                        </div>


                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard;