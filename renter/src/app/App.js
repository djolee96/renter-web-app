import React from 'react';
import '../scss/app.css';
import SideBar from './components/SideBar';

class App extends React.Component {
  render() {
    return(
    <div className="App">
        <SideBar/>
    </div>)
  };
}

export default App;
