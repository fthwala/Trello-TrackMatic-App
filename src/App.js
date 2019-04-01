import React, { Component } from 'react';
import Trello from './Trello/Trello';
import { BrowserRouter } from 'react-router-dom'

class App extends Component{
    render() {
        return(
            <BrowserRouter>
                <div>
                    <Trello />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;