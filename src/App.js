// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import Home from './containers/home'
import Approuter from './config/routers'
class App extends React.Component{
    render(){   
        return (
            <div >
                <Approuter />

            </div>
        );
    }
}

export default App;
