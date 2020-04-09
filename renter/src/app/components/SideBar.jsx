import React from 'react';


class SideBar extends React.Component{
    render(){
        return(
        <div className="sidebar-container">
            <div className="sidebar-logo"><h2>Renter</h2></div>
            <div className="sidebar">
                <div className="sidebar-dashboard sidebar-active"><div className="sidebar-icon"><i className="fas fa-th-large fa-2x"></i></div></div>
                <div className="sidebar-properties "><div className="sidebar-icon"><i className="fas fa-home fa-2x"></i></div></div>
                <div className="sidebar-statistic "><div className="sidebar-icon"><i className="fas fa-chart-line fa-2x"></i></div></div>
                <div className="sidebar-profil "><div className="sidebar-icon"><i className="fas fa-user fa-2x"></i></div></div>
            </div>
        </div>
        )   
 }

}

export default SideBar