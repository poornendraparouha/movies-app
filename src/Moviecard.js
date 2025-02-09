
 function MovieCard (props){

        const {movies, addStar, decStar, toggleFav, toggleCart} = props;
        const {title, plot, price, rating, stars,fav, isIncart, poster} = props.movies;
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
                            <button className= {fav? "unfavourite-btn":"favourite-btn"} onClick={() => toggleFav(movies)}>{movies.fav? "Unfavorite":"Favorite"}</button>
                            <button className={isIncart? "unfavourite-btn": "cart-btn"} onClick={() => toggleCart(movies)}>{movies.isIncart? "Remove from Cart":"Add to Cart"} </button>

                        </div>


                    </div>
                </div>
            </div>
        )
}
export default MovieCard;