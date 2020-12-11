
import React  from 'react';

import './App.css'
import Home from "./containers/home"

class App extends React.Component {
    render(){
        return(
            <div>
                <h1>
                    <Home/>
                </h1>
            </div>

        );
    }
    
}
export default App;
