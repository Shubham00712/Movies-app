import React from 'react';
class MovieCard extends React.Component{
  
    render (){
        const { movie }=this.props;
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
                        <button className='fav-btn'>Favourite</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard;
