//import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import ReactDOM from 'react-dom'
import HTML5Backend from 'react-dnd-html5-backend';
import Board from './Board';
//import Card     from './Card'
//import { brotliDecompress } from 'zlib';

class App extends Component {

    constructor(props) {
      super(props);	
      this.state = {
          bords: [
            {
              id: 1,
              cards: [{id: 1, text: 'one'}]
            }, 
           {
              id: 2,
              cards: [{id: 2, text: 'two'},
              {id: 3, text: 'three'}]
            } 
        ],
        newCard: [
          {
            id: 10,
          cards: [{id: 4, text: 'four'}]
          }
          
        ],
        
        addBoardprop: Board,
        showDash: true
      }
    }
      addBoard = () =>{
        //const bords = this.state.cards.push(this.state.newCard);
        //const bords = [ this.state.newCard, ...this.state.bords.cards]
        const bords = this.state.newCard.concat(this.state.bords)
        this.setState({bords: bords});
        //return bords;
      }

      toggleDashHandler = () => {
        const doesShow = this.state.showDash;
        this.setState({showDash: !doesShow});
      }

    render() {
      const style = {
        display: "flex",
        justifyContent: "space-around",
        paddingTop: "20px"
      }
     
      let bords = null

      if (this.state.showDash){
        bords = (
          <div>
          <div style={{...style}}>
          {this.state.bords.map((card) => {
            return <Board  id={card.cards.map(i => i.id)} list={card.cards.map(c => c)} />
          })}
        </div>
          </div> 
        );
      }

		return (
			<div>
            <button onClick={this.toggleDashHandler}>Close Dash Dord</button>
        <div>
          <form onSubmit={this.addItem}>
            <button onClick={this.addBoard}>add</button>
          </form>
        </div>
        {bords}
      </div>
       
		);
	}
}

export default DragDropContext(HTML5Backend)(App);