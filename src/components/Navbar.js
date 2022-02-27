import React from 'react';
import { addToMovie, handleSearchMovie, handleBlurEvent } from '../actions';

class Navbar extends React.Component {

    // constructor(props){
    //     super(props);
    //     this.state={
    //         searchText:''
    //     }
    // }

    handleAddToList = (movie) => {
        this.props.dispatch(addToMovie(movie))
    }

    handleSearch = (e) => {
        // const { searchText } =this.state
        console.log(e.target.value)
        if (e.target.value === '')
            this.props.dispatch(handleBlurEvent(false))
        else
            this.props.dispatch(handleSearchMovie(e.target.value))
    }
    handleBlur = () => {
        this.props.dispatch(handleBlurEvent(false))
    }

    render() {
        const { show, result, error } = this.props.search;
        console.log("Result", result + " " + result.length);
        return (
            <div>
                <div className="nav">
                    <div className='search'>
                        <input className='input' onChange={this.handleSearch} placeholder='Enter movie name' />
                        &nbsp;&nbsp;
                        <button id='search-btn' onClick={this.handleSearch}>Search</button>
                    </div>
                </div>
                <div className='search-nav'>
                    {
                        show &&
                        <div className='search-list'>
                            {
                                error ? <div className='too-many'>
                                    {result}
                                </div> :
                                    <div className='search-results'>
                                        {result.map((movie, index) => (
                                            <div className='search-result' key={index}>
                                                <div className='left'><img src={movie.Poster} alt='Poster' /></div>
                                                <div className='right'>
                                                    <span>{movie.Title}</span>
                                                    <button onClick={() => this.handleAddToList(movie)} >Add To Movies</button>
                                                </div>
                                            </div>
                                        ))
                                        }
                                    </div>
                            }
                        </div>
                    }
                </div>

            </div>
        )
    }
}

export default Navbar;
