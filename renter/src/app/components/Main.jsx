import React from 'react';
import Navbar from './Navbar';
import Dashboard from './main/Dashboard'
import StatisticPage from './main/StatisticPage'

class Main extends React.Component{
    render(){
        return(
        <div className="main">
            <Navbar/>
            {/* <Dashboard/> */}
            <StatisticPage/>
        </div>
        )   
 }

}

export default Main