import React from "react";

class MovieCard extends React.Component {
    constructor(){
        super();
        this.state={
            title: "The Avengers",
            plot: "Super heros movie",
            price: 199,
            rating: 8.9,
            stars: 0,
            fav: false,
            cart: true
            
        }
        // this.addStars = this.addStars.bind(this);
    }
    
    addStars=()=>{
        if(this.state.stars >= 5){
            return;
        }
        // form 1
        this.setState({stars: this.state.stars + 0.5})

        // form 2
        // this.setState((prevState)=>{
        //     return {stars: prevState.stars + 0.5}
        // })

        // console.log("this.state.stars:", this.state.stars)
    }

    decStar=()=>{
        if(this.state.stars <= 0){
            return;
        }
        this.setState({stars: this.state.stars - 0.5})

    }

    handlefav =()=>{
        this.setState({fav: !this.state.fav})
    }
    handlecart =()=>{
        this.setState({cart: !this.state.cart})
    }

    render(){
        const {title, plot, price, rating, stars,fav, cart} = this.state;
        return(

            <div className="main">
                <div className="movie-card">
                    
                    <div className="left">
                        <img src="https://m.media-amazon.com/images/I/71niXI3lxlL._SY879_.jpg" alt="poster"/>
                    </div>

                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs. {price}</div>
                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                                <img src="https://cdn-icons-png.flaticon.com/128/9146/9146915.png" 
                                alt="decrease" className="stars" onClick={this.decStar}/>

                                <img src="https://cdn-icons-png.flaticon.com/128/616/616490.png" 
                                alt="stars" className="stars"/>

                                <img src="https://t4.ftcdn.net/jpg/01/26/10/59/240_F_126105961_6vHCTRX2cPOnQTBvx9OSAwRUapYTEmYA.jpg" 
                                alt="increase" className="stars" onClick = {this.addStars}/>
                                <span className="starCount">{stars}</span>
                            </div>

                            {/* {fav? <button className="unfavourite-btn" onClick={this.handlefav}>Unfavorite</button> : 
                            <button className="favourite-btn" onClick={this.handlefav}>Favorite</button>} */}

                            <button className= {fav? "unfavourite-btn":"favourite-btn"} onClick={this.handlefav}>{fav? "Unfavorite":"Favorite"}</button>
                            <button className={cart? "removecart-btn": "cart-btn"} onClick={this.handlecart}>{cart? "Remove from Cart":"Add to Cart"} </button>

                        </div>


                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard;