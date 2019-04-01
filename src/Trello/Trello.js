import '../App.css';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import AddBoard from '../BoardList/AddBoard';
import MainStotyBoard from '../MainStotyBoard/MainStotyBoard'

class Trello extends Component{
        render(){
          return (
            <div className="container">
              <header>
                <nav>
                  <ul>
                    <li><a href="/">Boards</a></li>
                    <li><a href="/AddBoard">lists</a></li>
                  </ul>
                </nav>
              </header>

              {/* <Route path="/" exact render={() => <h1>hhhh</h1>} /> */}
              <Route path="/" exact component={MainStotyBoard} />
              <Route path="/AddBoard" component={AddBoard} />

             </div>
           );
         }
       }
  
// ReactDOM.render(<App initItems={todoItems}/>, document.getElementById('app'));

export default (Trello);