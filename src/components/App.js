import React from 'react';
import { data } from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import '../style.css';
import { addMovies, ADDTOLIST } from '../actions';

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

  render () {
    const { list }=this.props.store.getState();
    console.log("RENDER");
    console.log("State",list);
  return (
    <div className="App">
      <Navbar />
      <div className='main'>
        <div className='tabs'>
          <div className='tab'>Movies</div>
          <div className='tab'>Favourities</div>
        </div>

        <div className='list'>
          { list.map((movie,index) =>(
            <MovieCard movie={movie} key={index}/>
          )) }
        </div>
      </div>
    </div>
  );
}
}

export default App;
