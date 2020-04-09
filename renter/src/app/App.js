import React from 'react';
import '../scss/app.css';
import SideBar from './components/SideBar';
import Navbar from './components/Navbar';
import ProfilePreview from './components/ProfilePreview';

class App extends React.Component {
  render() {
    return(
    <div className="App">
        <SideBar/>
        <Navbar/>
        <ProfilePreview/>
    </div>)
  };
}

export default App;
