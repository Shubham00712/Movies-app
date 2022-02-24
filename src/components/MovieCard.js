import React from 'react';
import { addFavourite,removeFavourite } from '../actions';
class MovieCard extends React.Component{
  

    handleFavourite =()=>{
        const {movie} =this.props
        this.props.dispatch(addFavourite(movie))
    }

    handleUnFavourite =() =>{
        const { movie }=this.props
        this.props.dispatch(removeFavourite(movie))
    }

    render (){
        const { movie,isFavourite }=this.props;
        return (
            <div className="movie-card">
                <div className="left">
                    <img src={movie.info.image_url} alt="movies-poster"/>
                </div>
                <div className='right'>
                    <div className='title'>{movie.title}</div>
                    <div className='plot'>{movie.info.plot}</div>
                    <div className='footer'>
                        <div className='rating'>{movie.info.rating}</div>
                        {
                            isFavourite 
                            ? <button className='unfav-btn' onClick={this.handleUnFavourite}>Unfavourite</button>
                            : <button className='fav-btn' onClick={this.handleFavourite}>Favourite</button>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard;
