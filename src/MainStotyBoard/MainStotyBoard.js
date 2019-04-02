import '../App.css';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import AddBoard from '../BoardList/AddBoard';
//import { DragDropContext } from 'react-dnd';

class MainStotyBoard extends Component{
      constructor(props) {
          super(props);
          this.state = {
              boards: {name: 'myFirstTrelloBod'}
          }
      }
      addBoard = (board) => {
       var timestamp = (new Date()).getTime();
       this.state.boards['board-' + timestamp ] = board;
       this.setState({ boards : this.state.boards });
      }

      render(){
        return (
          <div >
            <AddBoardForm addBoard={this.addBoard} />
            <BoardList boards={this.state.boards} />
          </div>
        );
       }
      };



  
      class BoardList extends Component{
        constructor(props){
          super(props);
          this.state = {
            showDash: true
          }
        }

        render(){
          let bords = null

      if (this.state.showDash){
        bords = (
          Object.keys(this.props.boards).map(function(key) {
            return <li href="/AddBoard" className="Board1">{<Route path="/AddBoard" component={AddBoard} />}{this.props.boards[key]}</li>
            
          }.bind(this))
        );
      }
        return (
        <div>
            <section className="Board">
            {bords}
            </section>
        </div>
        );
      }
    }

  

      class AddBoardForm extends Component{
        createBoard = (e) => {
          e.preventDefault();
         
          var board = this.refs.boardName.value;
          if(typeof board === 'string' && board.length > 0) {
            this.props.addBoard(board);
            this.refs.boardForm.reset();
          }
         }
         render(){
          return(
            <form className="InputBoard" ref="boardForm" onSubmit={this.createBoard}>
            <div className="form-group">
              <label className="boardItem">
                <input type="text" id="boardItem" placeholder="Enter Trello Board Name" ref="boardName" className="form-control" />
              </label>
              <button type="submit" className="btn btn-primary">Add Board</button>
            </div>
           </form>
          )
         }
        };

export default (MainStotyBoard);