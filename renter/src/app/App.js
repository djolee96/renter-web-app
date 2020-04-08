import React from 'react';
import '../scss/app.css';
import SideBar from './components/SideBar';
import Navbar from './components/Navbar';

class App extends React.Component {
  render() {
    return(
    <div className="App">
        <SideBar/>
        <Navbar/>
    </div>)
  };
}

export default App;
