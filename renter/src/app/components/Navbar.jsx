import React from 'react';


class Navbar extends React.Component{
    render(){
        return(
        <div className="navbar">
            <ul className="navbar-links">
                <li>Overview</li>
                <li>Properties</li>
                <li>Statistics</li>
            </ul>
            <div className="navbar-btn">Add Property</div>
        </div>
        )   
 }

}

export default Navbar