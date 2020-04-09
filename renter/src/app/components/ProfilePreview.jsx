import React from 'react';


class ProfilePreview extends React.Component{
    render(){
        return(
        <div className="profil-preview-container">
            <div className="profil-nav">
                <div className="profil-nav-btn"><i className="fas fa-bell"></i></div>
                <div className="profil-nav-btn"><i className="fas fa-cog"></i></div>
            </div>
            <div className="info-preview">
                <div className="img-preview"></div>
                <h3>Name</h3>
            </div>
            <div className="portfolio-preview">
                <div className="protfolio-preview-info">
                    <div><i className="fas fa-money-bill-alt"></i></div>
                    <span>Networth</span>
                </div>
                <div className="protfolio-preview-info">
                    <div><i className="fas fa-money-bill-alt"></i></div>
                    <span>Cash</span>
                </div>
                <div className="protfolio-preview-info">
                    <div><i className="fas fa-home"></i></div>
                    <span>Number of Units</span>
                </div>
                <div className="protfolio-preview-info">
                    <div><i className="fas fa-money-bill-alt"></i></div>
                    <span>Cashflow</span>
                </div>
            </div>
            <div className="preview-tasks-container">
                <h2>Tasks</h2>
                <div className="preview-task">
                    <div className="task-icon"></div>
                    <div className="task-info">
                        <h4>Task title</h4>
                        <span>duo date</span>
                    </div>
                </div>
                <div className="preview-task">
                    <div className="task-icon"></div>
                    <div className="task-info">
                        <h4>Task title</h4>
                        <span>duo date</span>
                    </div>
                </div>
                <div className="preview-task">
                    <div className="task-icon"></div>
                    <div className="task-info">
                        <h4>Task title</h4>
                        <span>duo date</span>
                    </div>
                </div>
                <div className="view-more">View More >></div>
            </div>
          
        </div>
        )   
 }

}

export default ProfilePreview