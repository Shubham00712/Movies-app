import React from 'react';
import { addToMovie,handleSearchMovie,handleBlurEvent } from '../actions';

class Navbar extends React.Component {
  
    // constructor(props){
    //     super(props);
    //     this.state={
    //         searchText:''
    //     }
    // }

    handleAddToList = (movie) =>{
        this.props.dispatch(addToMovie(movie))
    }

    handleSearch =(e) =>{
        // const { searchText } =this.state
        this.props.dispatch(handleSearchMovie(e.target.value))
    }

    // handleChange=(e)=>{
    //     this.setState({searchText:e.target.value})
    //     console.log(this.state.searchText+"   "+e.target.value)
    //     this.handleSearch()
    // }

    handleBlur=()=>{
        // this.props.dispatch(handleBlurEvent(false))
    }

    render (){
        const { show,result } =this.props.search;
        console.log("Result",result);
        return (
            <div className="nav">
                <div className='search'>
                    <input className='input' onBlur={this.handleBlur} onChange={this.handleSearch} placeholder='Enter movie name'/>
                    &nbsp;&nbsp;
                    <button id='search-btn' onClick={this.handleSearch}>Search</button>
                </div>
                {
                    show &&
                    <div style={{zIndex:'2',display:'block',height:'0'}}>
                        {   
                            show &&
                            <div className='search-results'>
                                {result.map((movie,index)=>(
                                <div className='search-result' key={index}>
                                    <div className='left'><img src={movie.Poster} alt='Poster' /></div>
                                    <div className='right'>
                                        <span>{movie.Title}</span>
                                        <button onClick={()=>this.handleAddToList(movie)} >Add To Movies</button>
                                    </div>
                                </div>
                                ))
                            }
                            </div>
                        }
                    </div>
                }
            </div>
        )
    }
}

export default Navbar;
