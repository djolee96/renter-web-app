import React from 'react';
import Navbar from './Navbar';
import Dashboard from './main/Dashboard'


class Main extends React.Component{
    render(){
        return(
        <div className="main">
            <Navbar/>
            <Dashboard/>
        </div>
        )   
 }

}

export default Main