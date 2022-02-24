import React from 'react';

class Navbar extends React.Component {
  
    render (){
        return (
            <div className="nav">
                <div className='search'>
                    <input className='input' placeholder='Enter movie name'/>
                    &nbsp;&nbsp;
                    <button id='search-btn'>Search</button>
                </div>
            </div>
        )
    }
}

export default Navbar;
