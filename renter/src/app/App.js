import React from 'react';
import '../scss/app.css';
import SideBar from './components/SideBar';
import Main from './components/Main'
import ProfilePreview from './components/ProfilePreview';

class App extends React.Component {
  render() {
    return(
    <div className="App">
        <SideBar/>
        <Main/>
        <ProfilePreview/>
    </div>)
  };
}

export default App;
