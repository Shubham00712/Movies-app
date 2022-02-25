import React from 'react';
import { data } from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import '../style.css';
import { addMovies,setShowFav } from '../actions';

class App extends React.Component {

  componentDidMount(){
    //make api call
    //dispatch action
    const store=this.props.store;
    
    //subscribe to store
    store.subscribe(() => {
      console.log("Updated");
      this.forceUpdate();
    })
    store.dispatch(addMovies(data));
    console.log(store.getState());
  }

  isFavourite = (movie) => {
    const { movies } =this.props.store.getState()
    const index=movies.favourites.indexOf(movie);
    if(index!==-1)
    return true
    return false
  }


  handleTabs=(val)=>{
    this.props.store.dispatch(setShowFav(val))
  }

  render () {
    const { movies,search } = this.props.store.getState()
    console.log("movies", movies)
    const { list , favourites , showfavourites }=movies;
    console.log("RENDER");
    console.log("State",this.props.store.getState());

    const displayMovies= showfavourites ? favourites : list
  return (
    <div className="App">
      <Navbar search={search} dispatch={this.props.store.dispatch} />
      <div className='main'>
        <div className='tabs'>
          <div className={`tab ${showfavourites ? '':'active-tab' } `} onClick={()=>this.handleTabs(false)}>Movies</div>
          <div className={`tab ${showfavourites ? 'active-tab': '' } `} onClick={()=>this.handleTabs(true)}>Favourities</div>
        </div>

        <div className='list'>
          { displayMovies.map((movie,index) =>(
            <MovieCard 
            movie={movie} 
            key={index}
            dispatch={this.props.store.dispatch}
            isFavourite={this.isFavourite(movie)}
            />
          )) }
        </div>
        {displayMovies.length===0 ? <div className="no-movie">No Movies to Display</div> : null}
      </div>
    </div>
  );
}
}

export default App;
