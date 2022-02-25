import React from 'react';
import { addToMovie,handleSearchMovie } from '../actions';
import MovieCard from './MovieCard';

class Navbar extends React.Component {
  
    constructor(props){
        super(props);
        this.state={
            searchText:''
        }
    }

    handleAddToList = (movie) =>{
        this.props.dispatch(addToMovie(movie))
    }

    handleSearch =() =>{
        const { searchText } =this.state
        this.props.dispatch(handleSearchMovie(searchText))
    }

    handleChange=(e)=>{
        this.setState({searchText:e.target.value})
        this.handleSearch()
    }

    render (){
        const { show,result } =this.props.search;
        console.log("Result",result);
        return (
            <div className="nav">
                <div className='search'>
                    <input className='input' onChange={this.handleChange} placeholder='Enter movie name'/>
                    &nbsp;&nbsp;
                    <button id='search-btn' onClick={this.handleSearch}>Search</button>
                </div>
                {
                    show &&
                    <div style={{zIndex:'10',display:'block',backgroundColor:'red',height:'20px'}}>
                        {   
                            show &&
                            <div className='search-results'>
                                <div className='search-result'>
                                    <img src={result.Poster} alt='Poster' />
                                    <div className='movie-info'>
                                        <span>{result.Title}</span>
                                        <button onClick={()=>this.handleAddToList(result)} >Add To Movies</button>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                }
            </div>
        )
    }
}

export default Navbar;
