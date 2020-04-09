import React from 'react';

class Dashboard extends React.Component{
    render(){
        return(
        <div className="dashboard">
          <div className="dashboard-graph">
              <div className="dashboard-graph-nav">
                  <h3>Statistic of Portfolio</h3>
                  <select className="period">
                    <option value="year">Last Year</option>
                    <option value="month">Last 30 days</option>
                  </select>
              </div>
          </div>
          <div className="dashboard-task-container">
            <h1>Tasks</h1>
            <div className="dashboard-task-list">
                <div className="dashboard-task">
                    <div className="dashboard-task-icon"></div>
                    <div className="dashboard-task-info">
                        <h2>Title</h2>
                        <h5>Description</h5>
                        <span>25.05.2015</span>
                    </div>
                    <div className="dashboard-task-btn-container">
                        <span>Amount</span>
                        <div className="dashboard-task-btn collect">Collect</div>
                    </div>
                </div>
                <div className="dashboard-task">
                    <div className="dashboard-task-icon"></div>
                    <div className="dashboard-task-info">
                        <h2>Title</h2>
                        <h5>Description</h5>
                        <span>25.05.2015</span>
                    </div>
                    <div className="dashboard-task-btn-container">
                        <span>Amount</span>
                        <div className="dashboard-task-btn pay">Pay</div>
                    </div>
                </div>
                <div className="dashboard-task">
                    <div className="dashboard-task-icon"></div>
                    <div className="dashboard-task-info">
                        <h2>Title</h2>
                        <h5>Description</h5>
                        <span>25.05.2015</span>
                    </div>
                    <div className="dashboard-task-btn-container">
                        <span></span>
                        <div className="dashboard-task-btn finish">Finish</div>
                    </div>
                </div>
                <div className="dashboard-task">
                    <div className="dashboard-task-icon"></div>
                    <div className="dashboard-task-info">
                        <h2>Title</h2>
                        <h5>Description</h5>
                        <span>25.05.2015</span>
                    </div>
                    <div className="dashboard-task-btn-container">
                        <span>Amount</span>
                        <div className="dashboard-task-btn collect">Collect</div>
                    </div>
                </div>
                <div className="dashboard-task">
                    <div className="dashboard-task-icon"></div>
                    <div className="dashboard-task-info">
                        <h2>Title</h2>
                        <h5>Description</h5>
                        <span>25.05.2015</span>
                    </div>
                    <div className="dashboard-task-btn-container">
                        <span>Amount</span>
                        <div className="dashboard-task-btn collect">Collect</div>
                    </div>
                </div>
                <div className="dashboard-task">
                    <div className="dashboard-task-icon"></div>
                    <div className="dashboard-task-info">
                        <h2>Title</h2>
                        <h5>Description</h5>
                        <span>25.05.2015</span>
                    </div>
                    <div className="dashboard-task-btn-container">
                        <span>Amount</span>
                        <div className="dashboard-task-btn collect">Collect</div>
                    </div>
                </div>
            </div>
          </div>
            
        </div>
        )   
 }

}

export default Dashboard